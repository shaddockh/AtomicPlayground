/**
 * Calling this will walk the components in the provided node and if the component has the eventName as function
 * on it, will call it.  Ideally, this will be replaced by the native Atomic sendEvent/subscribeToEvent, but this works for now.
 * @method
 * @param {Node} node the node to trigger the event on
 * @param {string} eventName the name of the event to call
 * @param {Any} args arguments to pass on through to the event handler
 */
function trigger(node, eventName) {
    var components = node.getComponents();
    for (var c = 0, cLen = components.length; c < cLen; c++) {
        var component = components[c];
        if (component && typeof component[eventName] === 'function') {
            var args = Array.prototype.slice.call(arguments, 2);
            component[eventName].apply(component, args);
        }
    }
}

module.exports.trigger = trigger;
