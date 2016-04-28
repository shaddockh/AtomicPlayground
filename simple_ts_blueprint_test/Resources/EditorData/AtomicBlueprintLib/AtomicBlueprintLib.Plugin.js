"use strict";
// plugin for generating prefabs from blueprints
require("../../Modules/atomic-blueprintlib.bundle");
var atomic_blueprintlib_1 = require("atomic-blueprintlib");
var ExamplePluginUILabel = "Atomic BlueprintLib";
var AtomicBlueprintlibPlugin = (function () {
    function AtomicBlueprintlibPlugin() {
        this.name = "AtomicBlueprintLibPlugin";
        this.description = "Support plugin for the Atomic Blueprint Library";
        this.serviceLocator = null;
        this.blueprintPath = "../../Modules/blueprints";
    }
    AtomicBlueprintlibPlugin.prototype.log = function (message) {
        console.log(this.name + ": " + message);
    };
    AtomicBlueprintlibPlugin.prototype.loadBlueprintCatalog = function () {
        var blueprints;
        try {
            blueprints = require(this.blueprintPath);
        }
        catch (e) {
            throw new Error("Could not load blueprints.  Ensure that 'Resources/Modules/blueprints.js' exists");
        }
        atomic_blueprintlib_1.blueprintCatalog.loadBlueprints(blueprints);
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
        this.serviceLocator.uiServices.removePluginMenuItemSource(ExamplePluginUILabel);
        if (this.serviceLocator) {
            this.serviceLocator.projectServices.unregister(this);
            this.serviceLocator.uiServices.unregister(this);
        }
    };
    AtomicBlueprintlibPlugin.prototype.projectLoaded = function (ev) {
        this.log("projectLoaded");
        this.serviceLocator.uiServices.createPluginMenuItemSource(ExamplePluginUILabel, { "Generate Prefabs from Blueprints": [(this.name + ".generate")] });
    };
    AtomicBlueprintlibPlugin.prototype.playerStarted = function () {
        this.log("playerStarted");
        try {
            this.loadBlueprintCatalog();
            atomic_blueprintlib_1.nodeBuilder.generatePrefabs(ToolCore.toolSystem.project.projectPath);
        }
        finally {
            atomic_blueprintlib_1.blueprintCatalog.clear();
        }
    };
    AtomicBlueprintlibPlugin.prototype.menuItemClicked = function (refId) {
        this.log("menuItemClicked: " + refId);
        if (refId === this.name + ".generate") {
            try {
                this.loadBlueprintCatalog();
                atomic_blueprintlib_1.nodeBuilder.generatePrefabs(ToolCore.toolSystem.project.projectPath);
            }
            finally {
                atomic_blueprintlib_1.blueprintCatalog.clear();
            }
            return true;
        }
        return false;
    };
    return AtomicBlueprintlibPlugin;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new AtomicBlueprintlibPlugin();
