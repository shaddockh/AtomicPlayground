// Routines for generating an entity from a blueprint -- very basic implementation here
var BlueprintCatalog = require('entity-blueprint-manager').BlueprintCatalog;

var blueprintCatalog = new BlueprintCatalog({
    ignoreCase: false,
    requireInherits: false
});

var DEBUG = false;

/**
 * Augments the base node object with a trigger function.  Calling this will
 * walk the components in the associated blueprint and if the component has the eventName as function
 * on it, will call it.
 * @method
 * @param {string} eventName the name of the event to call
 * @param {Any} args arguments to pass on through to the event handler
 */
function trigger(eventName) {
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
 * Gets the fragment of the blueprint for a component, automatically extended with the
 * components defaults.  Note that this is mixed into the node on creation
 * @method
 * @mixin
 * @param {JSComponent} componentRef The component to get the blueprint fragment fo
 * @param {Object} defaultBlueprint The default blueprint for this component.  This will be the base blueprint settings that get augmented by the custom component settings.
 */
function getComponentBlueprint(componentRef, defaultBlueprint) {
    return blueprintCatalog.extendBlueprint(defaultBlueprint, this.blueprint[componentRef.className]);
}

/**
 * Constructs an entity on the specified node from a blueprint
 */
function buildEntity(node, blueprint) {
    if (typeof (blueprint) === 'string') {
        blueprint = blueprintCatalog.getBlueprint(blueprint);
    }
    if (DEBUG) {
        print('Building entity: ' + blueprint.name);
    }
    node.getComponentBlueprint = getComponentBlueprint.bind(node);
    node.blueprint = blueprint;

    for (var componentName in blueprint) {
        if (typeof (blueprint[componentName]) === 'object') {
            try {
                var comp = node.createJSComponent(componentName);
                comp.blueprint = blueprint[componentName];
                if (comp.constructFromBlueprint) {
                    comp.constructFromBlueprint(blueprint[componentName]);
                }
                node[componentName] = comp;
            } catch (e) {
                throw new Error('Could not construct component ' +  componentName  + ' on ' + blueprint.name + '.');
            }
        }
    }

    node.trigger = trigger.bind(node);
    return node;
}

/**
 * creates a new node and constructs it from the blueprint and attaches it to the parent node
 */
function createChild(parent, blueprint) {
    if (typeof (blueprint) === 'string') {
        blueprint = blueprintCatalog.getBlueprint(blueprint);
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
    setDebugMode: function(val) {
        DEBUG = val ? true : false;
    },
    createChild: createChild,
    createChildAtPosition: createChildAtPosition
};

