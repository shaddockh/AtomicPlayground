import { BlueprintCatalog } from "entity-blueprint-manager";
import { Blueprint } from "entity-blueprint-manager";

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
    prefabDir?: string;
}

interface Builder {
    build(node: Atomic.Node, componentBlueprint: AtomicBlueprint, componentName: string, blueprint: AtomicBlueprint): void;
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
        build: function (node: Atomic.Node, componentBlueprint: AtomicBlueprint, componentName: string, blueprint: AtomicBlueprint): void {
            mapBlueprintToComponent(node, blueprint, "Node");
        }
    },

    // used to create and map a native component
    nativeComponentBuilder: {
        build: function (node: Atomic.Node, componentBlueprint: AtomicBlueprint, componentName: string): void {
            if (DEBUG) {
                console.log("Attaching Native Component: " + componentName + " to node.");
            }

            const comp = node.createComponent(componentName);
            mapBlueprintToComponent(comp, componentBlueprint, componentName);
        }
    },

    // Used to create and map a JSComponent
    jsComponentBuilder: {
        build: function (node: Atomic.Node, componentBlueprint: AtomicBlueprint, componentName: string): void {
            if (DEBUG) {
                console.log("Attaching JSComponent: " + componentName + " to node.");
            }
            const component = resolveJSComponent(componentName);
            const jsComp: Atomic.JSComponent = node.getJSComponent(component) || node.createJSComponent(component, componentBlueprint);
            mapBlueprintToComponent(jsComp, componentBlueprint, componentName);
        }
    }
};

const cachedComponentProps = {};
/**
 * maps blueprint properties to a native component.  Will cache the native component type attributes for speed.
 * @param {AObject} component the component to map
 * @param {object} blueprint the blueprint to map to the component
 * @param {string} the name of the component
 */
function mapBlueprintToComponent(component: Atomic.Node | Atomic.Component, blueprint: AtomicBlueprint, componentName: string) {

    let compPropertyXref = cachedComponentProps[componentName];
    if (!compPropertyXref) {
        compPropertyXref = {};
        const attributes = component.getAttributes();
        for (let i = 0; i < attributes.length; i++) {
            const attr = attributes[i];
            compPropertyXref[attr.name.toLowerCase().replace(/\ /g, "")] = attr;
        }
        cachedComponentProps[componentName] = compPropertyXref;
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
            case Atomic.VariantType.VAR_BOOL: // true or false
            case Atomic.VariantType.VAR_INT: // 0
            case Atomic.VariantType.VAR_FLOAT: // 0.0
            case Atomic.VariantType.VAR_STRING: // "string"
            case Atomic.VariantType.VAR_VECTOR2: // [0,0]
            case Atomic.VariantType.VAR_VECTOR3: // [0,0,0]
            case Atomic.VariantType.VAR_QUATERNION: // [0,0,0]
            case Atomic.VariantType.VAR_COLOR: // [0,0,0,0]
            case Atomic.VariantType.VAR_STRINGVECTOR: // ["a","b"]
            case Atomic.VariantType.VAR_INTVECTOR2: // [1, 2]
            case Atomic.VariantType.VAR_BUFFER: // [1, 2, 3, 4]
                // blueprint already has the value in the right format, so let's just set it
                if (DEBUG) {
                    console.log("setting attribute: " + attribute.name + " to value: " + blueprint[prop]);
                }
                component.setAttribute(attribute.name, blueprint[prop]);
                break;
            case Atomic.VariantType.VAR_RESOURCEREF:
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

/**
 * Utility function that will scan the Components directory for components and build a cross reference so that
 * when the blueprint system tries to attach a component, it knows where the component file is.
 * Note, that this will be cached so that it only builds the cross reference on game startup.
 * @returns object Component cross reference file.
 */
function getComponentXref(componentXrefFn = "componentCrossRef.json"): { [key: string]: string } {
    // TODO: look at having a way of registering js components.  There may be a scenario where these components don't live in the Components folder and may be supplied by a library.
    // Cached
    if (componentCrossref) {
        return componentCrossref;
    }

    componentCrossref = {};
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
    getComponentXref();
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
