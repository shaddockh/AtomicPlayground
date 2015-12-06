(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* Catch all for some common helpers.  Collecting in here until I can organize them better */
"use strict";
/**
 * Sets the 2d camera ortho size to the correct size based upon the Atomic.PIXEL_SIZE and the graphics height
 * @param {Atomic.Scene} scene [description]
 */
function configureSceneCameraOrthoSize(scene) {
    var cameraNode = scene.getChild('Camera');
    var camera = cameraNode.getComponent('Camera');
    camera.orthoSize = Atomic.graphics.height * Atomic.PIXEL_SIZE;
}
exports.configureSceneCameraOrthoSize = configureSceneCameraOrthoSize;
/**
 *	Creates a 2D scene and returns the scene.  A camera will be attached
 *	with the name "Camera" and a zone will be created with the name "Zone"
 * @return {Atomic.Scene} The generated scene
 */
function create2dScene() {
    // create a 2D scene
    var scene = new Atomic.Scene();
    scene.createComponent('Octree');
    var cameraNode = scene.createChild('Camera');
    cameraNode.position = [0.0, 0.0, -10.0];
    var camera = cameraNode.createComponent('Camera');
    camera.orthographic = true;
    camera.orthoSize = Atomic.graphics.height * Atomic.PIXEL_SIZE;
    var viewport = new Atomic.Viewport(scene, camera);
    Atomic.renderer.setViewport(0, viewport);
    Atomic.renderer.textureFilterMode = Atomic.FILTER_NEAREST;
    // set up lighting zone
    var zone = scene.createComponent('Zone');
    zone.ambientColor = [.1, .1, .1, 0];
    // Put some limits on the renderer
    Atomic.engine.setMaxFps(30);
    // TODO:vSync not available in the d.ts
    //Atomic.engine.vSync = true;
    return scene;
}
exports.create2dScene = create2dScene;
/**
 * Sets up a default physics world for the provided scene
 * @param  {Atomic.Scene}          scene the scene to attach the physics world to
 * @return {Atomic.PhysicsWorld2D}       instance of the physics world
 */
function initPhysics2D(scene) {
    // set up physics
    scene.createComponent('DebugRenderer');
    //scene.createComponent('Renderer2D');
    var physicsWorld = scene.createComponent('PhysicsWorld2D');
    physicsWorld.drawShape = true;
    physicsWorld.allowSleeping = true;
    physicsWorld.warmStarting = true;
    physicsWorld.autoClearForces = true;
    physicsWorld.gravity = [0, 0];
    return physicsWorld;
}
exports.initPhysics2D = initPhysics2D;

},{}],2:[function(require,module,exports){
'use strict';
var debug = false;
/*global Duktape:true */
// Replace the built in modSearch routine with our own, but keep
// a reference to the original one that we will call in case a module
// we don't know about is requested.
Duktape.modSearch = (function (origModSearch, vendorMap) {
    return function (id, require, exports, module) {
        if (vendorMap[id]) {
            var result = vendorMap[id];

            if (debug) {
                console.log('Loading vendor module: ' + id);
            }
            // Let's map the exports from the module to the exports
            for (var exp in result) {
                if (debug) {
                    console.log('mapping export: ' + exp);
                }
                exports[exp] = result[exp];
            }
        } else {
            if (debug) {
                console.log('Loading other module: ' + id);
            }
            return origModSearch(id, require, exports, module);
        }
    };
}(Duktape.modSearch, {
    /* Add NPM modules that you will be "requiring in" to your components here.
       They will get bundled up into a vendor.js file in the Resources/Modules directory
       and you will just need to require that in within your Resources/Scripts/main.js
       */
    'atomic-utils': require('atomic-utils')
}));

},{"atomic-utils":1}]},{},[2]);
