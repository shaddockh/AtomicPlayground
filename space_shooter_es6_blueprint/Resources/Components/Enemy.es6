'use strict';
'atomic component';

import * as blueprintLib from 'atomic-blueprintlib';
import Globals from "Globals";

const SpaceGame = Globals.SpaceGame;
class Enemy extends Atomic.JSComponent {

    // using start to initialize the script component
    start() {
        this.moveDelta = 0;
        this.dead = false;
        this.spawnPosition = this.node.position2D;
        this.node.roll(180);
        this.node.scale2D = [0.65, 0.65];

        this.dir = (Math.random() > 0.5);

        this.subscribeToEvent('onEnemyHit', this.onHit);
    }

    onDie() {
        SpaceGame.removeEnemy(this);
    }

    onHit(pos) {
        // what's different?
        // in the original version, the following line worked, but now it causes the
        // explosion to appear somewhere way off from the node...like the sprite is not displayed where the 2d coord is.
        // switching it to use the passed in pos works, but it may be masking some bug somewhere.
        //EntityBuilder.createChildAtPosition(game.scene, 'explosion', node.worldPosition2D);
        blueprintLib.createChildAtPosition(this.node.scene, 'explosion', pos);
    }

    // update function called per frame with delta time
    update(timeStep) {
        if (Math.random() > 0.98) {
            this.dir = !this.dir;
        }

        this.moveDelta += (this.dir ? timeStep * 4 : -timeStep * 4);

        var pos = [this.spawnPosition[0], this.spawnPosition[1]];
        pos[1] += Math.sin(this.moveDelta) * 0.1;
        this.node.position2D = pos;
    }
}

module.exports = Enemy;
