// Routines for generating an entity from a blueprint -- very basic implementation here
"use strict";

import {BlueprintCatalog} from "entity-blueprint-manager";
import {Blueprint} from "entity-blueprint-manager";

export interface AtomicBlueprint extends Blueprint {
    isPrefab: boolean;
    prefabDir: boolean;
}

let componentCrossref = null;
const RESOURCES_DIR = "Resources";
const PREFABS_DIR = "Prefabs";
const GENERATED_PREFABS_DIR = Atomic.addTrailingSlash(PREFABS_DIR) + "Generated";
let DEBUG = true;

let cachedProjectRoot = null;

function debug(message) {
    if (DEBUG) {
        console.log(message);
    }
}

/**
 * The internal blueprint catalog that stores the blueprints
 * @type {BlueprintCatalog}
 * @deprecated
 */
export const blueprintCatalog: BlueprintCatalog = new BlueprintCatalog({
    ignoreCase: false,
    requireInherits: false
});

/**
 * The internal blueprint catalog that stores the blueprints
 * @type {BlueprintCatalog}
 */
export const catalog: BlueprintCatalog = blueprintCatalog;

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
        build: function(node: Atomic.Node | Atomic.Component, componentBlueprint: AtomicBlueprint, componentName: string, blueprint: AtomicBlueprint) {
            mapBlueprintToNativeComponent(node, blueprint, "Node");
        }
    },

    // used to create and map a native component
    nativeComponentBuilder: {
        build: function(node: Atomic.Node, componentBlueprint: AtomicBlueprint, componentName: string) {
            if (DEBUG) {
                console.log("Attaching Native Component: " + componentName + " to node.");
            }
            const comp = node.createComponent(componentName);
            mapBlueprintToNativeComponent(comp, componentBlueprint, componentName);
        }
    },

    // Used to create and map a JSComponent
    jsComponentBuilder: {
        build: function(node, componentBlueprint, componentName) {
            if (DEBUG) {
                console.log("Attaching JSComponent: " + componentName + " to node.");
            }
            const component = resolveJSComponent(componentName);
            const jsComp = node.createJSComponent(component, componentBlueprint);
            // Need to set the attributes so that when generating the prefab, it gets persisted properly
            for (let prop in componentBlueprint) {
                jsComp.setAttribute(prop, componentBlueprint[prop]); // for generating the prefab
            }
            node[componentName] = jsComp;
            return jsComp;
        }
    }
};

const cachedNativeComponentProps = {};
/**
 * maps blueprint properties to a native component.  Will cache the native component type attributes for speed.
 * @method
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
                    component.setAttribute(attribute.name, Atomic.cache.getResource(attribute.resourceTypeName, blueprint[prop]));
                }
                break;
            default:
                throw new Error("Unknown attribute type: " + attribute.type + " on " + componentName);
        }
    }

}

// TODO: need to find a better way to get the project root
function getProjectRoot(): string {
    if (cachedProjectRoot) {
        return cachedProjectRoot;
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
 * Generate prefabs from the blueprints located in the blueprint catalog
 * @param  {string} projectRoot optional root of the project.  Will look for the --project command line argument if not provided
 */
export function generatePrefabs(projectRoot?: string) {

    // Let's create an edit-time scene..one that doesn't update or start the component
    projectRoot = projectRoot || getProjectRoot();
    if (projectRoot === "") {
        console.log("Cannot generate prefabs without --project command line argument");
        return;
    }
    cachedProjectRoot = projectRoot;
    projectRoot = Atomic.addTrailingSlash(projectRoot);

    const scene = new Atomic.Scene();
    scene.setUpdateEnabled(false);

    // Build the directory that our generated prefabs will go into
    // TODO: Could be cleaner
    const fs = Atomic.fileSystem;
    let defaultPath = Atomic.addTrailingSlash(RESOURCES_DIR) + GENERATED_PREFABS_DIR;
    if (fs.checkAccess(projectRoot + defaultPath)) {
        let blueprintNames = blueprintCatalog.getAllBlueprintNames();
        for (let i = 0; i < blueprintNames.length; i++) {
            let blueprint = <AtomicBlueprint>blueprintCatalog.getBlueprint(blueprintNames[i]);
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
 * Scans for component files in the workspace and generated an index of componentname=componentpath entries
 * This will be loaded up in order to resolve blueprint components at runtime
 */
function generateComponentIndex(projectRoot: string, componentXrefFn: string) {

    const fs = Atomic.fileSystem;
    const idxPath = Atomic.addTrailingSlash(projectRoot) + Atomic.addTrailingSlash(RESOURCES_DIR) + componentXrefFn;
    const idxFile = new Atomic.File(idxPath, Atomic.FILE_WRITE);
    const xref = {};
    let componentsFound = 0;
    const slash = Atomic.addTrailingSlash("1")[1];
    if (DEBUG) {
        console.log("Writing component xref file to: " + idxPath);
    }
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
                        if (componentsFound > 0) {
                            idxFile.writeString("\n");
                        }
                        idxFile.writeString(componentName + "=" + internalComponentPath);
                        componentsFound++;
                    }
                }
            }
        }
    }

    idxFile.flush();
    idxFile.close();
}

