//
// Copyright (c) 2008-2015 the Urho3D project.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
// This script is the main entry point of the game
require("AtomicGame");

var glmatrix = require("gl-matrix");
var vec2 = glmatrix.vec2;

/// Vector to store the sprites for iterating through them.
var sprites_ = [];
// Number of sprites to draw
var NUM_SPRITES = 100;

// Custom variable identifier for storing sprite velocity within the UI element
var VAR_VELOCITY = "Velocity";

Atomic.game.init(start, update);

// called at the start of play
function start() {

    Atomic.game.createScene2D();

    // Create the sprites to the user interface
    createSprites();

    // Hook up to the frame update events
    //subscribeToEvents();
}

// called per frame
function update(timeStep) {
    // Take the frame time step, which is stored as a float
    //var timeStep = eventData[P_TIMESTEP].GetFloat();

    // Move sprites, scale movement with time step
    moveSprites(timeStep);
}

function createSprites() {
    var cache = Atomic.game.cache,
        graphics = Atomic.game.graphics,
        ui = Atomic.game.ui;

    // Get rendering window size as floats
    var width = graphics.getWidth();
    var height = graphics.getHeight();

    // Get the Urho3D fish texture
    var decalTex = cache.getResource("Texture2D", "../Resources/Textures/UrhoDecal.dds");

    for (var i = 0; i < NUM_SPRITES; ++i) {
        // Create a new sprite, set it to use the texture
        var sprite = new Atomic.Sprite();
        sprite.setTexture(decalTex);

        // The UI root element is as big as the rendering window, set random position within it
        sprite.setPosition([Math.random() * width, Math.random() * height]);

        // Set sprite size & hotspot in its center
        sprite.setSize(128, 128);
        //sprite.setHotSpot([64, 64]);
        sprite.hotSpot = [64, 64];

        // Set random rotation in degrees and random scale
        sprite.setRotation(Math.random() * 360.0);
        //sprite.setScale(Math.random(1.0) + 0.5);
        sprite.scale = Math.random(1.0) + 0.5;

        // Set random color and additive blending mode
        //sprite.setColor([Math.random(0.5) + 0.5, Math.random(0.5) + 0.5, Math.random(0.5) + 0.5]);
        sprite.color = [Math.random(0.5) + 0.5, Math.random(0.5) + 0.5, Math.random(0.5) + 0.5, 1];
        sprite.setBlendMode(Atomic.BLEND_ADD);

        // Add as a child of the root UI element
        ui.getRoot().addChild(sprite);

        // Store sprite's velocity as a custom variable
        //sprite.setVar(VAR_VELOCITY, [ Math.random(200.0) - 100.0, Math.random(200.0) - 100.0]);
        sprite[VAR_VELOCITY] = [Math.random(200.0) - 100.0, Math.random(200.0) - 100.0];

        // Store sprites to our own container for easy movement update iteration
        sprites_.push(sprite);
    }
}

function moveSprites(timeStep) {
    var graphics = Atomic.game.graphics;
    var width = graphics.getWidth();
    var height = graphics.getHeight();

    // Go through all sprites
    for (var i = 0; i < sprites_.length; ++i) {
        var sprite = sprites_[i];

        // Rotate
        var newRot = sprite.getRotation() + timeStep * 30.0;
        sprite.setRotation(newRot);

        // Move, wrap around rendering window edges
        //var newPos = sprite.getPosition() + sprite.getVar(VAR_VELOCITY).getVector2() * timeStep;
        // NOTE: This is dangerous..should probably have a component that holds the velocity
        var velocity = sprite[VAR_VELOCITY];
        var velocityVec = vec2.fromValues(velocity[0], velocity[1]);

        var newPos = sprite.getPosition();
        vec2.scaleAndAdd(newPos, newPos, velocityVec, timeStep);

        if (newPos[0] < 0.0) {
            newPos[0] += width;
        }
        if (newPos[0] >= width) {
            newPos[0] -= width;
        }
        if (newPos[1] < 0.0) {
            newPos[1] += height;
        }
        if (newPos[1] >= height) {
            newPos[1] -= height;
        }
        sprite.setPosition(newPos);
    }
}

