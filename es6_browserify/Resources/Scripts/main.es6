'use strict';

// This script is the main entry point of the game
import 'AtomicGame';

// test out normal requires
import { hello } from 'submodule/testModule';

// Add the vendor scripts to the global namespace
Atomic.script('vendor');

Atomic.game.init(start, update);
Atomic.totalTime = 0;

// called at the start of play
function start() {

    if (typeof(hello) !== 'undefined') {
        print('normal require worked.');
    } else {
        print('normal require failed.');
    }

    const game = Atomic.game;

    // create a 2D scene
    game.createScene2D();

    // Add the star component
    const node = game.scene.createChild("Star");
    node.createJSComponent("Star");
}

// called per frame
function update(timeStep) {
    Atomic.totalTime += timeStep;
}

