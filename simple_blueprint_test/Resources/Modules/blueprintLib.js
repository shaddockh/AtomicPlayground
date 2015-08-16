// Routines for generating an entity from a blueprint -- very basic implementation here
//
// **** NOTE ****
// This is all in one file for this prototype and to make it easy to read and copy/paste.  At some point this will be broken out into more granular 
// modules and converted to ES6 compliant TypeScript (Since the Atomic Editor is being written in TypeScript).  A Transpiled/single module vanilla JS version
// will be generated from that.
//

var cache = {};
var blueprintLibrary = require('blueprints');
var componentCrossref = null;
var COMPONENTS_DIR = 'Components';
var RESOURCES_DIR = 'Resources';
var PREFABS_DIR = 'Prefabs';
var GENERATED_PREFABS_DIR = Atomic.addTrailingSlash(PREFABS_DIR) + 'Generated';
var COMPONENTS_PATH = Atomic.addTrailingSlash(RESOURCES_DIR) + COMPONENTS_DIR;
var DEBUG = true;

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
    // Default used when a component cannot be resolved
    missingComponentBuilder: {
        build: function (node, componentBlueprint, componentName, blueprint) {
            throw new Error('No component builder defined for component: ' + componentName);
        }
    },

    // Used for mapping the root attributes of a node from a blueprint
    rootNodeComponentBuilder: {
        build: function (node, componentBlueprint, componentName, blueprint) {
            // handling this as an object literal in case I want to add things to the right of the property
            var props = {
                position2D: '',
                position3D: '',
                scale2D: '',
                scale3D: ''
            };
            for (var p in props) {
                if (blueprint[p]) {
                    node[p] = blueprint[p];
                }
            }
        }
    },

    // Used to create and map a native component
    nativeComponentBuilder: {
        build: function (node, componentBlueprint, componentName, blueprint) {
            var comp = node.createComponent(componentName);
            for (var prop in componentBlueprint) {
                comp[prop] = componentBlueprint[prop]; // for setting the value
            }
            return comp;
        }
    },

    // Used to create and map a JSComponent
    jsComponentBuilder: {
        build: function (node, componentBlueprint, componentName, blueprint) {
            var component = resolveJSComponent(componentName);
            if (DEBUG) {
                console.log('Attaching JSComponent: ' + component + ' to node.');
            }
            var jsComp = node.createJSComponent(component, componentBlueprint);
            // Need to set the attributes so that when generating the prefab, it gets persisted properly
            for (var prop in componentBlueprint) {
                jsComp.setAttribute(prop, componentBlueprint[prop]); // for generating the prefab
            }
            node[componentName] = jsComp;
            return jsComp;
        }
    },

    // Static Sprite 2D
    StaticSprite2D: {
        build: function (node, componentBlueprint, componentName, blueprint) {
            var automapFields = [
                'sprite'
            ];

            var comp = node.createComponent(componentName);
            for (var i in componentBlueprint) {
                if (automapFields.indexOf(i) > -1) {
                    switch (i) {
                    case 'sprite':
                        comp.sprite = Atomic.game.getSprite2D(componentBlueprint[i]);
                        break;
                    }
                } else {
                    comp[i] = componentBlueprint[i];
                }
            }

        }
    }
};

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

/**
 * Augments the base node object with a trigger function.  Calling this will
 * walk the components in the associated blueprint and if the component has the eventName as function
 * on it, will call it.
 * @method
 * @param {string} eventName the name of the event to call
 * @param {Any} args arguments to pass on through to the event handler
 */
function trigger(eventName) {
    // taken from es6 transpiled version
    for (var componentName in this.blueprint) {
        var component = this[componentName];
        if (component && typeof component[eventName] === 'function') {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }
            component[eventName].apply(component, args);
        }
    }
}

function generatePrefab(scene, blueprint, path) {
    console.log('Generating prefab: ' + blueprint.name + ' at ' + path);

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

    for (var bp in blueprintLibrary) {
        var blueprint = getBlueprint(bp);
        if (blueprint.isPrefab) {
            generatePrefab(scene, blueprint, Atomic.addTrailingSlash(path) + bp + '.prefab');
        }
    }
}
/**
 * Utiliity function that will scan the Components directory for components and build a cross reference so that
 * when the blueprint system tries to attach a component, it knows where the component file is.
 * Note, that this will be cached so that it only builds the cross reference on game startup.
 * @method
 * @returns object Component cross reference file.
 */
function buildComponentCrossref() {
    // Cached
    if (componentCrossref) {
        return componentCrossref;
    }

    componentCrossref = {};

    var fs = Atomic.fileSystem;
    var pth = getProjectRoot();
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
        console.log('Registering component: ' + componentName + ': ' + componentCrossref[componentName]);
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
                } else if (extendwith[i].length) {
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
    var blueprint = cache[name];
    if (!blueprint) {
        //Not in cache, so let's construct it
        blueprint = blueprintLibrary[name];
        if (blueprint) {
            blueprint.name = blueprint.name || name; // just in case we didn't specify it in the blueprint itself, but just by the key
            if (blueprint.inherits) {
                blueprint = extend(getBlueprint(blueprint.inherits), blueprint);
            }
            cache[name] = blueprint;
        }
    }
    return blueprint;
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
 * Will register a native component builder with the component builders process.
 * @method
 * @param componentName name of the component to build for
 * @param builder the builder that constructs the component.
 */
function registerComponentBuilder(componentName, builder) {
    // sanity check
    if (typeof (builder.build) !== 'function') {
        throw new Error('Builder for ' + componentName + ' must expose a "build" method.');
    }

    componentBuilders[componentName] = builder;
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
        // return the bulder for the component if it exists, or just return the builder for a missingComponentBuilder
        return componentBuilders[componentName] || componentBuilders.missingComponentBuilder;
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
    print('Building entity: ' + blueprint.name);

    var builder;

    // first lets map over the root of the node
    builder = getRootComponentBuilder();
    builder.build(node, null, null, blueprint);

    for (var componentName in blueprint) {
        if (typeof (blueprint[componentName]) === 'object' && !blueprint[componentName].length) {
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
var buildChildEntity = createChild;

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

function mixinBlueprint(owner, defaults, blueprintSection) {
    print('mixing in');
    for (var name in defaults) {
        owner[name] = defaults[name];
    }
    for (name in blueprintSection) {
        owner[name] = blueprintSection[name];
    }
}

module.exports = {
    buildEntity: buildEntity,
    buildChildEntity: buildChildEntity,
    createChild: createChild,
    mixinBlueprint: mixinBlueprint,
    createChildAtPosition: createChildAtPosition,
    getBlueprint: getBlueprint,
    generatePrefabs: generatePrefabs,
    registerComponentBuilder: registerComponentBuilder
};
