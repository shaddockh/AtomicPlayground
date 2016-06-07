require('atomic-blueprintlib.bundle'); // need to initialize the library bundle so we can access the contents
var blueprintLib = require('atomic-blueprintlib');

// Set up a globals ojbect that we can reference since
// I'm not entirely sure how the module system works
Globals = {};
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

blueprintLib.catalog.loadBlueprints(require('blueprints'));

// create the game component
var comp = blueprintLib.createChild(scene, 'spaceGame');

// called per frame
exports.update = function update(timeStep) {};
