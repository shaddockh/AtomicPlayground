// Routines for generating an entity from a blueprint -- very basic implementation here
"use strict";
var componentCrossref = null;
var COMPONENTS_DIR = 'Components';
var RESOURCES_DIR = 'Resources';
var PREFABS_DIR = 'Prefabs';
var GENERATED_PREFABS_DIR = Atomic.addTrailingSlash(PREFABS_DIR) + 'Generated';
var COMPONENTS_PATH = Atomic.addTrailingSlash(RESOURCES_DIR) + COMPONENTS_DIR;
var DEBUG = true;

var BlueprintCatalog = require('entity-blueprint-manager').BlueprintCatalog;

var blueprintCatalog = new BlueprintCatalog({
    ignoreCase: false,
    requireInherits: false
});

/**
 * Builders for the various types of components.  These are in charge of mapping the blueprint properties to 
 * the component.  JSComponents are generic, but native components may require specific builders
 *
 * Component builders must adhere to the interface:
 * {
 *    build: function(node, componentBlueprint, componentName, blueprint) {
 *    ...
 *    }
 *  }
 */
var componentBuilders = {
    // Used for mapping the root attributes of a node from a blueprint
    rootNodeComponentBuilder: {
        build: function (node, componentBlueprint, componentName, blueprint) {
            mapBlueprintToNativeComponent(node, blueprint, 'Node');
        }
    },

    // used to create and map a native component
    nativeComponentBuilder: {
        build: function (node, componentBlueprint, componentName) {
            if (DEBUG) {
                console.log('Attaching Native Component: ' + componentName + ' to node.');
            }
            var comp = node.createComponent(componentName);
            mapBlueprintToNativeComponent(comp, componentBlueprint, componentName);
        }
    },

    // Used to create and map a JSComponent
    jsComponentBuilder: {
        build: function (node, componentBlueprint, componentName) {
            if (DEBUG) {
                console.log('Attaching JSComponent: ' + componentName + ' to node.');
            }
            var component = resolveJSComponent(componentName);
            var jsComp = node.createJSComponent(component, componentBlueprint);
            // Need to set the attributes so that when generating the prefab, it gets persisted properly
            for (var prop in componentBlueprint) {
                jsComp.setAttribute(prop, componentBlueprint[prop]); // for generating the prefab
            }
            node[componentName] = jsComp;
            return jsComp;
        }
    }
};

var cachedNativeComponentProps = {};
/**
 * maps blueprint properties to a native component.  Will cache the native component type attributes for speed. 
 * @method
 * @param {AObject} component the component to map
 * @param {object} blueprint the blueprint to map to the component
 * @param {string} the name of the component
 */
function mapBlueprintToNativeComponent(component, blueprint, componentName) {

    var compPropertyXref = cachedNativeComponentProps[componentName];
    if (!compPropertyXref) {
        compPropertyXref = {};
        var attributes = component.getAttributes();
        for (var i = 0; i < attributes.length; i++) {
            var attr = attributes[i];
            compPropertyXref[attr.name.toLowerCase().replace(/\ /g, '')] = attr;
        }
        cachedNativeComponentProps[componentName] = compPropertyXref;
    }

    for (var prop in blueprint) {
        if (typeof (blueprint.prop) === 'object' && !Array.isArray(blueprint.prop)) {
            continue;
        }

        var attribute = compPropertyXref[prop.toLowerCase()];
        if (!attribute) {
            continue;
        }

        switch (attribute.type) {
        case Atomic.VAR_BOOL: // true or false
        case Atomic.VAR_INT: // 0
        case Atomic.VAR_FLOAT: // 0.0
        case Atomic.VAR_STRING: // "string"
        case Atomic.VAR_VECTOR2: // [0,0]
        case Atomic.VAR_VECTOR3: // [0,0,0]
        case Atomic.VAR_QUATERNION: // [0,0,0]
        case Atomic.VAR_COLOR: // [0,0,0,0]
            // blueprint already has the value in the right format, so let's just set it
            if (DEBUG) {
                console.log('setting attribute: ' + attribute.name + ' to value: ' + blueprint[prop]);
            }
            component.setAttribute(attribute.name, blueprint[prop]);
            break;
        case Atomic.VAR_RESOURCEREF:
            if (attribute.resourceTypeName) {
                if (DEBUG) {
                    console.log('setting attribute: ' + attribute.name + ' to value: ' + blueprint[prop] + ', resource type: ' + attribute.resourceTypeName);
                }
                component.setAttribute(attribute.name, Atomic.cache.getResource(attribute.resourceTypeName, blueprint[prop]));
            }
            break;
        default:
            throw new Error('Unknown attribute type: ' + attribute.type + ' on ' + componentName);
        }
    }

}

