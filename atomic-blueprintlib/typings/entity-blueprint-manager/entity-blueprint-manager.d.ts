declare module 'entity-blueprint-manager' {
	/**
	 *
	 * Created by shaddockh on 9/28/14.
	 */
	/**
	 * Dictionary class.  Allows for creating a case-insensitive dictionary
	 */
	export default class Dictionary<T> {
	    private _catalog;
	    private _keys;
	    private _ignoreCase;
	    constructor(opts?: {
	        ignoreCase: boolean;
	    });
	    /**
	     * Clears the catalog
	     *
	     * @method clear
	     */
	    clear(): void;
	    /**
	     * Return true if the dictionary contains the provided key
	     * @param key
	     * @returns {boolean|*}
	     */
	    containsKey(key: string): boolean;
	    /**
	     * loads a single item into the dictionary with the provided key name.  Will throw an error if there is
	     * already an item with this key in the catalog.
	     *
	     * @param key
	     * @param item
	     */
	    add(key: string, item: T): void;
	    /**
	     * loads a block of items into the dictionary.  They need to be in the format
	     * {
	     *   key: object,
	     *   key: object
	     * }
	     *
	     * @param block
	     */
	    addItems(block: Object): void;
	    /**
	     * returns an item specified by the key provided in the catalog
	     * @param key
	     * @returns {*}
	     */
	    get(key: any): T;
	    getItem(key: any): T;
	    /**
	     * returns an array of all key names in the catalog
	     * @returns {Array}
	     */
	    getAllKeys(): string[];
	    /**
	     * iterates over the items in the catalog and executes callback for each element
	     * @param callback format: function(item, key)
	     */
	    forEach(callback: any): void;
	    /**
	     * find an item by providing a filter that will be called for each item.
	     * if limit is provided, it will stop iterating once the limit of found items is met.
	     *
	     * @method find
	     * @param {function} filt
	     * @param {int} limit
	     * @return {Array} matches
	     */
	    find(filt: (item) => boolean, limit?: any): T[];
	}

}
declare module 'entity-blueprint-manager' {
	export interface BlueprintCatalogOptions {
	    ignoreCase: boolean;
	    requireInherits: boolean;
	}
	export interface Blueprint {
	    inherits?: string;
	    name?: string;
	}
	export class BlueprintCatalog {
	    constructor(opts?: BlueprintCatalogOptions);
	    private blueprintDictionary;
	    private hydratedBlueprints;
	    private bpList;
	    private debugMode;
	    private needsReindexing;
	    private options;
	    /**
	     * Clears the blueprints and resets everything
	     *
	     * @method clear
	     */
	    clear(): void;
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
	    loadSingleBlueprint(blueprint: Blueprint, blueprintName: string, progressCallback: (blueprintName: string, error: boolean, message: string, blueprint: Blueprint) => void): void;
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
	    loadBlueprints(block: Object, progressCallback: (blueprintName: string, error: boolean, message: string, blueprint: Blueprint) => void): void;
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
	    extendBlueprint(orig: Blueprint, extendwith: Blueprint, inPlaceExtend?: boolean): Blueprint;
	    /**
	     * will return a blueprint hydrating it with values from it's lineage, optionally extending it with
	     * the blueprint provided with 'extendwith'
	     *
	     * @method getBlueprint
	     * @param name the name of the blueprint to return.  Must already have been loaded into the library.
	     * @param {object} [extendWith] Optionally extend the returned blueprint with this blueprint
	     * @return {object} hydrated blueprint
	     */
	    getBlueprint(name: string, extendWith?: Blueprint): Blueprint;
	    /**
	     * returns the original (un-hydrated) version of the blueprint
	     *
	     * @method getOriginalBlueprint
	     * @param name Name of the blueprint to return.  Must already have been loaded into the library
	     * @return {object} un-hydrated blueprint
	     */
	    getOriginalBlueprint(name: string): Blueprint;
	    /**
	     * returns an array of all blueprint names in the dictionary
	     *
	     * @method getAllBlueprintNames
	     * @return {Array} array of all blueprint names
	     */
	    getAllBlueprintNames(): string[];
	    /**
	     * Gets a fully fleshed out blueprint from an instance structure.  The instance will not be cached
	     * in the blueprint database
	     *
	     * @method getBlueprintFromInstance
	     * @param {object} instance
	     * @return {object}
	     */
	    getBlueprintFromInstance(instance: Blueprint): Blueprint;
	    /**
	     * returns all blueprints that inherit from the provided base blueprint.  If recurse is true
	     * then it will walk down the entire tree, otherwise it will only return direct descendants
	     *
	     * @method getBlueprintDescendingFrom
	     * @param {string} baseBlueprintName
	     * @param {boolean} [recurse]
	     * @return {Array} a list of all blueprints that descend from baseBlueprintName
	     */
	    getBlueprintsDescendingFrom(baseBlueprintName: string, recurse: boolean): Blueprint[];
	    /**
	     * will run through and hydrate all of the blueprints.  This will detect if there are any invalid ones
	     * and also speed up queries
	     *
	     * @method hydrateAllBlueprints
	     */
	    hydrateAllBlueprints(): void;
	    /**
	     * find a blueprint by providing a filter that will be called for each blueprint.
	     * if limit is provided, it will stop iterating once the limit of found blueprints is met.
	     *
	     * @method find
	     * @param {function} filt function to call with each blueprint to determine if it matches
	     * @param {int} limit if provided, then limit the results to this amount
	     * @return {Array} matches
	     */
	    find(filt: (item) => boolean, limit?: number): Blueprint[];
	    /**
	     * @method hasBlueprint
	     * @param {string} blueprintName Name of blueprint to check fo
	     * @return {bool} true if the blueprint exists in the library
	     */
	    hasBlueprint(blueprintName: string): boolean;
	}

}
declare module 'entity-blueprint-manager' {
	/**
	 * mixin catalog
	 */
	export class MixinCatalog {
	    private mixinDictionary;
	    /**
	     * Clears the mixin and resets everything
	     *
	     * @method clear
	     */
	    clear(): void;
	    /**
	     * loads a single mixin into the dictionary.
	     * progressCallback can optionally be provided as:
	     *   function(mixinName, true|false (loaded), msg)
	     */
	    loadSingleMixin(mixin: any, progressCallback: any): void;
	    /**
	     * loads a block of mixins into the dictionary.  They need to be in the format
	     * {
	     *   mixinName: { mixin details ... }
	     *   mixinName: { mixin details ... }
	     * }
	     * @param block block of mixins
	     * @param progressCallback function to be provided as callback with signature function(mixinName, bool loaded, message)
	     */
	    loadMixins(block: any, progressCallback: any): void;
	    /**
	     * will return a component by name
	     * @param name name of the mixin to retrieve
	     * @returns Object mixin object
	     */
	    getMixin(name: any): Object;
	    /**
	     * will return an array of mixin names
	     * @returns {Array}
	     */
	    getAllMixinNames(): string[];
	    hasMixin(mixinName: any): boolean;
	}

}
