'use strict';
'atomic component';
import CustomJSComponent from 'CustomJSComponent';
import * as metrics from 'metricsGatherer';

/**
 * This will cache trigger methods on a node
 */
export default class MessageDispatcher extends CustomJSComponent {
    constructor() {
        super();
   }

    cachedHandlers = {
    };

    _getHandlerList(msg) {
        let handlerList = this.cachedHandlers[msg];
        if (!handlerList) {
            this.DEBUG(`Building handler list for ${msg}`);
            handlerList = [];
            const components = this.node.getComponents('JSComponent');
            for (let c = 0, cLen = components.length; c < cLen; c++) {
                let component = components[c];
                // Look for the named event
                if (component && typeof component[msg] === 'function')  {
                    this.DEBUG(`setting ${msg} handler`);
                    handlerList.push({
                        owner: component,
                        method: component[msg]
                    });
                }
            }
            this.cachedHandlers[msg] = handlerList;
        }
        return handlerList;
    }

    _processHandlers(handlers, argumentArray) {
        let results = [];
        let r;
        for (let i = 0; i < handlers.length; i++) {
            r = handlers[i].method.apply(handlers[i].owner, argumentArray);
            // Capture the results
            if (typeof (r) !== 'undefined') {
                results.push(r);
            }
        }
        return results;
    }

    /**
     * called by the trigger system to fire off the handlers and cache them so 
     * they don't need to be searched for the next time.
     * @method 
     * @param {string} msg The message to hook
     * @param {array} args The arguments to pass to the message
     */
    dispatchMessage(msg, ...args) {
        metrics.start('dispatchMessage');
        this.DEBUG(`Looking for handler: ${msg} on node`);

        // Process the specific message
        let results = this._processHandlers(this._getHandlerList(msg), args);

        // Process the onAny message
        let anyArgs = [msg].concat(args); 
        results = results.concat(this._processHandlers(this._getHandlerList('onAny'), anyArgs));

        metrics.stop('dispatchMessage');
        console.log(msg + ' - results length: ' + results.length);
        return results;
    }

}
