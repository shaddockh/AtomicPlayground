'use strict';
// This script is the main entry point of the game

// Require in the vendor file
import 'vendor';

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

// Put some limits on the renderer
Atomic.engine.setMaxFps(30);
Atomic.engine.vSync = true;

// Add the star component
var node = scene.createChild("Star");
node.createJSComponent("Components/Star.js");

Atomic.totalTime = 0;

// called once per frame
export function update(timeStep) {
    Atomic.totalTime += timeStep;
}
