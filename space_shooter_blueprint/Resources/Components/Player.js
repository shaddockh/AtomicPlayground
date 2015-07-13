'use strict';
var blueprintLib = require('blueprintLib');

var game = Atomic.game;
var input = game.input;

var node = self.node;
var SpaceGame = Globals.SpaceGame;

var defaultBlueprint = {
    allowMove: true,
    allowShoot: true,
    shootDelta: 0,
    sprite: 'spaceship_mantis',
    bulletBlueprint: 'playerBullet'
};

// Initialize the blueprint here for elements that need to happen prior to start
var blueprint = node.getComponentBlueprint(self, defaultBlueprint);
/**
 * Perform any setup required before the first start iteration
 */
(function() {
    self.allowMove = blueprint.allowMove;
    self.allowShoot = blueprint.allowShoot;
    self.shootDelta = blueprint.shootDelta;
}());

// using start to initialize the script component
function start() {
    node.position2D = [0, -SpaceGame.halfHeight + 1];
}

self.onHit = function () {
    blueprintLib.createChildAtPosition(game.scene, 'explosion', node.worldPosition2D);
    SpaceGame.node.HUD.updateHealth(self.node.Health.health);
};

self.onDie = function() {
    SpaceGame.lose();
};


function doShooting(timeStep) {
    if (self.shootDelta > 0) {
        self.shootDelta -= timeStep;
        if (self.shootDelta < 0) {
            self.shootDelta = 0;
        }
        return;
    }

    if (!input.getKeyDown(Atomic.KEY_W) && !input.getKeyDown(Atomic.KEY_UP) && !input.getKeyDown(Atomic.KEY_SPACE)) {
        return;
    }

    self.shootDelta = 0.15;

    var pos = node.position2D;
    pos[1] += 0.5;

    SpaceGame.spawnBullet(pos, blueprint.bulletBlueprint);
}

function moveShip(timeStep) {
    var speed = 3.0 * timeStep;

    var pos = node.position2D;

    var left = false;
    var right = false;

    if (input.getKeyDown(Atomic.KEY_A) || input.getKeyDown(Atomic.KEY_LEFT)) {
        pos[0] -= speed;
    }

    if (input.getKeyDown(Atomic.KEY_D) || input.getKeyDown(Atomic.KEY_RIGHT)) {
        pos[0] += speed;
    }

    if (pos[0] < -SpaceGame.halfWidth + 2) {
        pos[0] = -SpaceGame.halfWidth + 2;
    }

    if (pos[0] > SpaceGame.halfWidth - 2) {
        pos[0] = SpaceGame.halfWidth - 2;
    }

    node.position2D = pos;

}


function update(timeStep) {

    if (self.allowShoot) {
        doShooting(timeStep);
    }

    if (self.allowMove) {
        moveShip(timeStep);
    }

}
