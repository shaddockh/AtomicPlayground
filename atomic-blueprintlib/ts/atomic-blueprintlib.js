"use strict";
var entity_blueprint_manager_1 = require("entity-blueprint-manager");
var componentCrossref = null;
var RESOURCES_DIR = "Resources";
var PREFABS_DIR = "Prefabs";
var GENERATED_PREFABS_DIR = Atomic.addTrailingSlash(PREFABS_DIR) + "Generated";
var DEBUG = true;
function debug(message) {
    if (DEBUG) {
        console.log(message);
    }
}
exports.catalog = new entity_blueprint_manager_1.BlueprintCatalog({
    ignoreCase: false,
    requireInherits: false
});
var componentBuilders = {
    rootNodeComponentBuilder: {
        build: function (node, componentBlueprint, componentName, blueprint) {
            mapBlueprintToNativeComponent(node, blueprint, "Node");
        }
    },
    nativeComponentBuilder: {
        build: function (node, componentBlueprint, componentName) {
            if (DEBUG) {
                console.log("Attaching Native Component: " + componentName + " to node.");
            }
            var comp = node.createComponent(componentName);
            mapBlueprintToNativeComponent(comp, componentBlueprint, componentName);
        }
    },
    jsComponentBuilder: {
        build: function (node, componentBlueprint, componentName) {
            if (DEBUG) {
                console.log("Attaching JSComponent: " + componentName + " to node.");
            }
            var component = resolveJSComponent(componentName);
            var jsComp = node.createJSComponent(component, componentBlueprint);
            for (var prop in componentBlueprint) {
                jsComp.setAttribute(prop, componentBlueprint[prop]);
            }
            node[componentName] = jsComp;
            return jsComp;
        }
    }
};
var cachedNativeComponentProps = {};
function mapBlueprintToNativeComponent(component, blueprint, componentName) {
    var compPropertyXref = cachedNativeComponentProps[componentName];
    if (!compPropertyXref) {
        compPropertyXref = {};
        var attributes = component.getAttributes();
        for (var i = 0; i < attributes.length; i++) {
            var attr = attributes[i];
            compPropertyXref[attr.name.toLowerCase().replace(/\ /g, "")] = attr;
        }
        cachedNativeComponentProps[componentName] = compPropertyXref;
    }
    for (var prop in blueprint) {
        if (typeof (blueprint[prop]) === "object" && !Array.isArray(blueprint[prop])) {
            continue;
        }
        var attribute = compPropertyXref[prop.toLowerCase()];
        if (!attribute) {
            continue;
        }
        switch (attribute.type) {
            case Atomic.VAR_BOOL:
            case Atomic.VAR_INT:
            case Atomic.VAR_FLOAT:
            case Atomic.VAR_STRING:
            case Atomic.VAR_VECTOR2:
            case Atomic.VAR_VECTOR3:
            case Atomic.VAR_QUATERNION:
            case Atomic.VAR_COLOR:
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
function getProjectRoot() {
    if (ToolCore) {
        return ToolCore.toolSystem.project.projectPath;
    }
    else {
        var pth = "";
        var cl = Atomic.getArguments().join(",").split(",");
        for (var i = 0; i < cl.length; i++) {
            if (cl[i] === "--project") {
                pth = cl[i + 1];
                break;
            }
        }
        return pth;
    }
}
function generatePrefab(scene, blueprint, path) {
    if (DEBUG) {
        console.log("Generating prefab: " + blueprint.name + " at " + path);
    }
    var node = createChild(scene, blueprint, true);
    var file = new Atomic.File(path, Atomic.FILE_WRITE);
    node.saveXML(file);
    file.close();
    node.removeAllComponents();
    node.remove();
}
function generatePrefabs() {
    var projectRoot = getProjectRoot();
    if (!projectRoot || projectRoot === "") {
        console.log("Cannot generate prefabs without --project command line argument or outside the editor environment.");
        return;
    }
    projectRoot = Atomic.addTrailingSlash(projectRoot);
    var scene = new Atomic.Scene();
    scene.setUpdateEnabled(false);
    var fs = Atomic.fileSystem;
    var defaultPath = Atomic.addTrailingSlash(RESOURCES_DIR) + GENERATED_PREFABS_DIR;
    if (fs.checkAccess(projectRoot + defaultPath)) {
        var blueprintNames = exports.catalog.getAllBlueprintNames();
        for (var i = 0; i < blueprintNames.length; i++) {
            var blueprint = exports.catalog.getBlueprint(blueprintNames[i]);
            if (blueprint.isPrefab) {
                var path = defaultPath;
                if (blueprint.prefabDir) {
                    path = Atomic.addTrailingSlash(RESOURCES_DIR) + blueprint.prefabDir;
                }
                fs.createDirs(projectRoot, path);
                debug("Generating prefab: " + Atomic.addTrailingSlash(path) + blueprintNames[i] + ".prefab");
                generatePrefab(scene, blueprint, projectRoot + Atomic.addTrailingSlash(path) + blueprintNames[i] + ".prefab");
            }
        }
    }
    else {
        if (DEBUG) {
            console.log("Access denied writing to: " + defaultPath);
        }
    }
}
exports.generatePrefabs = generatePrefabs;
function generateComponentIndex(projectRoot, componentXrefFn) {
    var fs = Atomic.fileSystem;
    var idxPath = Atomic.addTrailingSlash(projectRoot) + Atomic.addTrailingSlash(RESOURCES_DIR) + componentXrefFn;
    var idxFile = new Atomic.File(idxPath, Atomic.FILE_WRITE);
    var xref = {};
    var componentsFound = 0;
    var slash = Atomic.addTrailingSlash("1")[1];
    if (DEBUG) {
        console.log("Writing component xref file to: " + idxPath);
    }
    for (var i = 0, iEnd = Atomic.cache.resourceDirs.length; i < iEnd; i++) {
        var pth = Atomic.addTrailingSlash(Atomic.cache.resourceDirs[i]);
        if (fs.checkAccess(pth) && fs.dirExists(pth)) {
            if (DEBUG) {
                console.log("Searching for components in: " + pth);
            }
            var componentFiles = fs.scanDir(pth, "*.js", Atomic.SCAN_FILES, true);
            for (var f = 0, fEnd = componentFiles.length; f < fEnd; f++) {
                if (componentFiles[f].toLowerCase().indexOf("components" + slash) === -1) {
                    continue;
                }
                var resource = Atomic.cache.getTempResource("JSComponentFile", componentFiles[f], false);
                if (resource) {
                    var internalComponentPath = componentFiles[f];
                    if (internalComponentPath.indexOf(Atomic.addTrailingSlash(RESOURCES_DIR)) === 0) {
                        internalComponentPath = internalComponentPath.replace(Atomic.addTrailingSlash(RESOURCES_DIR), "");
                    }
                    var componentName = internalComponentPath.replace(".js", "");
                    if (componentName.indexOf(slash) >= 0) {
                        componentName = componentName.split(slash).pop();
                    }
                    var oldComponent = xref[componentName];
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
function buildComponentCrossref() {
    if (componentCrossref) {
        return componentCrossref;
    }
    componentCrossref = {};
    var componentXrefFn = "_componentXref.txt";
    var projectRoot = getProjectRoot();
    if (projectRoot !== "") {
        generateComponentIndex(projectRoot, componentXrefFn);
    }
    var xrefFile = Atomic.cache.getFile(componentXrefFn);
    var fileContents = xrefFile.readText().split("\n");
    for (var c = 0; c < fileContents.length; c++) {
        var namePathSplit = fileContents[c].split("=");
        componentCrossref[namePathSplit[0]] = namePathSplit[1];
        if (DEBUG) {
            console.log("Registering component: " + namePathSplit[0] + " at " + namePathSplit[1]);
        }
    }
    xrefFile.close();
    return componentCrossref;
}
function extend(orig, extendwith) {
    var result = {};
    for (var i in orig) {
        if (orig.hasOwnProperty(i)) {
            result[i] = orig[i];
        }
    }
    for (var i in extendwith) {
        if (extendwith.hasOwnProperty(i)) {
            if (typeof extendwith[i] === "object") {
                if (extendwith[i] === null) {
                    result[i] = null;
                }
                else if (Array.isArray(extendwith[i])) {
                    result[i] = extendwith[i];
                }
                else {
                    result[i] = extend(result[i], extendwith[i]);
                }
            }
            else {
                result[i] = extendwith[i];
            }
        }
    }
    return result;
}
function getBlueprint(name) {
    return exports.catalog.getBlueprint(name);
}
exports.getBlueprint = getBlueprint;
function reset() {
    exports.catalog.clear();
}
exports.reset = reset;
function resolveJSComponent(componentName) {
    buildComponentCrossref();
    var comp;
    if (new RegExp("\\ | \/", "g").test(componentName)) {
        comp = componentName;
    }
    else {
        comp = componentCrossref[componentName] || null;
    }
    return comp;
}
function isRegisteredJSComponent(componentName) {
    if (resolveJSComponent(componentName)) {
        return true;
    }
    return false;
}
function getComponentBuilder(componentName) {
    if (isRegisteredJSComponent(componentName)) {
        return componentBuilders.jsComponentBuilder;
    }
    else {
        return componentBuilders.nativeComponentBuilder;
    }
}
function getRootComponentBuilder() {
    return componentBuilders.rootNodeComponentBuilder;
}
function buildEntity(node, blueprint) {
    var blueprintObj;
    if (typeof (blueprint) === "string") {
        blueprint = getBlueprint(blueprint);
    }
    if (DEBUG) {
        console.log("Building entity: " + blueprint.name);
    }
    var builder;
    builder = getRootComponentBuilder();
    builder.build(node, null, null, blueprint);
    for (var componentName in blueprint) {
        if (typeof (blueprint[componentName]) === "object" && !Array.isArray(blueprint[componentName])) {
            builder = getComponentBuilder(componentName);
            try {
                builder.build(node, blueprint[componentName], componentName, blueprint);
            }
            catch (e) {
                throw new Error("Could not construct component " + componentName + "  on  " + blueprint.name + ".\n" + e.toString());
            }
        }
    }
    return node;
}
exports.buildEntity = buildEntity;
function createChild(parent, blueprint, forceCreateFromBlueprint) {
    if (typeof (blueprint) === "string") {
        blueprint = getBlueprint(blueprint);
    }
    var node;
    if (blueprint.isPrefab && !forceCreateFromBlueprint) {
        var prefabPath = Atomic.addTrailingSlash(RESOURCES_DIR) + GENERATED_PREFABS_DIR;
        if (blueprint.prefabDir) {
            prefabPath = blueprint.prefabDir;
        }
        node = parent.createChildPrefab(blueprint.name, Atomic.addTrailingSlash(prefabPath) + blueprint.name + ".prefab");
    }
    else {
        node = parent.createChild(blueprint.name);
        buildEntity(node, blueprint);
    }
    return node;
}
exports.createChild = createChild;
function createChildAtPosition(parent, blueprint, spawnPosition) {
    var node = createChild(parent, blueprint);
    if (spawnPosition.length === 2) {
        node.position2D = [spawnPosition[0], spawnPosition[1]];
    }
    else if (spawnPosition.length === 3) {
        node.position = [spawnPosition[0], spawnPosition[1], spawnPosition[3]];
    }
    else {
        throw new Error("Unknown spawnPosition format.  Can not determine if it's 2D or 3D");
    }
    return node;
}
exports.createChildAtPosition = createChildAtPosition;
