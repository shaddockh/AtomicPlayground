(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.atomicBlueprintLib = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
// Routines for generating an entity from a blueprint -- very basic implementation here

var cache = {};
var componentCrossref = null;
var COMPONENTS_DIR = 'Components';
var RESOURCES_DIR = 'Resources';
var PREFABS_DIR = 'Prefabs';
var GENERATED_PREFABS_DIR = Atomic.addTrailingSlash(PREFABS_DIR) + 'Generated';
var COMPONENTS_PATH = Atomic.addTrailingSlash(RESOURCES_DIR) + COMPONENTS_DIR;
var DEBUG = true;

var BlueprintCatalog = _dereq_('entity-blueprint-manager').BlueprintCatalog;

var blueprintCatalog = new BlueprintCatalog({
    ignoreCase: false,
    requireInherits: false
});

/**
 * Builders for the various types of components.  These are in charge of mapping the blueprint properties to 
 * the component.  JSComponents are generic, but native components may require specific builders
 *
 * Component builders must adhere to the interface:
 * {
 *    build: function(node, componentBlueprint, componentName, blueprint) {
 *    ...
 *    }
 *  }
 */
var componentBuilders = {
    // Used for mapping the root attributes of a node from a blueprint
    rootNodeComponentBuilder: {
        build: function (node, componentBlueprint, componentName, blueprint) {
            // handling this as an object literal in case I want to add things to the right of the property
            // TODO: see if we can use the native component builder
            var props = {
                position2D: '',
                position3D: '',
                scale2D: '',
                scale3D: ''
            };
            for (var p in props) {
                if (blueprint[p]) {
                    node[p] = blueprint[p];
                }
            }
        }
    },

    // Used to create and map a JSComponent
    jsComponentBuilder: {
        build: function (node, componentBlueprint, componentName, blueprint) {
            if (DEBUG) {
                console.log('Attaching JSComponent: ' + componentName + ' to node.');
            }
            var component = resolveJSComponent(componentName);
            var jsComp = node.createJSComponent(component, componentBlueprint);
            // Need to set the attributes so that when generating the prefab, it gets persisted properly
            for (var prop in componentBlueprint) {
                jsComp.setAttribute(prop, componentBlueprint[prop]); // for generating the prefab
            }
            node[componentName] = jsComp;
            return jsComp;
        }
    },

    // used to create and map a native component
    nativeComponentBuilder: {
        build: function (node, componentBlueprint, componentName, blueprint) {

            if (DEBUG) {
                console.log('Generating native component: ' + componentName);
            }
            var comp = node.createComponent(componentName);

            // let's build up a cross ref of all the exposed types on the component
            // TODO: Optimize.. probably want to cache the component types so we don't have to continually reflect on them
            var compPropertyXref = {};
            var attributes = comp.getAttributes();
            for (var i = 0; i < attributes.length; i++) {
                var attr = attributes[i];
                compPropertyXref[attr.name.toLowerCase().replace(/\ /g, '')] = attr;
            }

            for (var prop in componentBlueprint) {
                var attribute = compPropertyXref[prop.toLowerCase()];
                if (!attribute) {
                    throw new Error('Unknown property name: ' + componentName + '.' + prop + ' in blueprint: ' + blueprint.name);
                }

                switch (attribute.type) {
                case Atomic.VAR_BOOL: // true or false
                case Atomic.VAR_INT: // 0
                case Atomic.VAR_FLOAT: // 0.0
                case Atomic.VAR_STRING: // "string"
                case Atomic.VAR_VECTOR2: // [0,0]
                case Atomic.VAR_VECTOR3: // [0,0,0]
                case Atomic.VAR_QUATERNION: // [0,0,0]
                case Atomic.VAR_COLOR: // [0,0,0,0]
                    // blueprint already has the value in the right format, so let's just set it
                    if (DEBUG) {
                        console.log('setting attribute: ' + attribute.name + ' to value: ' + componentBlueprint[prop]);
                    }
                    comp.setAttribute(attribute.name, componentBlueprint[prop]);
                    break;
                case Atomic.VAR_RESOURCEREF:
                    if (attribute.resourceTypeName) {
                        if (DEBUG) {
                            console.log('setting attribute: ' + attribute.name + ' to value: ' + componentBlueprint[prop] + ', resource type: ' + attribute.resourceTypeName);
                        }
                        comp.setAttribute(attribute.name, Atomic.cache.getResource(attribute.resourceTypeName, componentBlueprint[prop]));
                    }
                    break;
                default:
                    throw new Error('Unknown attribute type: ' + attribute.type + ' on component ' + componentName);
                }
            }
        }
    }
};

function getProjectRoot() {
    var pth = '';
    var cl = Atomic.getArguments().join(',').split(',');
    for (var i = 0; i < cl.length; i++) {
        if (cl[i] === '--project') {
            pth = cl[i + 1];
            break;
        }
    }
    return pth;
}


function generatePrefab(scene, blueprint, path) {
    if (DEBUG) {
        console.log('Generating prefab: ' + blueprint.name + ' at ' + path);
    }

    // build the prefab
    // TODO: Need to figure out how update an existing prefab if it exists
    var node = createChild(scene, blueprint);
    var file = new Atomic.File(path, Atomic.FILE_WRITE);
    node.saveXML(file);
    file.close();

    // Delete the node
    node.removeAllComponents();
    node.remove();
}

function generatePrefabs() {
    // Let's create an edit-time scene..one that doesn't update or start the component
    var scene = new Atomic.Scene();
    scene.setUpdateEnabled(false);

    // Build the directory that our generated prefabs will go into  
    // TODO: Could be cleaner
    var fs = Atomic.fileSystem;
    var prefabPath = Atomic.addTrailingSlash(getProjectRoot() + RESOURCES_DIR) + PREFABS_DIR;
    fs.createDir(prefabPath);
    var path = Atomic.addTrailingSlash(getProjectRoot() + RESOURCES_DIR) + GENERATED_PREFABS_DIR;
    fs.createDir(path);

    for (var bp in blueprintLibrary) {
        var blueprint = getBlueprint(bp);
        if (blueprint.isPrefab) {
            generatePrefab(scene, blueprint, Atomic.addTrailingSlash(path) + bp + '.prefab');
        }
    }
}
/**
 * Utility function that will scan the Components directory for components and build a cross reference so that
 * when the blueprint system tries to attach a component, it knows where the component file is.
 * Note, that this will be cached so that it only builds the cross reference on game startup.
 * @method
 * @returns object Component cross reference file.
 */
function buildComponentCrossref() {
    //TODO: look at having a way of registering js components.  There may be a scenario where these components don't live in the Components folder and may be supplied by a library.
    
    // Cached
    if (componentCrossref) {
        return componentCrossref;
    }

    componentCrossref = {};

    var fs = Atomic.fileSystem;
    var pth = getProjectRoot();
    if (DEBUG) {
        console.log('Scanning ' + pth + COMPONENTS_PATH + ' for components.');
    }
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
        if (DEBUG) {
            console.log('Registering component: ' + componentName + ': ' + componentCrossref[componentName]);
        }
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
                } else if (Array.isArray(extendwith[i])) {
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
    return blueprintCatalog.getBlueprint(name);
}

/**
 * Resolve the component name to the actual path of the component
 * @method
 * @param {string} componentName the name of the component.  If the component contains slashes, it will be assumed that the component is referenced by absolute path.  Otherwise, the component will be looked up in componentCrossref.js.json
 * @returns {string} the absolute path to the component
 */
function resolveJSComponent(componentName) {
    buildComponentCrossref();
    var comp;
    if (new RegExp('\\ | \/', 'g').test(componentName)) {
        // We have an absolute path to the component.  Let's assume the blueprint writer knows what they are doing and just return it.
        comp = componentName;
    } else {
        // We need to look up the component in the component cross-ref.  If it's there, return the full path
        comp = componentCrossref[componentName] || null;
    }
    return comp;
}

/**
 * Returns true if the component is a registered JSComponent
 * @method
 * @param componentName The name of the component to check
 */
function isRegisteredJSComponent(componentName) {
    // walk through the componentCrossref and see if we have any matches.  Assuming that if there
    // are no matches then either it's a native component or a bogus component
    if (resolveJSComponent(componentName)) {
        return true;
    }
    return false;
}

/**
 * Returns the component builder required to construct a component from a blueprint
 * @method
 * @param componentName the name of the component to retrieve the builder for
 */
function getComponentBuilder(componentName) {
    if (isRegisteredJSComponent(componentName)) {
        return componentBuilders.jsComponentBuilder;
    } else {
        return componentBuilders.nativeComponentBuilder;
    }
}

/**
 * Returns the comnponent builder required to map the root node values from a blueprint
 * @method
 */
function getRootComponentBuilder() {
    return componentBuilders.rootNodeComponentBuilder;
}

function buildEntity(node, blueprint) {
    if (typeof (blueprint) === 'string') {
        blueprint = getBlueprint(blueprint);
    }

    if (DEBUG) {
        console.log('Building entity: ' + blueprint.name);
    }

    var builder;

    // first lets map over the root of the node
    builder = getRootComponentBuilder();
    builder.build(node, null, null, blueprint);

    for (var componentName in blueprint) {
        if (typeof (blueprint[componentName]) === 'object' && !Array.isArray(blueprint[componentName])) {
            builder = getComponentBuilder(componentName);
            try {
                builder.build(node, blueprint[componentName], componentName, blueprint);
            } catch (e) {
                throw new Error('Could not construct component ' + componentName + '  on  ' + blueprint.name + '.\n' + e.toString());
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
    createChild: createChild,
    createChildAtPosition: createChildAtPosition,
    getBlueprint: getBlueprint,
    generatePrefabs: generatePrefabs,
    setDebug: function(val) {
        DEBUG = val;
    }
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