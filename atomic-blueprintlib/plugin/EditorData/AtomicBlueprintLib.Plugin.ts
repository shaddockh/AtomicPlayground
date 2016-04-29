// plugin for generating prefabs from blueprints
import "../Modules/atomic-blueprintlib.bundle";
import * as blueprintLib from "atomic-blueprintlib";

const ExamplePluginUILabel = "Atomic BlueprintLib";

class AtomicBlueprintlibPlugin implements Editor.HostExtensions.HostEditorService, Editor.HostExtensions.ProjectServicesEventListener, Editor.HostExtensions.UIServicesEventListener {

    name: string = "AtomicBlueprintLibPlugin";
    description: string = "Support plugin for the Atomic Blueprint Library";

    private serviceLocator: Editor.HostExtensions.HostServiceLocator = null;
    private blueprintPath =  "../Modules/blueprints";

    private log(message: string) {
        console.log(`${this.name}: ${message}`);
    }

    private loadBlueprintCatalog() {
        let blueprints;
        try {
            blueprints = require(this.blueprintPath);
        } catch (e) {
            throw new Error("Could not load blueprints.  Ensure that 'Resources/Modules/blueprints.js' exists");
        }
        blueprintLib.catalog.loadBlueprints(blueprints);
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

    projectLoaded(ev: Editor.EditorEvents.LoadProjectEvent) {
        this.log("projectLoaded");
        this.serviceLocator.uiServices.createPluginMenuItemSource(ExamplePluginUILabel, { "Generate Prefabs from Blueprints": [`${this.name}.generate`] });
    }

    playerStarted() {
        this.log("playerStarted");
        try {
            this.loadBlueprintCatalog();
            blueprintLib.generatePrefabs();
        } finally {
            blueprintLib.reset();
        }
    }

    menuItemClicked(refId: string): boolean {
        this.log(`menuItemClicked: ${refId}`);

        if (refId === `${this.name}.generate`) {
            try {
                this.loadBlueprintCatalog();
                blueprintLib.generatePrefabs();
            } finally {
                blueprintLib.reset();
            }
            return true;
        }
        return false;
    }
}

export default new AtomicBlueprintlibPlugin();
