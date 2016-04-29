'use strict';
var debug = false;
/*global Duktape:true */
// Replace the built in modSearch routine with our own, but keep
// a reference to the original one that we will call in case a module
// we don't know about is requested.
Duktape.modSearch = (function (origModSearch, vendorMap) {
    return function (id, require, exports, module) {
        if (vendorMap[id]) {
            var result = vendorMap[id];

            if (debug) {
                console.log('Loading vendor module: ' + id);
            }
            // Let's map the exports from the module to the exports
            for (var exp in result) {
                if (debug) {
                    console.log('mapping export: ' + exp);
                }
                exports[exp] = result[exp];
            }
        } else {
            if (debug) {
                console.log('Loading other module: ' + id);
            }
            return origModSearch(id, require, exports, module);
        }
    };
}(Duktape.modSearch, {
    'atomic-blueprintlib': require('./atomic-blueprintlib.js')
}));
