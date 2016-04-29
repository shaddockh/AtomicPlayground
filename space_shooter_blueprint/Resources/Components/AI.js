'use strict';
"atomic component";
var blueprintLib = require('atomic-blueprintlib');

module.exports.component = function (self) {
    var node = self.node;

    var SpaceGame = Globals.SpaceGame;
    var inspectorFields = {
        canMove: false,
        allowShoot: false,
        bulletBlueprint: 'enemyBullet'
    };

    self.start = function start() {};

    self.update = function update(timeStep) {

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
            SpaceGame.spawnBullet(pos2, self.bulletBlueprint);
        }

    };
};
