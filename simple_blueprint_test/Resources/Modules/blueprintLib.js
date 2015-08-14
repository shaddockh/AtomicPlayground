// Routines for generating an entity from a blueprint -- very basic implementation here
var cache = {};
var blueprintLibrary = require('blueprints');
var componentCrossref = null;
var COMPONENTS_DIR = 'Components';
var RESOURCES_DIR = 'Resources';
var PREFABS_DIR = 'Prefabs';
var GENERATED_PREFABS_DIR = Atomic.addTrailingSlash(PREFABS_DIR) + 'Generated';
var COMPONENTS_PATH = Atomic.addTrailingSlash(RESOURCES_DIR) + COMPONENTS_DIR;

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
function resolveComponent(componentName) {
    buildComponentCrossref();
    var comp;
    if (new RegExp('\\ | \/', 'g').test(componentName)) {
        // We have an absolute path to the component
        comp = componentName;
    } else {
        // We need to look up the component in the component cross-ref
        comp = componentCrossref[componentName] || componentName;
    }
    return comp;
}

function buildEntity(node, blueprint) {
    if (typeof (blueprint) === 'string') {
        blueprint = getBlueprint(blueprint);
    }
    print('Building entity: ' + blueprint.name);

    for (var componentName in blueprint) {
        if (typeof (blueprint[componentName]) === 'object') {
            try {
                var comp = node.createJSComponent(resolveComponent(componentName));
                var componentBlueprint = blueprint[componentName];
                for (var prop in componentBlueprint) {
                    comp.setAttribute(prop, componentBlueprint[prop]); // for generating the prefab
                    comp[prop] = componentBlueprint[prop]; // for setting the value
                    console.log(blueprint.name + ' - ' + componentName + '.' + prop + ' = ' + componentBlueprint[prop]);
                }
                node[componentName] = comp;
            } catch (e) {
                throw new Error('Could not construct component ' + componentName + '  on  ' + blueprint.name + '.');
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
    if (node.Position) {
        // Note, we need to make a copy of the world position here because many times it's being passed in as a reference
        // to a component's worldPosition2D which could be updated and cause this entity to behave incorrectly.
        // ie. an explosion should happen at the point of impact, not where the element is in the future.
        node.Position.spawnPosition = [spawnPosition[0], spawnPosition[1]];
    } else {
        throw new Error('Cannot spawn an entity at a position without a Position component');
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
    generatePrefabs: generatePrefabs
};
