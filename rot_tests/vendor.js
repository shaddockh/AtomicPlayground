'use strict';

/*global Duktape:true */
// Replace the built in modSearch routine with our own, but keep 
// a reference to the original one that we will call in case a module
// we don't know about is requested.
Duktape.modSearch = (function (origModSearch, vendorMap) {
    return function (id, require, exports, module) {
        print('Searching for required module: ' + id);
        if (vendorMap[id]) {
            var result = vendorMap[id];

            print('found it');
            // Let's map the exports from the module to the exports 
            for (var exp in result) {
                exports[exp] = result[exp];
            }
        } else {
            return origModSearch(id, require, exports, module);
        }
    };
})(Duktape.modSearch, {
    'rot-js': require('./vendor_overrides/rot')
});
