"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// plugin for generating prefabs from blueprints
require("Modules/atomic-blueprintlib.bundle");
var blueprintLib = require("atomic-blueprintlib");
var ExamplePluginUILabel = "Atomic BlueprintLib";
var debug = false;
var AtomicBlueprintlibPlugin = (function () {
    function AtomicBlueprintlibPlugin() {
        this.name = "AtomicBlueprintLibPlugin";
        this.description = "Support plugin for the Atomic Blueprint Library";
        this.serviceLocator = null;
        this.blueprintPath = "Modules/blueprints";
        this.PREFABS_DIR = "Prefabs";
        this.GENERATED_PREFABS_DIR = Atomic.addTrailingSlash(this.PREFABS_DIR) + "Generated";
    }
    AtomicBlueprintlibPlugin.prototype.log = function (message) {
        if (debug) {
            console.log(this.name + ": " + message);
        }
    };
    AtomicBlueprintlibPlugin.prototype.loadBlueprintCatalog = function () {
        var _this = this;
        console.log("Loading blueprints from " + this.blueprintPath);
        var blueprints;
        try {
            var blueprintFile = require(this.blueprintPath);
            // look for an export called default and if it
            // exists then that contains all the blueprints
            if (blueprintFile["default"]) {
                blueprints = blueprintFile["default"];
            }
            else if (blueprintFile["blueprints"]) {
                blueprints = blueprintFile["blueprints"];
            }
            else {
                blueprints = blueprintFile;
            }
            // now delete the blueprint file from the cache so if we modify
            // it, it is reflected.  This will also delete everything
            // under a directory named the same as the main
            // bluepring lib entry point.  ie:
            // Modules/blueprints.js
            // Modules/blueprints/*
            var toDelete = [];
            for (var path in Duktape.modLoaded) {
                if (path.indexOf(this.blueprintPath) == 0) {
                    toDelete.push(path);
                }
            }
            toDelete.forEach(function (p) {
                _this.log("Deleting require: " + p);
                delete Duktape.modLoaded[p];
            });
        }
        catch (e) {
            throw new Error("Could not load blueprints.  Ensure that 'Resources/Modules/blueprints.js' exists");
        }
        blueprintLib.catalog.loadBlueprints(blueprints, function (name) { return _this.log("Loading blueprint: " + name); });
    };
    AtomicBlueprintlibPlugin.prototype.initialize = function (serviceLoader) {
        this.log("initialize");
        this.serviceLocator = serviceLoader;
        if (this.serviceLocator) {
            this.serviceLocator.projectServices.register(this);
            this.serviceLocator.uiServices.register(this);
        }
    };
    AtomicBlueprintlibPlugin.prototype.projectUnloaded = function () {
        this.log("projectUnloaded");
        blueprintLib.reset();
        this.serviceLocator.uiServices.removePluginMenuItemSource(ExamplePluginUILabel);
        if (this.serviceLocator) {
            this.serviceLocator.projectServices.unregister(this);
            this.serviceLocator.uiServices.unregister(this);
        }
    };
    AtomicBlueprintlibPlugin.prototype.projectLoaded = function (ev) {
        this.log("projectLoaded");
        this.serviceLocator.uiServices.createPluginMenuItemSource(ExamplePluginUILabel, { "Generate Prefabs from Blueprints": [this.name + ".generate"] });
    };
    AtomicBlueprintlibPlugin.prototype.playerStarted = function () {
        this.log("playerStarted");
        try {
            this.loadBlueprintCatalog();
            this.generatePrefabs();
            ToolCore.assetDatabase.reimportAllAssets();
        }
        finally {
            blueprintLib.reset();
        }
    };
    AtomicBlueprintlibPlugin.prototype.menuItemClicked = function (refId) {
        this.log("menuItemClicked: " + refId);
        if (refId === this.name + ".generate") {
            try {
                this.loadBlueprintCatalog();
                this.generatePrefabs();
            }
            finally {
                blueprintLib.reset();
            }
            return true;
        }
        return false;
    };
    /**
     * Generate prefabs from the blueprints located in the blueprint catalog.  Any
     * blueprints with the isPrefab value set to true will be generated.  Additionally, if the prefabDir
     * value is specified, the prefab will be placed in that directory.  Default directory that prefabs
     * are generated to is: Resources/Prefabs/Generated
     */
    AtomicBlueprintlibPlugin.prototype.generatePrefabs = function () {
        // Let's create an edit-time scene..one that doesn't update or start the component
        var projectRoot = Atomic.addTrailingSlash(ToolCore.toolSystem.project.projectPath);
        var resourcePath = ToolCore.toolSystem.project.resourcePath;
        var scene = new Atomic.Scene();
        scene.setUpdateEnabled(false);
        // Build the directory that our generated prefabs will go into
        // TODO: Could be cleaner
        var fs = Atomic.fileSystem;
        var defaultPath = this.GENERATED_PREFABS_DIR;
        if (fs.checkAccess(Atomic.addTrailingSlash(resourcePath) + defaultPath)) {
            var blueprintNames = blueprintLib.catalog.getAllBlueprintNames();
            for (var i = 0; i < blueprintNames.length; i++) {
                var blueprint = blueprintLib.catalog.getBlueprint(blueprintNames[i]);
                if (blueprint.isPrefab) {
                    var path = defaultPath;
                    if (blueprint.isPrefab) {
                        path = blueprint.prefabDir;
                    }
                    fs.createDirs(resourcePath, path);
                    this.generatePrefab(scene, blueprint, Atomic.addTrailingSlash(resourcePath) + Atomic.addTrailingSlash(path) + blueprintNames[i] + ".prefab");
                }
            }
        }
        else {
            console.log("Access denied writing to: " + defaultPath);
        }
    };
    AtomicBlueprintlibPlugin.prototype.generatePrefab = function (scene, blueprint, path) {
        console.log("Generating prefab: " + blueprint.name + " at " + path);
        // build the prefab
        // TODO: Need to figure out how update an existing prefab if it exists
        var node = blueprintLib.createChild(scene, blueprint, true);
        var file = new Atomic.File(path, Atomic.FileMode.FILE_WRITE);
        node.saveXML(file);
        file.close();
        // Delete the node
        node.removeAllComponents();
        node.remove();
    };
    return AtomicBlueprintlibPlugin;
}());
exports.default = new AtomicBlueprintlibPlugin();
