(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.atomicBlueprintLib = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
// Routines for generating an entity from a blueprint -- very basic implementation here
var BlueprintCatalog = _dereq_('entity-blueprint-manager').BlueprintCatalog;

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


},{"entity-blueprint-manager":2}],2:[function(_dereq_,module,exports){
module.exports.MixinCatalog = _dereq_('./lib/mixinCatalog');
module.exports.BlueprintCatalog = _dereq_('./lib/blueprintCatalog');
module.exports.Dictionary = _dereq_('./lib/dictionary');
},{"./lib/blueprintCatalog":3,"./lib/dictionary":4,"./lib/mixinCatalog":5}],3:[function(_dereq_,module,exports){
var Dictionary = _dereq_('./dictionary');
/**
 * Generic blueprint manager.  What this will do is allow you
 * to define a hierarchy of templates that descend from each other.
 * when creating a blueprint, it will walk up the entire tree of the
 * hierarchy and fill in any blank values that are provided at parent levels
 * and give you a fully hydrated blueprint.
 *
 * ie:
 *
 * blueprints: {
 *  parent: {
 *      inherits: '_base'
 *      ,component1: {
 *          val1: 'value'
 *          ,val2: 'valParent'
 *      }
 *  },
 *  child: {
 *      inherits: 'parent'
 *      ,component1: {
 *          val3: 'val3'
 *          ,val2: 'valChild'  //will override parent!
 *      }
 *  }
 *
 * }
 *
 * generateInstanceBlueprint('child') will create:
 *
 * {
 *   inherits: 'child'
 *   id: 10293
 *   ,component1: {
 *      val1: 'value'
 *      ,val2: 'valChilde'
 *      ,val3: 'val3'
 *  }
 * }
 *
 * options: {
 *    ignoreCase: true -- don't try to match case when loading/searching fror blueprints
 *    requireInherits: true -- an inherits: 'value' must be present on each blueprint.  For the top level, specify: inherits: '_base'
 *  
 * }
 */

var BlueprintCatalog = function (opts) {
    "use strict";

    var defaults = {
        ignoreCase: true,
        requireInherits: true
    };

    var options = extendBlueprint(defaults, opts || {});

    var blueprintDictionary = new Dictionary({
        ignoreCase: options.ignoreCase
    });
    var hydratedBlueprints = new Dictionary({
        ignoreCase: options.ignoreCase
    });
    var bpList = [];
    var debugMode = false;

    var needsReindexing = false;

    /**
     * Clears the blueprints and resets everything
     *
     * @method clear
     */
    function clear() {
        blueprintDictionary.clear();
        hydratedBlueprints.clear();
        bpList = [];
        needsReindexing = false;
    }

    /**
     * loads a single blueprint into the dictionary.
     * progressCallback can optionally be provided as:
     *   function(blueprintName, true|false (loaded), msg)
     *
     * @method loadSingleBlueprint
     * @param {object} blueprint
     * @param {string} [blueprintName]
     * @param {function} [progressCallback] Callback with the signature  function(blueprintName, loaded (boolean), message, blueprint)
     */
    function loadSingleBlueprint(blueprint, blueprintName, progressCallback) {
        blueprint.name = blueprint.name || blueprintName;
        needsReindexing = true;

        if (options.requireInherits && typeof (blueprint.inherits) === 'undefined') {
            throw new Error('Blueprint does not provide an "inherits" property: ' + blueprint.name);
        }

        try {
            blueprintDictionary.add(blueprint.name, blueprint);
            if (progressCallback) {
                progressCallback(blueprint.name, true, 'Loaded blueprint: ' + blueprint.name, blueprint);
            }
        } catch (e) {
            if (progressCallback) {
                progressCallback(blueprint.name, false, e.message, blueprint);
            }
        }
    }

    /**
     * loads a block of blueprints into the dictionary.  They need to be in the format
     * {
     *   blueprintName: { blueprint details ... }
     *   blueptintName: { blueprint details ... }
     * }
     * progressCallback can optionally be provided as:
     *   function(blueprintName, true|false (loaded), msg)
     *
     * @method loadBlueprints
     * @param {object} block a block of blueprints to load with keys as the name of each blueprint
     * @param {function} [progressCallback] Callback with the signature  function(blueprintName, loaded (boolean), message, blueprint)
     */
    function loadBlueprints(block, progressCallback) {
        for (var blueprintName in block) {
            if (block.hasOwnProperty(blueprintName)) {
                loadSingleBlueprint(block[blueprintName], blueprintName, progressCallback);
            }
        }
    }

    /**
     * Will extend either a blueprint of a sub component of a blueprint, returning a new blueprint containing the combination.
     * The original blueprint will not be modified unless inPlaceExtend is set.
     *
     * @method extendBlueprint
     * @param orig original blueprint to extend
     * @param extendwith object to extend original blueprint with
     * @param {bool} [inPlaceExtend] if true, will modify the orig blueprint.  Defaults to false
     * @return {Object} New object that contains the merged values
     */
    function extendBlueprint(orig, extendwith, inPlaceExtend) {
        var result = inPlaceExtend ? orig : {};
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
                        result[i] = extendBlueprint(result[i], extendwith[i]);
                    }
                } else {
                    result[i] = extendwith[i];
                }
            }
        }
        return result;
    }

    /**
     * will return a blueprint hydrating it with values from it's lineage, optionally extending it with
     * the blueprint provided with 'extendwith'
     *
     * @method getBlueprint
     * @param name the name of the blueprint to return.  Must already have been loaded into the library.
     * @param {object} [extendWith] Optionally extend the returned blueprint with this blueprint
     * @return {object} hydrated blueprint
     */
    function getBlueprint(name, extendWith) {
        var result;

        if (!hydratedBlueprints.containsKey(name)) {
            if (debugMode) {
                console.log('hydrating ' + name);
            }
            result = blueprintDictionary.get(name);

            if (typeof result.inherits === 'undefined' || result.inherits === '_base') {
                hydratedBlueprints.add(name, result);
            } else {
                try {
                    var hydrated = getBlueprint(result.inherits, result);
                    hydratedBlueprints.add(name, hydrated);
                    result = hydrated;
                } catch (e) {
                    throw new Error('Blueprint: "' + name + '" inherits from undefined blueprint: "' + result.inherits + '"');
                }
            }
        } else {
            result = hydratedBlueprints.get(name);
        }

        if (extendWith) {
            result = extendBlueprint(result, extendWith);
        }
        return result;
    }

    /**
     * returns the original (un-hydrated) version of the blueprint
     *
     * @method getOriginalBlueprint
     * @param name Name of the blueprint to return.  Must already have been loaded into the library
     * @return {object} un-hydrated blueprint
     */
    function getOriginalBlueprint(name) {
        return blueprintDictionary.get(name);
    }

    /**
     * returns an array of all blueprint names in the dictionary
     *
     * @method getAllBlueprintNames
     * @return {Array} array of all blueprint names
     */
    function getAllBlueprintNames() {
        return blueprintDictionary.getAllKeys();
    }

    /**
     * Gets a fully fleshed out blueprint from an instance structure.  The instance will not be cached
     * in the blueprint database
     *
     * @method getBlueprintFromInstance
     * @param {object} instance
     * @return {object}
     */
    function getBlueprintFromInstance(instance) {

        if (typeof instance.inherits === 'undefined' || instance.inherits === '_base') {
            return instance;
        } else {
            return getBlueprint(instance.inherits, instance);
        }
    }

    /**
     * returns all blueprints that inherit from the provided base blueprint.  If recurse is true
     * then it will walk down the entire tree, otherwise it will only return direct descendants
     *
     * @method getBlueprintDescendingFrom
     * @param {string} baseBlueprintName
     * @param {boolean} [recurse]
     * @return {Array} a list of all blueprints that descend from baseBlueprintName
     */
    function getBlueprintsDescendingFrom(baseBlueprintName, recurse) {
        var results = blueprintDictionary.find(function (item) {
            if (item.inherits === baseBlueprintName) {
                return true;
            }
        });

        if (recurse && results.length) {
            var newresults = [];
            for (var i = 0; i < results.length; i++) {
                newresults = newresults.concat(getBlueprintsDescendingFrom(results[i].name, recurse));
            }
            results = results.concat(newresults);
        }
        return results;
    }

    /**
     * will run through and hydrate all of the blueprints.  This will detect if there are any invalid ones
     * and also speed up queries
     *
     * @method hydrateAllBlueprints
     */
    function hydrateAllBlueprints() {
        getAllBlueprintNames().forEach(function (bp) {
            getBlueprint(bp);
        });
        needsReindexing = false;
    }

    /**
     * find a blueprint by providing a filter that will be called for each blueprint.
     * if limit is provided, it will stop iterating once the limit of found blueprints is met.
     *
     * @method find
     * @param {function} filt function to call with each blueprint to determine if it matches
     * @param {int} limit if provided, then limit the results to this amount
     * @return {Array} matches
     */
    function find(filt, limit) {
        if (needsReindexing) {
            hydrateAllBlueprints();
        }

        return hydratedBlueprints.find(filt, limit);
    }

    /**
     * @method hasBlueprint
     * @param {string} blueprintName Name of blueprint to check fo
     * @return {bool} true if the blueprint exists in the library
     */
    function hasBlueprint(blueprintName) {
        return blueprintDictionary.containsKey(blueprintName);
    }

    return {
        clear: clear,
        loadSingleBlueprint: loadSingleBlueprint,
        loadBlueprints: loadBlueprints,
        getBlueprint: getBlueprint,
        getBlueprintFromInstance: getBlueprintFromInstance,
        getBlueprintsDescendingFrom: getBlueprintsDescendingFrom,
        hydrateAllBlueprints: hydrateAllBlueprints,
        find: find,
        getAllBlueprintNames: getAllBlueprintNames,
        getOriginalBlueprint: getOriginalBlueprint,
        hasBlueprint: hasBlueprint,
        extendBlueprint: extendBlueprint

    };

};

