/*eslint no-var:0*/
var DEBUG = true;

var metrics = require('./metricsGatherer');

/**
 * Calling this will walk the components in the provided node and if the component has the eventName as function
 * on it, will call it.  Ideally, this will be replaced by the native Atomic sendEvent/subscribeToEvent, but this works for now.
 * Additionally, if a component has a function called "onAny", that will be called with the event name
 * @method
 * @param {Node} node the node to trigger the event on
 * @param {string} eventName the name of the event to call
 * @param {Any} args arguments to pass on through to the event handler
 * @return {Array} an array of all the results, if there are any, otherwise an empty array
 */
function trigger(node, eventName) {
    if (DEBUG) {
        metrics.start(eventName);
    }
    var components = node.getComponents('JSComponent');
    var results = [];
    var args, argsAny;
    for (var c = 0, cLen = components.length; c < cLen; c++) {
        var component = components[c];
        var r;

        // Look for the named event
        if (component && typeof component[eventName] === 'function') {
            // only populate args the first time we need it
            args = args || Array.prototype.slice.call(arguments, 2);
            r = component[eventName].apply(component, args);
        }

        // See if there is an "onAny" event
        if (component && typeof component['onAny'] === 'function') {
            //o only populate argsAny the first time we need it
            argsAny = argsAny || [eventName].concat(Array.prototype.slice.call(arguments, 2));
            r = component['onAny'].apply(component, argsAny);
        }

        // Capture the results
        if (typeof (r) !== 'undefined') {
            results.push(r);
        }
    }
    if (DEBUG) {
        metrics.stop(eventName);
    }
    return results;
}

module.exports.trigger = trigger;
