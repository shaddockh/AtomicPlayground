// Routines for generating an entity from a blueprint -- very basic implementation here
var blueprints = require('blueprints').blueprints;
var utils = require('utils');
var componentCrossref = require('Resources/Components/__componentCrossref');

var cache = {};

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

/**
 * Will extend either a blueprint of a sub component of a blueprint.
 *
 * @method extend
 * @param {Object} orig the original object to extend
 * @param extendwith
 * @return {Object|Array} Returns a brand new object that contains the merged values.  This differs from
 *                  most implementations that actually manipulate the orig object.
 */
function extend(orig) {
    var result = {};
    var i;

    for (i in orig) {
        if (orig.hasOwnProperty(i)) {
            result[i] = orig[i];
        }
    }

    // Taken from transpiled es6 sources
    for (var _len = arguments.length, objectsToExtendWith = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        objectsToExtendWith[_key - 1] = arguments[_key];
    }

    for (var x = 0; x < objectsToExtendWith.length; x++) {
        var extendwith = objectsToExtendWith[x];
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
    }
    return result;
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
 * Returns a blueprint from the library with the specified name.  If the blueprint has
 * an 'inherits' property, it will walk up the inheritance and fill in the values of the blueprint
 * appropriately from it's ancestors
 * @method
 * @param {string} name the name of the blueprint to retrieve
 * @param {blueprint} [extendWith] Optionally extend the blueprint returned with the passed in blueprint
 */
function getBlueprint(name, extendWith) {
    var blueprint = cache[name];
    if (!blueprint) {
        //Not in cache, so let's construct it
        blueprint = blueprints[name];
        if (blueprint) {
            blueprint.name = blueprint.name || name; // just in case we didn't specify it in the blueprint itself, but just by the key
            if (blueprint.inherits) {
                blueprint = extend(getBlueprint(blueprint.inherits), blueprint);
            }
            cache[name] = blueprint;
        }
    }

    if (extendWith) {
        return extend(blueprint, extendWith);
    } else {
        return blueprint;
    }
}

/**
 * Resolve the component name to the actual path of the component
 * @method
 * @param {string} componentName the name of the component.  If the component contains slashes, it will be assumed that the component is referenced by absolute path.  Otherwise, the component will be looked up in componentCrossref.js.json
 * @returns {string} the absolute path to the component
 */
function resolveComponent(componentName) {
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

/**
 * creates a new node and constructs it from the blueprint and attaches it to the parent node
 */
function createChild(parent, blueprint) {
    if (typeof (blueprint) === 'string') {
        blueprint = getBlueprint(blueprint);
    }

    var node = parent.createChild(blueprint.name);
    return buildEntity(node, blueprint);
}

/**
 * creates a new node and constructs it from the blueprint and attaches it to the parent node.
 * Also sets it's initial position
 */
function createChildAtPosition(parent, blueprint, spawnPosition) {
    var node = createChild(parent, blueprint);
    if (node.Position) {
        // Note, we need to make a copy of the world position here because many times it's being passed in as a reference
        // to a component's worldPosition2D which could be updated and cause this entity to behave incorrectly.
        // ie. an explosion should happen at the point of impact, not where the element is in the future.
        node.Position.spawnPosition = [spawnPosition[0], spawnPosition[1]];
    } else {
        throw new Error('Cannot spawn an entity at a postion without a Position component');
    }
    return node;
}

/**
 * mix in the blueprint to the owner
 */
function mixinBlueprint(owner, defaults, blueprintSection) {
    print('mixing in');
    for (var name in defaults) {
        owner[name] = defaults[name];
    }
    for (name in blueprintSection) {
        owner[name] = blueprintSection[name];
    }
}

exports.getBlueprint = getBlueprint;
exports.buildEntity = buildEntity;
exports.createChild = createChild;
exports.createChildAtPosition = createChildAtPosition;
exports.mixinBlueprint = mixinBlueprint;
