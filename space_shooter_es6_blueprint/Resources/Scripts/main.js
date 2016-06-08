"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = update;

require("atomic-blueprintLib.bundle");

var _atomicBlueprintlib = require("atomic-blueprintlib");

var blueprintLib = _interopRequireWildcard(_atomicBlueprintlib);

var _Globals = require("Globals");

var _Globals2 = _interopRequireDefault(_Globals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// This script is the main entry point of the game

// create a 2D scene
// need to initialize the library bundle so we can access the contents
var scene = new Atomic.Scene();

// Set up a globals object that we can reference

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
function update(timeStep) {}