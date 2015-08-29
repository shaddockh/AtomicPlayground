// This script is the main entry point of the game
import 'vendor';
import 'blueprints';  // Load all the blueprints into the catalog
import {nodeBuilder} from 'atomic-blueprintLib';

// Add the vendor scripts to the global namespace

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
Atomic.totalTime = 0;

nodeBuilder.createChild(scene, 'uiLevelGenerationChooser');

// called per frame
export function update(timeStep) {
    Atomic.totalTime += timeStep;
}
