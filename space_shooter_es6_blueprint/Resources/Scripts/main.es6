
// Set up a globals ojbect that we can reference since
// I'm not entirely sure how the module system works
Globals = {};
// This script is the main entry point of the game

import * as blueprintLib from 'blueprintLib';
require("AtomicGame");

Atomic.game.init(start, update);

// called at the start of play
function start() {

    var game = Atomic.game;

    // create a 2D scene
    game.createScene2D();

    // create the game component
    var comp = blueprintLib.createChild(game.scene, 'spaceGame');
}

// called per frame
function update(timeStep) {}