//TODO: need to find a better way to get the project root
function getProjectRoot() {
    var pth = '';
    var cl = Atomic.getArguments().join(',').split(',');
    for (var i = 0; i < cl.length; i++) {
        if (cl[i] === '--project') {
            pth = cl[i + 1];
            break;
        }
    }
    return pth;
}

function generatePrefab(scene, blueprint, path) {
    if (DEBUG) {
        console.log('Generating prefab: ' + blueprint.name + ' at ' + path);
    }

    // build the prefab
    // TODO: Need to figure out how update an existing prefab if it exists
    var node = createChild(scene, blueprint);
    var file = new Atomic.File(path, Atomic.FILE_WRITE);
    node.saveXML(file);
    file.close();

    // Delete the node
    node.removeAllComponents();
    node.remove();
}

function generatePrefabs() {
    // Let's create an edit-time scene..one that doesn't update or start the component
    var scene = new Atomic.Scene();
    scene.setUpdateEnabled(false);

    // Build the directory that our generated prefabs will go into  
    // TODO: Could be cleaner
    var fs = Atomic.fileSystem;
    var prefabPath = Atomic.addTrailingSlash(getProjectRoot() + RESOURCES_DIR) + PREFABS_DIR;
    fs.createDir(prefabPath);
    var path = Atomic.addTrailingSlash(getProjectRoot() + RESOURCES_DIR) + GENERATED_PREFABS_DIR;
    fs.createDir(path);

    for (var bpName in blueprintCatalog.getAllBlueprintNames()) {
        var blueprint = blueprintCatalog.getBlueprint(bpName);
        if (blueprint.isPrefab) {
            generatePrefab(scene, blueprint, Atomic.addTrailingSlash(path) + bpName + '.prefab');
        }
    }
}
/**
 * Utility function that will scan the Components directory for components and build a cross reference so that
 * when the blueprint system tries to attach a component, it knows where the component file is.
 * Note, that this will be cached so that it only builds the cross reference on game startup.
 * @method
 * @returns object Component cross reference file.
 */
function buildComponentCrossref() {
    //TODO: look at having a way of registering js components.  There may be a scenario where these components don't live in the Components folder and may be supplied by a library.
    // Cached
    if (componentCrossref) {
        return componentCrossref;
    }

    componentCrossref = {};

    var fs = Atomic.fileSystem;
    var pth = getProjectRoot();
    if (DEBUG) {
        console.log('Scanning ' + pth + COMPONENTS_PATH + ' for components.');
    }
    var componentFiles = fs.scanDir(pth + COMPONENTS_PATH, '*.js', Atomic.SCAN_FILES, true);
    for (var f = 0; f < componentFiles.length; f++) {
        var fn = componentFiles[f].replace('.js', '');
        var componentName = fn;
        if (fn.search('/')) {
            componentName = fn.split('/').pop();
        } else if (fn.search('\\')) {
            componentName = fn.split('\\').pop();
        }
        if (componentCrossref[componentName]) {
            throw new Error('Component names must be unique.  Component: ' + componentName + ' already registered.');
        }
        componentCrossref[componentName] = Atomic.addTrailingSlash(COMPONENTS_DIR) + fn + '.js';
        if (DEBUG) {
            console.log('Registering component: ' + componentName + ': ' + componentCrossref[componentName]);
        }
    }

    return componentCrossref;
}

/**
 * Will extend either a blueprint of a sub component of a blueprint.
 *
 * @method extend
 * @param {Object} orig the original object to extend
 * @param extendwith
 * @return {Object|Array} Returns a brand new object that contains the merged values.  This differs from
 *                  most implementations that actually manipulate the orig object.
 */
