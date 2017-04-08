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
    private generatedPrefabsDirectory = "Prefabs/Generated";
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
            throw new Error(`Could not load blueprints.  Ensure that '${this.blueprintPath}.js' exists`);
        }

        blueprintLib.catalog.loadBlueprints(blueprints, (name) => this.log(`Loading blueprint: ${name}`));
    }

    initialize(serviceLoader: Editor.HostExtensions.HostServiceLocator) {
        this.log("initialize");

        this.serviceLocator = serviceLoader;
        if (this.serviceLocator) {
            this.serviceLocator.projectServices.register(this);
            this.serviceLocator.uiServices.register(this);

            this.generatedPrefabsDirectory = this.serviceLocator.projectServices.getUserPreference(this.name, "GeneratedPrefabsDirectory", this.generatedPrefabsDirectory);
            this.blueprintPath = this.serviceLocator.projectServices.getUserPreference(this.name, "BlueprintPath", this.blueprintPath);
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
            this.generateComponentIndex();
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
                this.generateComponentIndex();
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
        let resourcePath = ToolCore.toolSystem.project.resourcePath;

        const scene = new Atomic.Scene();
        scene.setUpdateEnabled(false);

        // Build the directory that our generated prefabs will go into
        // TODO: Could be cleaner
        const fs = Atomic.fileSystem;
        let defaultPath = this.generatedPrefabsDirectory;
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
    /**
     * Scans for component files in the workspace and generated an index of componentname=componentpath entries
     * This will be loaded up in order to resolve blueprint components at runtime
     */
    private generateComponentIndex(componentXrefFn = "componentCrossref.json") {
        const resourcesDir = ToolCore.toolSystem.project.resourcePath;
        const fs = Atomic.fileSystem;
        const xref = {};
        let componentsFound = 0;
        const slash = Atomic.addTrailingSlash("1")[1];
        for (let i = 0, iEnd = Atomic.cache.resourceDirs.length; i < iEnd; i++) {
            const pth = Atomic.addTrailingSlash(Atomic.cache.resourceDirs[i]);

            if (fs.checkAccess(pth) && fs.dirExists(pth)) {
                console.log("Searching for components in: " + pth);

                const componentFiles = fs.scanDir(pth, "*.js", Atomic.SCAN_FILES, true);
                for (let f = 0, fEnd = componentFiles.length; f < fEnd; f++) {
                    // check to see if this is a component
                    // TODO: for now, we just want to try and load components under a Components/ directory
                    if (componentFiles[f].toLowerCase().indexOf("components" + slash) === -1) {
                        // skip it.
                        continue;
                    }

                    const resource = Atomic.cache.getTempResource("JSComponentFile", componentFiles[f], false);

                    if (resource) {
                        let internalComponentPath = componentFiles[f];

                        // if the path to the component starts with Resources/, then we need to peel that part off of it
                        if (internalComponentPath.indexOf(Atomic.addTrailingSlash(resourcesDir)) === 0) {
                            internalComponentPath = internalComponentPath.replace(Atomic.addTrailingSlash(resourcesDir), "");
                        }

                        let componentName = internalComponentPath.replace(".js", "");

                        // Grabbing just the filename part
                        if (componentName.indexOf(slash) >= 0) {
                            componentName = componentName.split(slash).pop();
                        }

                        // See if we have already registered this component
                        const oldComponent = xref[componentName];
                        if (oldComponent && oldComponent !== internalComponentPath && oldComponent.indexOf(internalComponentPath) === -1 && internalComponentPath.indexOf(oldComponent) === -1) {
                            throw new Error("Component names must be unique.  Component: " + componentName + " already registered as " + xref[componentName] + "; trying to re-register as " + internalComponentPath);
                        }
                        if (!oldComponent || (oldComponent.indexOf(internalComponentPath) === -1 && internalComponentPath.indexOf(oldComponent) === -1)) {
                            xref[componentName] = internalComponentPath;
                            componentsFound++;
                        }
                    }
                }
            }
        }

        const idxPath = Atomic.addTrailingSlash(ToolCore.toolSystem.project.projectPath) + componentXrefFn;
        const idxFile = new Atomic.File(idxPath, Atomic.FileMode.FILE_WRITE);
        try {
            console.log("Writing component xref file to: " + idxPath);

            idxFile.writeString(JSON.stringify(xref, null, 2));
        } finally {
            idxFile.flush();
            idxFile.close();
        }
    }
}

export default new AtomicBlueprintlibPlugin();
