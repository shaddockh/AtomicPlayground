// This script is the main entry point of the game
import 'vendor';
import 'blueprints'; // Load all the blueprints into the catalog
import { nodeBuilder } from 'atomic-blueprintLib';

nodeBuilder.setDebug(false);
// Add the vendor scripts to the global namespace

// create a 2D scene
let scene = new Atomic.Scene();
scene.createComponent("Octree");

let cameraNode = scene.createChild("Camera");
cameraNode.position = [0.0, 0.0, -10.0];

let camera = cameraNode.createComponent("Camera");
camera.orthographic = true;
camera.orthoSize = Atomic.graphics.height * Atomic.PIXEL_SIZE;

let viewport = null;

viewport = new Atomic.Viewport(scene, camera);
Atomic.renderer.setViewport(0, viewport);

Atomic.renderer.textureFilterMode = Atomic.FILTER_NEAREST;
Atomic.totalTime = 0;

// set up lighting zone
let zone = scene.createComponent("Zone");
zone.ambientColor = [.1, .1, .1, 0];

// set up physics
scene.createComponent("DebugRenderer");
//scene.createComponent("Renderer2D");
let physicsWorld = scene.createComponent("PhysicsWorld2D");
physicsWorld.drawShape = true;
physicsWorld.allowSleeping = true;
physicsWorld.warmStarting = true;
physicsWorld.autoClearForces = true;
physicsWorld.gravity = [0,0];

nodeBuilder.createChild(scene, 'uiLevelGenerationChooser');

// called per frame
export function update(timeStep) {
    Atomic.totalTime += timeStep;
    //physicsWorld.drawDebugGeometry();
}