function extend(orig, extendwith) {
    var result = {};
    var i;

    for (i in orig) {
        if (orig.hasOwnProperty(i)) {
            result[i] = orig[i];
        }
    }

    for (i in extendwith) {
        if (extendwith.hasOwnProperty(i)) {
            if (typeof extendwith[i] === 'object') {
                if (extendwith[i] === null) {
                    result[i] = null;
                } else if (Array.isArray(extendwith[i])) {
                    //handle array types
                    result[i] = extendwith[i];
                } else {
                    result[i] = extend(result[i], extendwith[i]);
                }
            } else {
                result[i] = extendwith[i];
            }
        }
    }
    return result;
}

/**
 * Returns a blueprint from the library with the specified name.  If the blueprint has
 * an 'inherits' property, it will walk up the inheritance and fill in the values of the blueprint
 * appropriately from it's ancestors
 * @method
 * @param {string} name the name of the blueprint to retrieve
 */
function getBlueprint(name) {
    return blueprintCatalog.getBlueprint(name);
}

/**
 * Resolve the component name to the actual path of the component
 * @method
 * @param {string} componentName the name of the component.  If the component contains slashes, it will be assumed that the component is referenced by absolute path.  Otherwise, the component will be looked up in componentCrossref.js.json
 * @returns {string} the absolute path to the component
 */
function resolveJSComponent(componentName) {
    buildComponentCrossref();
    var comp;
    if (new RegExp('\\ | \/', 'g').test(componentName)) {
        // We have an absolute path to the component.  Let's assume the blueprint writer knows what they are doing and just return it.
        comp = componentName;
    } else {
        // We need to look up the component in the component cross-ref.  If it's there, return the full path
        comp = componentCrossref[componentName] || null;
    }
    return comp;
}

/**
 * Returns true if the component is a registered JSComponent
 * @method
 * @param componentName The name of the component to check
 */
function isRegisteredJSComponent(componentName) {
    // walk through the componentCrossref and see if we have any matches.  Assuming that if there
    // are no matches then either it's a native component or a bogus component
    if (resolveJSComponent(componentName)) {
        return true;
    }
    return false;
}

/**
 * Returns the component builder required to construct a component from a blueprint
 * @method
 * @param componentName the name of the component to retrieve the builder for
 */
function getComponentBuilder(componentName) {
    if (isRegisteredJSComponent(componentName)) {
        return componentBuilders.jsComponentBuilder;
    } else {
        return componentBuilders.nativeComponentBuilder;
    }
}

/**
 * Returns the comnponent builder required to map the root node values from a blueprint
 * @method
 */
function getRootComponentBuilder() {
    return componentBuilders.rootNodeComponentBuilder;
}

function buildEntity(node, blueprint) {
    if (typeof (blueprint) === 'string') {
        blueprint = getBlueprint(blueprint);
    }

    if (DEBUG) {
        console.log('Building entity: ' + blueprint.name);
    }

    var builder;

    // first lets map over the root of the node
    builder = getRootComponentBuilder();
    builder.build(node, null, null, blueprint);

    for (var componentName in blueprint) {
        if (typeof (blueprint[componentName]) === 'object' && !Array.isArray(blueprint[componentName])) {
            builder = getComponentBuilder(componentName);
            try {
                builder.build(node, blueprint[componentName], componentName, blueprint);
            } catch (e) {
                throw new Error('Could not construct component ' + componentName + '  on  ' + blueprint.name + '.\n' + e.toString());
            }
        }
    }

    return node;
}

function createChild(parent, blueprint) {
    if (typeof (blueprint) === 'string') {
        blueprint = getBlueprint(blueprint);
    }

    var node = parent.createChild(blueprint.name);
    return buildEntity(node, blueprint);
}

function createChildAtPosition(parent, blueprint, spawnPosition) {
    var node = createChild(parent, blueprint);
    if (spawnPosition.length === 2) {
        node.position2D = [spawnPosition[0], spawnPosition[1]];
    } else if (spawnPosition.length === 3) {
        node.position3D = [spawnPosition[0], spawnPosition[1], spawnPosition[3]];
    } else {
        throw new Error('Unknown spawnPosition format.  Can not determine if it\'s 2D or 3D');
    }
    return node;
}

exports.blueprintCatalog = blueprintCatalog;
exports.nodeBuilder = {
    createChild: createChild,
    createChildAtPosition: createChildAtPosition,
    getBlueprint: getBlueprint,
    generatePrefabs: generatePrefabs,
    setDebug: function (val) {
        DEBUG = val;
    }
};
