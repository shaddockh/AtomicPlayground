// plugin for generating prefabs from blueprints
import "Modules/atomic-blueprintlib.bundle";
import * as blueprintLib from "atomic-blueprintlib";

const ExamplePluginUILabel = "Atomic BlueprintLib";
const debug = false;
class AtomicBlueprintlibPlugin implements Editor.HostExtensions.HostEditorService, Editor.HostExtensions.ProjectServicesEventListener, Editor.HostExtensions.UIServicesEventListener {

    name = "AtomicBlueprintLibPlugin";
    description = "Support plugin for the Atomic Blueprint Library";

    private serviceLocator: Editor.HostExtensions.HostServiceLocator = null;
    private blueprintPath = "Modules/blueprints";
    private PREFABS_DIR = "Prefabs";
    private GENERATED_PREFABS_DIR = Atomic.addTrailingSlash(this.PREFABS_DIR) + "Generated";
    private log(message: string) {
        if (debug) {
            console.log(`${this.name}: ${message}`);
        }
    }

    private loadBlueprintCatalog() {
        console.log("Loading blueprints from " + this.blueprintPath);
        let blueprints;
        try {
            let blueprintFile = require(this.blueprintPath);

            // look for an export called default and if it
            // exists then that contains all the blueprints
            if (blueprintFile["default"]) {
                blueprints = blueprintFile["default"];
            } else if (blueprintFile["blueprints"]) {
                blueprints = blueprintFile["blueprints"];
            } else {
                blueprints = blueprintFile;
            }

            // now delete the blueprint file from the cache so if we modify
            // it, it is reflected.  This will also delete everything
            // under a directory named the same as the main
            // bluepring lib entry point.  ie:
            // Modules/blueprints.js
            // Modules/blueprints/*
            let toDelete = [];
            for (let path in Duktape.modLoaded) {
                if (path.indexOf(this.blueprintPath) == 0) {
                    toDelete.push(path);
                }
            }

            toDelete.forEach(p => {
                this.log("Deleting require: " + p);
                delete Duktape.modLoaded[p];
            });

        } catch (e) {
            throw new Error("Could not load blueprints.  Ensure that 'Resources/Modules/blueprints.js' exists");
        }

        blueprintLib.catalog.loadBlueprints(blueprints, (name) => this.log(`Loading blueprint: ${name}`));
    }

    initialize(serviceLoader: Editor.HostExtensions.HostServiceLocator) {
        this.log("initialize");

        this.serviceLocator = serviceLoader;
        if (this.serviceLocator) {
            this.serviceLocator.projectServices.register(this);
            this.serviceLocator.uiServices.register(this);
        }
    }

    projectUnloaded() {
        this.log("projectUnloaded");
        blueprintLib.reset();
        this.serviceLocator.uiServices.removePluginMenuItemSource(ExamplePluginUILabel);

        if (this.serviceLocator) {
            this.serviceLocator.projectServices.unregister(this);
            this.serviceLocator.uiServices.unregister(this);
        }
    }

    projectLoaded(ev: Editor.EditorLoadProjectEvent) {
        this.log("projectLoaded");
        this.serviceLocator.uiServices.createPluginMenuItemSource(ExamplePluginUILabel, { "Generate Prefabs from Blueprints": [`${this.name}.generate`] });
    }

    playerStarted() {
        this.log("playerStarted");
        try {
            this.loadBlueprintCatalog();
            this.generatePrefabs();
            ToolCore.assetDatabase.reimportAllAssets();
        } finally {
            blueprintLib.reset();
        }
    }

    menuItemClicked(refId: string): boolean {
        this.log(`menuItemClicked: ${refId}`);

        if (refId === `${this.name}.generate`) {
            try {
                this.loadBlueprintCatalog();
                this.generatePrefabs();
            } finally {
                blueprintLib.reset();
            }
            return true;
        }
        return false;
    }

    /**
     * Generate prefabs from the blueprints located in the blueprint catalog.  Any
     * blueprints with the isPrefab value set to true will be generated.  Additionally, if the prefabDir
     * value is specified, the prefab will be placed in that directory.  Default directory that prefabs
     * are generated to is: Resources/Prefabs/Generated
     */
    generatePrefabs() {
        // Let's create an edit-time scene..one that doesn't update or start the component
        let projectRoot = Atomic.addTrailingSlash(ToolCore.toolSystem.project.projectPath);
        let resourcePath = ToolCore.toolSystem.project.resourcePath;

        const scene = new Atomic.Scene();
        scene.setUpdateEnabled(false);

        // Build the directory that our generated prefabs will go into
        // TODO: Could be cleaner
        const fs = Atomic.fileSystem;
        let defaultPath = this.GENERATED_PREFABS_DIR;
        if (fs.checkAccess(Atomic.addTrailingSlash(resourcePath) + defaultPath)) {
            let blueprintNames = blueprintLib.catalog.getAllBlueprintNames();
            for (let i = 0; i < blueprintNames.length; i++) {
                let blueprint = blueprintLib.catalog.getBlueprint(blueprintNames[i]) as blueprintLib.AtomicBlueprint;
                if (blueprint.isPrefab) {
                    let path = defaultPath;
                    if (blueprint.isPrefab) {
                        path = blueprint.prefabDir;
                    }

                    fs.createDirs(resourcePath, path);
                    this.generatePrefab(scene, blueprint, Atomic.addTrailingSlash(resourcePath) + Atomic.addTrailingSlash(path) + blueprintNames[i] + ".prefab");
                }
            }
        } else {
            console.log("Access denied writing to: " + defaultPath);
        }
    }

    private generatePrefab(scene: Atomic.Scene, blueprint: blueprintLib.AtomicBlueprint, path: string) {
        console.log("Generating prefab: " + blueprint.name + " at " + path);

        // build the prefab

        // TODO: Need to figure out how update an existing prefab if it exists
        const node = blueprintLib.createChild(scene, blueprint, true);
        const file = new Atomic.File(path, Atomic.FileMode.FILE_WRITE);
        node.saveXML(file);
        file.close();

        // Delete the node
        node.removeAllComponents();
        node.remove();
    }
}

export default new AtomicBlueprintlibPlugin();
