// This script is the main entry point of the game
import 'vendor';
import 'Blueprints/blueprints'; // Load all the blueprints into the catalog
import 'Ui/ui'; // Let the ui system register itself
import { gameChannel } from '../Modules/gameChannels';

import { nodeBuilder } from 'atomic-blueprintLib';

nodeBuilder.setDebug(false);
// Add the vendor scripts to the global namespace

// create a 2D scene
let scene = new Atomic.Scene();
scene.createComponent('Octree');

let cameraNode = scene.createChild('Camera');
cameraNode.position = [0.0, 0.0, -10.0];

let camera = cameraNode.createComponent<Atomic.Camera>('Camera');
camera.orthographic = true;
camera.orthoSize = Atomic.graphics.height * Atomic.PIXEL_SIZE;

let viewport = null;

viewport = new Atomic.Viewport(scene, camera);
Atomic.renderer.setViewport(0, viewport);

Atomic.renderer.textureFilterMode = Atomic.FILTER_NEAREST;

// set up lighting zone
let zone = scene.createComponent<Atomic.Zone>('Zone');
zone.ambientColor = [.1, .1, .1, 0];

// Put some limits on the renderer
Atomic.engine.setMaxFps(30);
// TODO:vSync not available in the d.ts
//Atomic.engine.vSync = true;

// set up physics
scene.createComponent('DebugRenderer');
//scene.createComponent('Renderer2D');
let physicsWorld = scene.createComponent<Atomic.PhysicsWorld2D>('PhysicsWorld2D');
physicsWorld.drawShape = true;
physicsWorld.allowSleeping = true;
physicsWorld.warmStarting = true;
physicsWorld.autoClearForces = true;
physicsWorld.gravity = [0, 0];

let currentLevelGen = null;
gameChannel.subscribe((topic) => {
    switch (topic) {
        case 'shutdown:game':
            Atomic.engine.exit();
            break;
        case 'launch:levelgen':
            if (!currentLevelGen) {
                currentLevelGen = nodeBuilder.createChild(scene, 'uiLevelGenerationChooser');
            }
            break;
    }
});

gameChannel.sendMessage('launch:levelgen');

// called per frame
export function update(timeStep) {
    //physicsWorld.drawDebugGeometry();
}