/**
 * Utility function that will scan the Components directory for components and build a cross reference so that
 * when the blueprint system tries to attach a component, it knows where the component file is.
 * Note, that this will be cached so that it only builds the cross reference on game startup.
 * @method
 * @returns object Component cross reference file.
 */
function buildComponentCrossref(): Object {
    // TODO: look at having a way of registering js components.  There may be a scenario where these components don't live in the Components folder and may be supplied by a library.
    // Cached
    if (componentCrossref) {
        return componentCrossref;
    }
    componentCrossref = {};
    let componentXrefFn = "_componentXref.txt";
    const projectRoot = getProjectRoot();
    if (projectRoot !== "") {
        // We have a project root, which means the --project command line param was passed.
        // this indicates that we are not running as a packaged build so we should
        // re-build the component index.
        generateComponentIndex(projectRoot, componentXrefFn);
    }
    const xrefFile = Atomic.cache.getFile(componentXrefFn);
    const fileContents = xrefFile.readText().split("\n");

    for (let c = 0; c < fileContents.length; c++) {
        let namePathSplit = fileContents[c].split("=");
        componentCrossref[namePathSplit[0]] = namePathSplit[1];
        if (DEBUG) {
            console.log("Registering component: " + namePathSplit[0] + " at " + namePathSplit[1]);
        }
    }

    xrefFile.close();
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
function extend(orig: Object, extendwith: Object): Object {
    let result = {};
    let i;

    for (i in orig) {
        if (orig.hasOwnProperty(i)) {
            result[i] = orig[i];
        }
    }

    for (i in extendwith) {
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
 * Returns a blueprint from the library with the specified name.  If the blueprint has
 * an 'inherits' property, it will walk up the inheritance and fill in the values of the blueprint
 * appropriately from it's ancestors
 * @method
 * @param {string} name the name of the blueprint to retrieve
 */
export function getBlueprint(name: string): AtomicBlueprint {
    return <AtomicBlueprint>blueprintCatalog.getBlueprint(name);
}

/**
 * Resolve the component name to the actual path of the component
 * @method
 * @param {string} componentName the name of the component.  If the component contains slashes, it will be assumed that the component is referenced by absolute path.  Otherwise, the component will be looked up in componentCrossref.js.json
 * @returns {string} the absolute path to the component
 */
function resolveJSComponent(componentName: string): Atomic.Component {
    buildComponentCrossref();
    let comp;
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
 * Returns true if the component is a registered JSComponent
 * @method
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
 * @method
 * @param componentName the name of the component to retrieve the builder for
 */
function getComponentBuilder(componentName: string) {
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

    let builder;

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

export function createChild(parent: Atomic.Node, blueprint, forceCreateFromBlueprint?: boolean): Atomic.Node {
    if (typeof (blueprint) === "string") {
        blueprint = getBlueprint(blueprint);
    }

    let node;
    if (blueprint.isPrefab && !forceCreateFromBlueprint) {
        let prefabPath = Atomic.addTrailingSlash(RESOURCES_DIR) + GENERATED_PREFABS_DIR;
        if (blueprint.prefabDir) {
            prefabPath = blueprint.prefabDir;
        }
        node = parent.createChildPrefab(blueprint.name, Atomic.addTrailingSlash(prefabPath) + blueprint.name + ".prefab");
    } else {
        node = parent.createChild(blueprint.name);
        buildEntity(node, blueprint);
    }
    return node;
}

export function createChildAtPosition(parent: Atomic.Node, blueprint, spawnPosition: number[]) {
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


/**
 * Obsolete.  Use the functions directly
 * @type {Object}
 * @deprecated
 */
export const nodeBuilder = {
    createChild: createChild,
    createChildAtPosition: createChildAtPosition,
    getBlueprint: getBlueprint,
    generatePrefabs: generatePrefabs,
    setDebug: function(val) {
        DEBUG = val;
    }
};
