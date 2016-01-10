"use strict";
// This script is the main entry point of the game
require('vendor');
require('Blueprints/blueprints'); // Load all the blueprints into the catalog
require('Ui/ui'); // Let the ui system register itself
var gameChannels_1 = require('../Modules/gameChannels');
var atomic_blueprintLib_1 = require('atomic-blueprintLib');
atomic_blueprintLib_1.nodeBuilder.setDebug(false);
// Add the vendor scripts to the global namespace
// create a 2D scene
var scene = new Atomic.Scene();
scene.createComponent('Octree');
var cameraNode = scene.createChild('Camera');
cameraNode.position = [0.0, 0.0, -10.0];
var camera = cameraNode.createComponent('Camera');
camera.orthographic = true;
camera.orthoSize = Atomic.graphics.height * Atomic.PIXEL_SIZE;
var viewport = null;
viewport = new Atomic.Viewport(scene, camera);
Atomic.renderer.setViewport(0, viewport);
Atomic.renderer.textureFilterMode = Atomic.FILTER_NEAREST;
// set up lighting zone
var zone = scene.createComponent('Zone');
zone.ambientColor = [.1, .1, .1, 0];
// Put some limits on the renderer
Atomic.engine.setMaxFps(30);
// TODO:vSync not available in the d.ts
//Atomic.engine.vSync = true;
// set up physics
scene.createComponent('DebugRenderer');
//scene.createComponent('Renderer2D');
var physicsWorld = scene.createComponent('PhysicsWorld2D');
physicsWorld.drawShape = true;
physicsWorld.allowSleeping = true;
physicsWorld.warmStarting = true;
physicsWorld.autoClearForces = true;
physicsWorld.gravity = [0, 0];
var currentLevelGen = null;
gameChannels_1.gameChannel.subscribe(function (topic) {
    switch (topic) {
        case 'shutdown:game':
            Atomic.engine.exit();
            break;
        case 'launch:levelgen':
            if (!currentLevelGen) {
                currentLevelGen = atomic_blueprintLib_1.nodeBuilder.createChild(scene, 'uiLevelGenerationChooser');
            }
            break;
    }
});
gameChannels_1.gameChannel.sendMessage('launch:levelgen');
// called per frame
function update(timeStep) {
    //physicsWorld.drawDebugGeometry();
}
exports.update = update;
