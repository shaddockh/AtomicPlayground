import {BlueprintCatalog} from "entity-blueprint-manager";
import {Blueprint} from "entity-blueprint-manager";

/**
 * Definition of a blueprint structure that can be stored in the catalog
 */
export interface AtomicBlueprint extends Blueprint {
    /**
     * Should this blueprint be rendered as a prefab when processed?
     */
    isPrefab: boolean;

    /**
     * The directory that this blueprint and all of it's descendents should render their prefabs to.
     * If not specified, the prefabs will be generated to Resources/Prefabs/Generated.
     */
    prefabDir?: boolean;
}

interface Builder {
    build(node: Atomic.Node, componentBlueprint: AtomicBlueprint, componentName: string, blueprint?: AtomicBlueprint): void;
}

let componentCrossref: { [key: string]: string } = null;
const RESOURCES_DIR = "Resources";
const PREFABS_DIR = "Prefabs";
const GENERATED_PREFABS_DIR = Atomic.addTrailingSlash(PREFABS_DIR) + "Generated";
let DEBUG = true;

function debug(message: string) {
    if (DEBUG) {
        console.log(message);
    }
}

/**
 * The internal blueprint catalog that stores the blueprints
 */
export const catalog: BlueprintCatalog = new BlueprintCatalog({
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
const componentBuilders = {
    // Used for mapping the root attributes of a node from a blueprint
    rootNodeComponentBuilder: {
        build: function(node: Atomic.Node, componentBlueprint: AtomicBlueprint, componentName: string, blueprint: AtomicBlueprint): void {
            mapBlueprintToNativeComponent(node, blueprint, "Node");
        }
    },

    // used to create and map a native component
    nativeComponentBuilder: {
        build: function(node: Atomic.Node, componentBlueprint: AtomicBlueprint, componentName: string): void {
            if (DEBUG) {
                console.log("Attaching Native Component: " + componentName + " to node.");
            }
            const comp = node.createComponent(componentName);
            mapBlueprintToNativeComponent(comp, componentBlueprint, componentName);
        }
    },

    // Used to create and map a JSComponent
    jsComponentBuilder: {
        build: function(node: Atomic.Node, componentBlueprint: AtomicBlueprint, componentName: string): void {
            if (DEBUG) {
                console.log("Attaching JSComponent: " + componentName + " to node.");
            }
            const component = resolveJSComponent(componentName);
            const jsComp:Atomic.JSComponent = node.createJSComponent(component, componentBlueprint);
            mapBlueprintToNativeComponent(jsComp, componentBlueprint, componentName);

            /*
            console.log(JSON.stringify(jsComp.getAttributes(), null, 2));
            // Need to set the attributes so that when generating the prefab, it gets persisted properly
            for (let prop in componentBlueprint) {
                jsComp.setAttribute(prop, componentBlueprint[prop]); // for generating the prefab
            }
            node[componentName] = jsComp;
            return jsComp;
            */
        }
    }
};

const cachedNativeComponentProps = {};
/**
 * maps blueprint properties to a native component.  Will cache the native component type attributes for speed.
 * @param {AObject} component the component to map
 * @param {object} blueprint the blueprint to map to the component
 * @param {string} the name of the component
 */
function mapBlueprintToNativeComponent(component: Atomic.Node | Atomic.Component, blueprint: AtomicBlueprint, componentName: string) {

    let compPropertyXref = cachedNativeComponentProps[componentName];
    if (!compPropertyXref) {
        compPropertyXref = {};
        const attributes = component.getAttributes();
        for (let i = 0; i < attributes.length; i++) {
            const attr = attributes[i];
            compPropertyXref[attr.name.toLowerCase().replace(/\ /g, "")] = attr;
        }
        cachedNativeComponentProps[componentName] = compPropertyXref;
    }

    for (let prop in blueprint) {
        if (typeof (blueprint[prop]) === "object" && !Array.isArray(blueprint[prop])) {
            continue;
        }

        const attribute = compPropertyXref[prop.toLowerCase()];
        if (!attribute) {
            continue;
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
            case Atomic.VAR_STRINGVECTOR: // ["a","b"]
            case Atomic.VAR_INTVECTOR2: // [1, 2]
            case Atomic.VAR_BUFFER: // [1, 2, 3, 4]
                // blueprint already has the value in the right format, so let's just set it
                if (DEBUG) {
                    console.log("setting attribute: " + attribute.name + " to value: " + blueprint[prop]);
                }
                component.setAttribute(attribute.name, blueprint[prop]);
                break;
            case Atomic.VAR_RESOURCEREF:
                if (attribute.resourceTypeName) {
                    if (DEBUG) {
                        console.log("setting attribute: " + attribute.name + " to value: " + blueprint[prop] + ", resource type: " + attribute.resourceTypeName);
                    }
                    component.setAttribute(attribute.name, Atomic.cache.getResource(attribute.resourceTypeName, <string>blueprint[prop]));
                }
                break;
            default:
                throw new Error(`Unknown attribute type: ${attribute.type} for attribute: ${prop} on component: ${componentName}`);
        }
    }

}

// TODO: need to find a better way to get the project root
function getProjectRoot(): string {
    if (ToolCore && ToolCore.toolSystem && ToolCore.toolSystem.project) {
        // Are we runningin the editor?
        return ToolCore.toolSystem.project.projectPath;
    } else {
        let pth = "";
        const cl = Atomic.getArguments().join(",").split(",");
        for (let i = 0; i < cl.length; i++) {
            if (cl[i] === "--project") {
                pth = cl[i + 1];
                break;
            }
        }
        return pth;
    }
}

function generatePrefab(scene: Atomic.Scene, blueprint: AtomicBlueprint, path: string) {
    if (DEBUG) {
        console.log("Generating prefab: " + blueprint.name + " at " + path);
    }

    // build the prefab
    // TODO: Need to figure out how update an existing prefab if it exists
    const node = createChild(scene, blueprint, true);
    const file = new Atomic.File(path, Atomic.FILE_WRITE);
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
function generateComponentIndex(projectRoot: string, componentXrefFn: string) {

    const fs = Atomic.fileSystem;
    const xref = {};
    let componentsFound = 0;
    const slash = Atomic.addTrailingSlash("1")[1];
    for (let i = 0, iEnd = Atomic.cache.resourceDirs.length; i < iEnd; i++) {
        const pth = Atomic.addTrailingSlash(Atomic.cache.resourceDirs[i]);

        if (fs.checkAccess(pth) && fs.dirExists(pth)) {
            if (DEBUG) {
                console.log("Searching for components in: " + pth);
            }

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
                    if (internalComponentPath.indexOf(Atomic.addTrailingSlash(RESOURCES_DIR)) === 0) {
                        internalComponentPath = internalComponentPath.replace(Atomic.addTrailingSlash(RESOURCES_DIR), "");
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

    const idxPath = Atomic.addTrailingSlash(projectRoot) + Atomic.addTrailingSlash(RESOURCES_DIR) + componentXrefFn;
    const idxFile = new Atomic.File(idxPath, Atomic.FILE_WRITE);
    try {
        if (DEBUG) {
            console.log("Writing component xref file to: " + idxPath);
        }

        idxFile.writeString(JSON.stringify(xref, null, 2));
    } finally {
        idxFile.flush();
        idxFile.close();
    }
}

/**
 * Utility function that will scan the Components directory for components and build a cross reference so that
 * when the blueprint system tries to attach a component, it knows where the component file is.
 * Note, that this will be cached so that it only builds the cross reference on game startup.
 * @returns object Component cross reference file.
 */
function buildComponentCrossref(): { [key: string]: string } {
    // TODO: look at having a way of registering js components.  There may be a scenario where these components don't live in the Components folder and may be supplied by a library.
    // Cached
    if (componentCrossref) {
        return componentCrossref;
    }

    componentCrossref = {};
    let componentXrefFn = "componentCrossRef.json";
    const projectRoot = getProjectRoot();
    if (projectRoot !== "") {
        // We have a project root, which means the --project command line param was passed.
        // this indicates that we are not running as a packaged build so we should
        // re-build the component index.
        generateComponentIndex(projectRoot, componentXrefFn);
    }

    const xrefFile = Atomic.cache.getFile(componentXrefFn);
    try {
        componentCrossref = JSON.parse(xrefFile.readText());
    } finally {
        xrefFile.close();
    }

    return componentCrossref;
}

/**
 * Will extend either a blueprint of a sub component of a blueprint.
 *
 * @param orig the original object to extend
 * @param extendwith
 * @return {Object|Array} Returns a brand new object that contains the merged values.  This differs from
 *                  most implementations that actually manipulate the orig object.
 */
function extend(orig: Object, extendwith: Object): Object {
    let result = {};

    for (let i in orig) {
        if (orig.hasOwnProperty(i)) {
            result[i] = orig[i];
        }
    }

    for (let i in extendwith) {
        if (extendwith.hasOwnProperty(i)) {
            if (typeof extendwith[i] === "object") {
                if (extendwith[i] === null) {
                    result[i] = null;
                } else if (Array.isArray(extendwith[i])) {
                    // handle array types
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
 * Returns true if the component is a registered JSComponent
 * @param componentName The name of the component to check
 */
function isRegisteredJSComponent(componentName: string): boolean {
    // walk through the componentCrossref and see if we have any matches.  Assuming that if there
    // are no matches then either it's a native component or a bogus component
    if (resolveJSComponent(componentName)) {
        return true;
    }
    return false;
}

/**
 * Returns the component builder required to construct a component from a blueprint
 * @param componentName the name of the component to retrieve the builder for
 */
function getComponentBuilder(componentName: string): Builder {
    if (isRegisteredJSComponent(componentName)) {
        return componentBuilders.jsComponentBuilder;
    } else {
        return componentBuilders.nativeComponentBuilder;
    }
}

/**
 * Returns the comnponent builder required to map the root node values from a blueprint
 */
function getRootComponentBuilder(): Builder {
    return componentBuilders.rootNodeComponentBuilder;
}

/**
 * Resolve the component name to the actual path of the component
 * @param {string} componentName the name of the component.  If the component contains slashes, it will be assumed that the component is referenced by absolute path.  Otherwise, the component will be looked up in componentCrossref.js.json
 * @returns {string} the absolute path to the component
 */
function resolveJSComponent(componentName: string): string {
    buildComponentCrossref();
    let comp: string;
    if (new RegExp("\\ | \/", "g").test(componentName)) {
        // We have an absolute path to the component.  Let's assume the blueprint writer knows what they are doing and just return it.
        comp = componentName;
    } else {
        // We need to look up the component in the component cross-ref.  If it's there, return the full path
        comp = componentCrossref[componentName] || null;
    }
    return comp;
}


/**
 * Generate prefabs from the blueprints located in the blueprint catalog.  Any
 * blueprints with the isPrefab value set to true will be generated.  Additionally, if the prefabDir
 * value is specified, the prefab will be placed in that directory.  Default directory that prefabs
 * are generated to is: Resources/Prefabs/Generated
 *
 * Note: This method really should only be called from an editor extension and not from the player
 */
export function generatePrefabs() {

    // Let's create an edit-time scene..one that doesn't update or start the component
    let projectRoot = getProjectRoot();
    if (!projectRoot || projectRoot === "") {
        console.log("Cannot generate prefabs without --project command line argument or outside the editor environment.");
        return;
    }
    projectRoot = Atomic.addTrailingSlash(projectRoot);

    const scene = new Atomic.Scene();
    scene.setUpdateEnabled(false);

    // Build the directory that our generated prefabs will go into
    // TODO: Could be cleaner
    const fs = Atomic.fileSystem;
    let defaultPath = Atomic.addTrailingSlash(RESOURCES_DIR) + GENERATED_PREFABS_DIR;
    if (fs.checkAccess(projectRoot + defaultPath)) {
        let blueprintNames = catalog.getAllBlueprintNames();
        for (let i = 0; i < blueprintNames.length; i++) {
            let blueprint = <AtomicBlueprint>catalog.getBlueprint(blueprintNames[i]);
            if (blueprint.isPrefab) {
                let path = defaultPath;
                if (blueprint.prefabDir) {
                    path = Atomic.addTrailingSlash(RESOURCES_DIR) + blueprint.prefabDir;
                }
                fs.createDirs(projectRoot, path);
                debug("Generating prefab: " + Atomic.addTrailingSlash(path) + blueprintNames[i] + ".prefab");
                generatePrefab(scene, blueprint, projectRoot + Atomic.addTrailingSlash(path) + blueprintNames[i] + ".prefab");
            }
        }
    } else {
        if (DEBUG) {
            console.log("Access denied writing to: " + defaultPath);
        }
    }
}


/**
 * Returns a blueprint from the library with the specified name.  If the blueprint has
 * an 'inherits' property, it will walk up the inheritance and fill in the values of the blueprint
 * appropriately from it's ancestors
 * @param name the name of the blueprint to retrieve
 */
export function getBlueprint(name: string): AtomicBlueprint {
    return <AtomicBlueprint>catalog.getBlueprint(name);
}

/**
 * Resets the library to defaults.  Clears the catalog and releases any cached settings
 */
export function reset() {
    catalog.clear();
}

/**
 * Maps components defined within a blueprint to the passed in node object.  This routine
 * is used internally by the createChild and createChildAtPostion methods
 * @return the node that was passed in
 */
export function buildEntity(node: Atomic.Node, blueprint: string): Atomic.Node;
export function buildEntity(node: Atomic.Node, blueprint: AtomicBlueprint): Atomic.Node;
export function buildEntity(node: Atomic.Node, blueprint: any): Atomic.Node {
    let blueprintObj: AtomicBlueprint;

    if (typeof (blueprint) === "string") {
        blueprint = getBlueprint(blueprint);
    }

    if (DEBUG) {
        console.log("Building entity: " + blueprint.name);
    }

    let builder: Builder;

    // first lets map over the root of the node
    builder = getRootComponentBuilder();
    builder.build(node, null, null, blueprint);

    for (let componentName in blueprint) {
        if (typeof (blueprint[componentName]) === "object" && !Array.isArray(blueprint[componentName])) {
            builder = getComponentBuilder(componentName);
            try {
                builder.build(node, blueprint[componentName], componentName, blueprint);
            } catch (e) {
                throw new Error("Could not construct component " + componentName + "  on  " + blueprint.name + ".\n" + e.toString());
            }
        }
    }

    return node;
}

/**
 * Builds an entity from a blueprint and attaches it to the node provided.  The node can either be a parent node, or a scene object.
 * If the blueprint has the isPrefab value set to true
 * then it will simply load the prefab and return it.  Otherwise it will generate a new object.
 * Note that to generate a new object and not a prefab will involve a slight performance hit.
 * @param parent The ```Atomic.Node``` or ```Atomic.Scene``` to attach the generated entity to
 * @param blueprint The blueprint that defines the entity to be created
 * @param forceCreateFromBlueprint If true, this will force a regeneration of the node, even if a prefab exists
 * @return The ```Atomic.Node``` that was created and populated from the blueprint
 */
export function createChild(parent: Atomic.Node, blueprint: string, forceCreateFromBlueprint?: boolean): Atomic.Node;
export function createChild(parent: Atomic.Node, blueprint: Blueprint, forceCreateFromBlueprint?: boolean): Atomic.Node;
export function createChild(parent: Atomic.Node, blueprint: any, forceCreateFromBlueprint?: boolean): Atomic.Node {
    if (typeof (blueprint) === "string") {
        blueprint = getBlueprint(blueprint);
    }

    let node: Atomic.Node;
    if (blueprint.isPrefab && !forceCreateFromBlueprint) {
        let prefabPath = Atomic.addTrailingSlash(RESOURCES_DIR) + GENERATED_PREFABS_DIR;
        if (blueprint.prefabDir) {
            prefabPath = blueprint.prefabDir;
        }

        if (DEBUG) {
            console.log(`Loading ${blueprint.name} prefab from ${prefabPath}`);
        }
        node = parent.createChildPrefab(blueprint.name, Atomic.addTrailingSlash(prefabPath) + blueprint.name + ".prefab");
    } else {
        if (DEBUG) {
            console.log(`Constructing new child ${blueprint.name}.  ForceCreateFromBlueprint: ${forceCreateFromBlueprint ? "On" : "Off"}`);
        }
        node = parent.createChild(blueprint.name);
        buildEntity(node, blueprint);
    }
    return node;
}

/**
 * Builds an entity from a blueprint and attaches it to the node provided.  Additionally it will set the world position of the node.
 * The node can either be a parent node or a scene object.
 * If the blueprint has the isPrefab value set to true
 * then it will simply load the prefab and return it.  Otherwise it will generate a new object.
 * Note that to generate a new object and not a prefab will involve a slight performance hit.
 * @param parent The ```Atomic.Node``` or ```Atomic.Scene``` to attach the generated entity to
 * @param blueprint The blueprint that defines the entity to be created
 * @param spawnPosition The 2D or 3D coordinates to create this entity at
 * @return The ```Atomic.Node``` that was created and populated from the blueprint
 */
export function createChildAtPosition(parent: Atomic.Node, blueprint: string, spawnPosition: number[]): Atomic.Node;
export function createChildAtPosition(parent: Atomic.Node, blueprint: Blueprint, spawnPosition: number[]): Atomic.Node;
export function createChildAtPosition(parent: Atomic.Node, blueprint: any, spawnPosition: number[]): Atomic.Node {
    const node = createChild(parent, blueprint);
    if (spawnPosition.length === 2) {
        node.position2D = [spawnPosition[0], spawnPosition[1]];
    } else if (spawnPosition.length === 3) {
        node.position = [spawnPosition[0], spawnPosition[1], spawnPosition[3]];
    } else {
        throw new Error("Unknown spawnPosition format.  Can not determine if it's 2D or 3D");
    }
    return node;
}
