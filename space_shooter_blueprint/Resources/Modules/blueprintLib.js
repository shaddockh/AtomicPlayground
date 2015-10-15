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
    // Used for mapping the root attributes of a node from a blueprint
    rootNodeComponentBuilder: {
        build: function (node, componentBlueprint, componentName, blueprint) {
            // handling this as an object literal in case I want to add things to the right of the property
            // TODO: see if we can use the native component builder
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

    // used to create and map a native component
    nativeComponentBuilder: {
        build: function (node, componentBlueprint, componentName, blueprint) {

            var comp = node.createComponent(componentName);

            // let's build up a cross ref of all the exposed types on the component
            // TODO: Optimize.. probably want to cache the component types so we don't have to continually reflect on them
            var compPropertyXref = {};
            var attributes = comp.getAttributes();
            for (var i = 0; i < attributes.length; i++) {
                var attr = attributes[i];
                compPropertyXref[attr.name.toLowerCase().replace(/\ /g, '')] = attr;
            }

            for (var prop in componentBlueprint) {
                var attribute = compPropertyXref[prop.toLowerCase()];
                if (!attribute) {
                    throw new Error('Unknown property name: ' + componentName + '.' + prop + ' in blueprint: ' + blueprint.name);
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
                        console.log('setting attribute: ' + attribute.name + ' to value: ' + componentBlueprint[prop]);
                    }
                    comp.setAttribute(attribute.name, componentBlueprint[prop]);
                    break;
                case Atomic.VAR_RESOURCEREF:
                    if (attribute.resourceTypeName) {
                        if (DEBUG) {
                            console.log('setting attribute: ' + attribute.name + ' to value: ' + componentBlueprint[prop] + ', resource type: ' + attribute.resourceTypeName);
                        }
                        comp.setAttribute(attribute.name, Atomic.cache.getResource(attribute.resourceTypeName, componentBlueprint[prop]));
                    }
                    break;
                default:
                    throw new Error('Unknown attribute type: ' + attribute.type + ' on component ' + componentName);
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
    var projectRoot = getProjectRoot();
    if (projectRoot === '') {
        console.log('Cannot generate prefabs without --project command line argument');
        return;
    }
    projectRoot = Atomic.addTrailingSlash(projectRoot);
    var scene = new Atomic.Scene();
    scene.setUpdateEnabled(false);

    // Build the directory that our generated prefabs will go into  
    // TODO: Could be cleaner
    var fs = Atomic.fileSystem;
    var path = Atomic.addTrailingSlash(RESOURCES_DIR) + GENERATED_PREFABS_DIR;
    if (fs.checkAccess(projectRoot + path)) {
        fs.createDirs(projectRoot, path);

        for (var bp in blueprintLibrary) {
            var blueprint = getBlueprint(bp);
            if (blueprint.isPrefab) {
                generatePrefab(scene, blueprint, Atomic.addTrailingSlash(projectRoot + path) + bp + '.prefab');
            }
        }
    } else {
        if (DEBUG) {
            console.log('Access denied writing to: ' + path);
        }
    }
}

/**
 * Scans for component files in the workspace and generated an index of componentname=componentpath entries
 * This will be loaded up in order to resolve blueprint components at runtime
 */
function generateComponentIndex(projectRoot, componentXrefFn) {

    var fs = Atomic.fileSystem;
    var idxPath = Atomic.addTrailingSlash(projectRoot) + Atomic.addTrailingSlash(RESOURCES_DIR) + componentXrefFn;
    var idxFile = new Atomic.File(idxPath, Atomic.FILE_WRITE);
    var xref = {};
    var componentsFound = 0;
    var slash = Atomic.addTrailingSlash('1')[1];
    if (DEBUG) {
        console.log('Writing component xref file to: ' + idxPath);
    }
    for (var i = 0, iEnd = Atomic.cache.resourceDirs.length; i < iEnd; i++) {
        var pth = Atomic.addTrailingSlash(Atomic.cache.resourceDirs[i]);

        if (fs.checkAccess(pth) && fs.dirExists(pth)) {
            if (DEBUG) {
                console.log('Searching for components in: ' + pth);
            }
            var componentFiles = fs.scanDir(pth, '*.js', Atomic.SCAN_FILES, true);
            for (var f = 0, fEnd = componentFiles.length; f < fEnd; f++) {
                // check to see if this is a component
                // TODO: for now, we just want to try and load components under a Components/ directory
                if (componentFiles[f].toLowerCase().indexOf('components' + slash) === -1) {
                    // skip it.
                    continue; 
                }

                var resource = Atomic.cache.getTempResource('JSComponentFile', componentFiles[f], false);

                if (resource) {
                    var internalComponentPath = componentFiles[f];

                    // if the path to the component starts with Resources/, then we need to peel that part off of it
                    if (internalComponentPath.indexOf(Atomic.addTrailingSlash(RESOURCES_DIR) === 0)) {
                        internalComponentPath = internalComponentPath.replace(Atomic.addTrailingSlash(RESOURCES_DIR), '');
                    }

                    var componentName = internalComponentPath.replace('.js', '');
                    // Grabbing just the filename part
                    if (componentName.indexOf(slash) >= 0) {
                        componentName = componentName.split(slash).pop();
                    }

                    // See if we have already registered this component
                    var oldComponent = xref[componentName];
                    if (oldComponent && oldComponent !== internalComponentPath && oldComponent.indexOf(internalComponentPath) === -1 && internalComponentPath.indexOf(oldComponent) === -1) {
                        throw new Error('Component names must be unique.  Component: ' + componentName + ' already registered as ' + xref[componentName] + '; trying to re-register as ' + internalComponentPath);
                    }
                    if (!oldComponent || (oldComponent.indexOf(internalComponentPath) === -1 && internalComponentPath.indexOf(oldComponent) === -1)) {
                        xref[componentName] = internalComponentPath;
                        if (componentsFound > 0) {
                            idxFile.writeString('\n');
                        }
                        idxFile.writeString(componentName + '=' + internalComponentPath);
                        componentsFound++;
                    }
                }
            }
        }
    }

    idxFile.flush();
    idxFile.close();
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
    var componentXrefFn = '_componentXref.txt';
    var projectRoot = getProjectRoot();
    if (projectRoot !== '') {
        // We have a project root, which means the --project command line param was passed.
        // this indicates that we are not running as a packaged build so we should
        // re-build the component index.
        generateComponentIndex(projectRoot, componentXrefFn);
    }
    var xrefFile = Atomic.cache.getFile(componentXrefFn);
    var fileContents = xrefFile.readString().split('\n');

    for (var c = 0; c < fileContents.length; c++) {
        var namePathSplit = fileContents[c].split('=');
        componentCrossref[namePathSplit[0]] = namePathSplit[1];
        if (DEBUG) {
            console.log('Registering component: ' + namePathSplit[0] + ' at ' + namePathSplit[1]);
        }
    }

    xrefFile.close();
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

module.exports = {
    createChild: createChild,
    createChildAtPosition: createChildAtPosition,
    getBlueprint: getBlueprint,
    generatePrefabs: generatePrefabs,
    setDebug: function (val) {
        DEBUG = val;
    }
};
