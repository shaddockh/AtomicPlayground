import "atomic-blueprintLib.bundle"; // need to initialize the library bundle so we can access the contents
import * as blueprintLib from "atomic-blueprintlib";

// Set up a globals object that we can reference
import Globals from "Globals";

// This script is the main entry point of the game

// create a 2D scene
var scene = new Atomic.Scene();
scene.createComponent("Octree");

var cameraNode = scene.createChild("Camera");
cameraNode.position = [0.0, 0.0, -10.0];

var camera = cameraNode.createComponent("Camera");
camera.orthographic = true;
camera.orthoSize = Atomic.graphics.height * Atomic.PIXEL_SIZE;

var viewport = null;

viewport = new Atomic.Viewport(scene, camera);
Atomic.renderer.setViewport(0, viewport);

Atomic.renderer.textureFilterMode = Atomic.FILTER_NEAREST;
blueprintLib.catalog.loadBlueprints(require("blueprints"));

// create the game component
var comp = blueprintLib.createChild(scene, 'spaceGame');

// called per frame
export function update(timeStep) {}
