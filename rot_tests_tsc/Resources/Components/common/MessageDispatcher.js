'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CustomJSComponent_1 = require('CustomJSComponent');
var metrics = require('metricsGatherer');
/**
 * This will cache trigger methods on a node
 */
var MessageDispatcher = (function (_super) {
    __extends(MessageDispatcher, _super);
    function MessageDispatcher() {
        _super.call(this);
        this.cachedHandlers = {};
    }
    MessageDispatcher.prototype._getHandlerList = function (msg) {
        var handlerList = this.cachedHandlers[msg];
        if (!handlerList) {
            this.DEBUG("Building handler list for " + msg);
            handlerList = [];
            var components = this.node.getComponents('JSComponent');
            for (var c = 0, cLen = components.length; c < cLen; c++) {
                var component = components[c];
                // Look for the named event
                if (component && typeof component[msg] === 'function') {
                    this.DEBUG("setting " + msg + " handler");
                    handlerList.push({
                        owner: component,
                        method: component[msg]
                    });
                }
            }
            this.cachedHandlers[msg] = handlerList;
        }
        return handlerList;
    };
    MessageDispatcher.prototype._processHandlers = function (handlers, argumentArray) {
        var results = [];
        var r;
        for (var i = 0; i < handlers.length; i++) {
            r = handlers[i].method.apply(handlers[i].owner, argumentArray);
            // Capture the results
            if (typeof (r) !== 'undefined') {
                results.push(r);
            }
        }
        return results;
    };
    /**
     * called by the trigger system to fire off the handlers and cache them so
     * they don't need to be searched for the next time.
     * @method
     * @param {string} msg The message to hook
     * @param {array} args The arguments to pass to the message
     */
    MessageDispatcher.prototype.dispatchMessage = function (msg) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        metrics.start('dispatchMessage');
        this.DEBUG("Looking for handler: " + msg + " on node");
        // Process the specific message
        var results = this._processHandlers(this._getHandlerList(msg), args);
        // Process the onAny message
        var anyArgs = [msg].concat(args);
        results = results.concat(this._processHandlers(this._getHandlerList('onAny'), anyArgs));
        metrics.stop('dispatchMessage');
        return results;
    };
    return MessageDispatcher;
}(CustomJSComponent_1.default));
module.exports = MessageDispatcher;
