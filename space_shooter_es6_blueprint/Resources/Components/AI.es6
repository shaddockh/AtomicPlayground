'use strict';
'atomic component';
import * as blueprintLib from 'atomic-blueprintlib';
import Globals from "Globals";

const SpaceGame = Globals.SpaceGame;

class AI extends Atomic.JSComponent {

    static inspectorFields = {
        canMove: false,
        allowShoot: false,
        bulletBlueprint: 'enemyBullet'
    };

    update(timeStep) {

        if (SpaceGame.gameOver) {
            return;
        }

        var pos = this.node.worldPosition2D;
        var ppos = SpaceGame.playerNode.worldPosition2D;

        if (this.canMove) {
            if (Math.abs(pos[0] - ppos[0]) > 0.25) {
                if (pos[0] < ppos[0]) {
                    pos[0] += timeStep * 0.95;
                } else {
                    pos[0] -= timeStep * 0.95;
                }
                this.node.position2D = pos;
            }
        }

        if (this.shootDelta > 0) {
            this.shootDelta -= timeStep;
            if (this.shootDelta < 0) {
                this.shootDelta = 0;
            }
            return;
        }

        if (Math.abs(pos[0] - ppos[0]) < 0.25) {
            this.shootDelta = 0.5;
            if (Math.random() > 0.1) {
                return;
            }
            var pos2 = this.node.worldPosition2D;
            pos2[1] -= 0.25;
            SpaceGame.spawnBullet(pos2, this.bulletBlueprint);
        }
    }
}

module.exports = AI;
