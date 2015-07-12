'use strict';

import * as blueprintLib from 'blueprintLib';

var game = Atomic.game;
var node = self.node;

var SpaceGame = Globals.SpaceGame;

var moveDelta = 0;

var dead = false;

var defaultBlueprint = {};

// Initialize the blueprint here for elements that need to happen prior to start
var blueprint = node.getComponentBlueprint(self, defaultBlueprint);
/**
 * Perform any setup required before the first start iteration
 */
(function () {}());

// using start to initialize the script component
function start() {
    node.roll(180);
    node.scale2D = [0.65, 0.65];

    self.dir = (Math.random() > 0.5);

    //self.listenToEvent(null, 'onHit', self.hit);
    //doesn't seem to want to work for user created events
}

self.onDie = function () {
    SpaceGame.removeEnemy(self);
};

self.onHit = function (pos) {
    // what's different?
    // in the original version, the following line worked, but now it causes the
    // explosion to appear somewhere way off from the node...like the sprite is not displayed where the 2d coord is.
    // switching it to use the passed in pos works, but it may be masking some bug somewhere.
    //EntityBuilder.createChildAtPosition(game.scene, 'explosion', node.worldPosition2D);
    blueprintLib.createChildAtPosition(game.scene, 'explosion', pos);
};

// update function called per frame with delta time
function update(timeStep) {
    //var pos = node.position2D;
    var pos = node.worldPosition2D;
    if (Math.random() > 0.98) {
        self.dir = !self.dir;
    }

    moveDelta += (self.dir ? timeStep * 4 : -timeStep * 4);

    pos = [node.Position.spawnPosition[0], node.Position.spawnPosition[1]];
    pos[1] += Math.sin(moveDelta) * 0.1;
    node.Position.setPosition(pos);
}