module.exports = BlueprintCatalog;

},{"./dictionary":4}],4:[function(_dereq_,module,exports){
/**
 *
 * Created by shaddockh on 9/28/14.
 */

function Dictionary(opts) {
  this._catalog = {};
  this._keys = [];
  opts = opts || {};
  if (typeof (opts.ignoreCase) === 'undefined') {
    this._ignoreCase = true;
  } else {
    this._ignoreCase = opts.ignoreCase || true;
  }
}

/**
 * Clears the catalog
 *
 * @method clear
 */
Dictionary.prototype.clear = function () {
  this._catalog = {};

  //Note: according to JSPerf this is the fastest way to clear an array
  var k = this._keys;
  while (k.length > 0) {
    k.pop();
  }
};

/**
 * Return true if the dictionary contains the provided key
 * @param key
 * @returns {boolean|*}
 */
Dictionary.prototype.containsKey = function (key) {
  key = this._ignoreCase ? key.toUpperCase() : key;
  return this._catalog.hasOwnProperty(key);
};

/**
 * loads a single item into the dictionary with the provided key name.  Will throw an error if there is
 * already an item with this key in the catalog.
 *
 * @param key
 * @param item
 */
Dictionary.prototype.add = function (key, item) {
  var newkey = this._ignoreCase ? key.toUpperCase() : key;

  if (typeof this._catalog[newkey] !== 'undefined') {
    throw new Error('Duplicate item detected: ' + key);
  } else {
    this._catalog[newkey] = item;
    this._keys.push(key);
  }
};

/**
 * loads a block of items into the dictionary.  They need to be in the format
 * {
 *   key: object,
 *   key: object
 * }
 *
 * @param block
 */
Dictionary.prototype.addItems = function (block) {
  for (var itemName in block) {
    this.add(itemName, block);
  }
};

/**
 * returns an item specified by the key provided in the catalog
 * @param key
 * @returns {*}
 */
Dictionary.prototype.get = function (key) {
  var newkey = this._ignoreCase ? key.toUpperCase() : key;
  if (!this._catalog.hasOwnProperty(newkey)) {
    throw new Error('Item does not exist in catalog: ' + key);
  }
  return this._catalog[newkey];
};

Dictionary.prototype.getItem = function(key) {
 console.error('Deprecated: Dictionary.getItem');
  return this.get(key);
};

/**
 * returns an array of all key names in the catalog
 * @returns {Array}
 */
Dictionary.prototype.getAllKeys = function () {
  return this._keys.slice();
};

/**
 * iterates over the items in the catalog and executes callback for each element
 * @param callback format: function(item, key)
 */
Dictionary.prototype.forEach = function(callback) {
  var dict = this;
  this._keys.forEach(function(key){
    callback(dict.get(key), key);
  });
};

/**
 * find an item by providing a filter that will be called for each item.
 * if limit is provided, it will stop iterating once the limit of found items is met.
 *
 * @method find
 * @param {function} filt
 * @param {int} limit
 * @return {Array} matches
 */
Dictionary.prototype.find = function (filt, limit) {
  var results = [];
  if (typeof (filt) !== 'function') {
    throw new Error('.find must be provided a function to use for filtering');
  }
  limit = limit || -1;
  var item;
  for (var key in this._catalog) {
    item = this._catalog[key];

    if (filt(item)) {
      results.push(item);

    }
  }
  return results;
};

module.exports = Dictionary;

},{}],5:[function(_dereq_,module,exports){
var Dictionary = _dereq_('./dictionary');

/**
 * Singleton mixin catalog
 */
var MixinCatalog = function () {
  "use strict";

  var mixinDictionary = new Dictionary({
    ignoreCase: true
  });

  /**
   * Clears the mixin and resets everything
   *
   * @method clear
   */
  function clear() {
    mixinDictionary.clear();
  }

  /**
   * loads a single mixin into the dictionary.
   * progressCallback can optionally be provided as:
   *   function(mixinName, true|false (loaded), msg)
   */
  function loadSingleMixin(mixin, progressCallback) {
    try {
      mixinDictionary.add(mixin.name, mixin);
      if (progressCallback) {
        progressCallback(mixin.name, true, 'Loaded mixin: ' + mixin.name);
      }
    } catch (e) {
      if (progressCallback) {
        progressCallback(mixin.name, false, e.message);
      }
    }
  }

  /**
   * loads a block of mixins into the dictionary.  They need to be in the format
   * {
   *   mixinName: { mixin details ... }
   *   mixinName: { mixin details ... }
   * }
   * @param block block of mixins
   * @param progressCallback function to be provided as callback with signature function(mixinName, bool loaded, message)
   */
  function loadMixins(block, progressCallback) {
    for (var mixinName in block) {
      loadSingleMixin(block[mixinName], progressCallback);
    }
  }

  /**
   * will return a component by name
   * @param name name of the mixin to retrieve
   * @returns Object mixin object
   */
  function getMixin(name) {
    return mixinDictionary.get(name);
  }

  /**
   * will return an array of mixin names
   * @returns {Array}
   */
  function getAllMixinNames() {
    return mixinDictionary.getAllKeys();
  }

  function hasMixin(mixinName) {
    return mixinDictionary.containsKey(mixinName);
  }

  return {
    clear: clear,
    loadMixins: loadMixins,
    loadSingleMixin: loadSingleMixin,
    getMixin: getMixin,
    getAllMixinNames: getAllMixinNames,
    hasMixin: hasMixin
  };
};

module.exports = MixinCatalog;

},{"./dictionary":4}]},{},[1])(1)
});