'use strict';
import * as blueprintLib from 'blueprintLib';

var game = Atomic.game;
var node = self.node;
var scene = game.scene;

var SpaceGame = Globals.SpaceGame;

var defaultBlueprint = { };

// Initialize the blueprint here for elements that need to happen prior to start
var blueprint = node.getComponentBlueprint(self, defaultBlueprint);
/**
 * Perform any setup required before the first start iteration
 */
(function() {
}());

// using start to initialize the script component
function start() {
    node.roll(180);
}

function die() {
    SpaceGame.capitalShipDestroyed();

    for (var i = 0; i < 16; i++) {
        var pos = node.position2D;
        pos[0] += SpaceGame.random(-2, 2);
        pos[1] += SpaceGame.random(-2, 2);

        var explosion = blueprintLib.createChildAtPosition(game.scene, 'explosion', pos);

        var randomSize = SpaceGame.random(4, 8);
        explosion.scale2D = [randomSize, randomSize];
    }
    SpaceGame.win();
}

self.onDie = function() {
    die();
};

self.onHit = function (pos) {
    blueprintLib.createChildAtPosition(game.scene, 'explosion', pos);
    var explosion = blueprintLib.createChildAtPosition(game.scene, 'explosion', pos);
    explosion.scale2D = [2.0, 2.0];
};


// update function called per frame with delta time
function update(timeStep) {

}
