'use strict';
import * as blueprintLib from 'blueprintLib';

var game = Atomic.game;
var node = self.node;

var SpaceGame = Globals.SpaceGame;
var defaultBlueprint = {
    canMove: false,
    allowShoot: false,
    bulletBlueprint: 'enemyBullet'
};

// Initialize the blueprint here for elements that need to happen prior to start
var blueprint = node.getComponentBlueprint(self, defaultBlueprint);
/**
 * Perform any setup required before the first start iteration
 */
(function() {
    self.canMove = blueprint.canMove;
    self.allowShoot = blueprint.allowShoot;
    self.shootDelta = 0;
}());

function start() {
}

function update(timeStep) {

    if (SpaceGame.gameOver) {
        return;
    }

    var pos = node.worldPosition2D;
    var ppos = SpaceGame.playerNode.worldPosition2D;

    if (self.canMove) {
        if (Math.abs(pos[0] - ppos[0]) > 0.25) {
            if (pos[0] < ppos[0]) {
                pos[0] += timeStep * 0.95;
            } else {
                pos[0] -= timeStep * 0.95;
            }

            node.position2D = pos;
        }
    }

    if (self.shootDelta > 0) {

        self.shootDelta -= timeStep;

        if (self.shootDelta < 0) {
            self.shootDelta = 0;
        }
        return;
    }

    if (Math.abs(pos[0] - ppos[0]) < 0.25) {

        self.shootDelta = 0.5;

        if (Math.random() > 0.1) {
            return;
        }

        var pos2 = node.worldPosition2D;
        pos2[1] -= 0.25;
        SpaceGame.spawnBullet(pos2, blueprint.bulletBlueprint);
    }

}
