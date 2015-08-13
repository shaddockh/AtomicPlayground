// Routines for generating an entity from a blueprint -- very basic implementation here
var cache = {};
var blueprintLibrary = require('blueprints').blueprints;
var componentCrossref = null;
var COMPONENTS_DIR = 'Components';
var RESOURCES_DIR = 'Resources';
var COMPONENTS_PATH = Atomic.addTrailingSlash(RESOURCES_DIR) + COMPONENTS_DIR;

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
    var cl = Atomic.getArguments().join(',').split(',');
    var pth = '';
    for (var i = 0; i < cl.length; i++) {

        if (cl[i] === '--project') {
            pth = cl[i + 1];
            break;
        }
    }
    console.log(COMPONENTS_PATH);
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
 * Gets the fragment of the blueprint for a component, automatically extended with the
 * components defaults
 * @method
 * @param {JSComponent} componentRef The component to get the blueprint fragment fo
 * @param {Object} defaultBlueprint The default blueprint for this component.  This will be the base blueprint settings that get augmented by the custom component settings.
 */
function getComponentBlueprint(componentRef, defaultBlueprint) {
    // Look up the component name in the cross ref
    var componentName;
    var fullComponentName = componentRef.getComponentFile().getName();
    buildComponentCrossref();
    for (var name in componentCrossref) {
        if (fullComponentName === componentCrossref[name]) {
            componentName = name;
            break;
        }
    }

    // If it's not in the cross-ref, see if the full component name is in the blueprint
    if (!componentName) {
        if (!this.blueprint[fullComponentName]) {
            componentName = fullComponentName;
        } else {
            throw new Error('Could not find component in blueprint: ' + fullComponentName);
        }
    }

    return extend(defaultBlueprint, this.blueprint[componentName]);
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
    node.getComponentBlueprint = getComponentBlueprint.bind(node);
    node.blueprint = blueprint;

    for (var componentName in blueprint) {
        if (typeof (blueprint[componentName]) === 'object') {
            try {
                var comp = node.createJSComponent(resolveComponent(componentName));
                comp.blueprint = blueprint[componentName];
                if (comp.constructFromBlueprint) {
                    comp.constructFromBlueprint(blueprint[componentName]);
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

exports.buildEntity = buildEntity;
exports.buildChildEntity = buildChildEntity;
exports.createChild = createChild;
exports.mixinBlueprint = mixinBlueprint;
exports.createChildAtPosition = createChildAtPosition;
exports.getBlueprint = getBlueprint;
