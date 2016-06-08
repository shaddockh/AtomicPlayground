'use strict';
'atomic component';

import * as triggerEvent from 'atomicTriggerEvent';
import Globals from "Globals";

const SpaceGame = Globals.SpaceGame;

class Bullet extends Atomic.JSComponent {

    static inspectorFields = {
        isPlayer: false,
        laserSound: '',
        speed: 5
    };


    start() {
        this.laserSound = Atomic.cache.getResource("Sound", this.laserSound);
        this.soundSource = this.node.createComponent("SoundSource");
        this.soundSource.soundType = Atomic.SOUND_EFFECT;
        this.soundSource.gain = 0.75;
        if (!this.isPlayer) {
            this.node.roll(180);
        }
        this.soundSource.play(this.laserSound);
    }

    updateEnemyBullet() {

        var bpos = this.node.position2D;

        // off the bottom of the screen
        if (bpos[1] < -SpaceGame.halfHeight) {
            return true;
        }

        if (SpaceGame.player) {

            var epos = SpaceGame.player.node.worldPosition2D;

            if (Math.abs(epos[0] - bpos[0]) < 0.25 &&
                Math.abs(epos[1] - bpos[1]) < 0.25) {

                // Need to come back to the event system later..not working as expected.
                //SpaceGame.player.node.sendEvent('onPlayerHit', { x: bpos[0], y: bpos[1] });
                triggerEvent.trigger(SpaceGame.player.node, 'onHit', bpos);

                return true;
            }
        }
    }

    updatePlayerBullet() {

        var bpos = this.node.position2D;

        // off the top of the screen
        if (bpos[1] > SpaceGame.halfHeight) {
            return true;
        }

        // Manually checking for collisions
        for (var i = 0; i < SpaceGame.enemies.length; i++) {

            var enemy = SpaceGame.enemies[i];
            var epos = enemy.node.worldPosition2D;

            if (Math.abs(epos[0] - bpos[0]) < 0.25 &&
                Math.abs(epos[1] - bpos[1]) < 0.25) {

                // Need to come back to the event system later..not working as expected.
                //enemy.node.sendEvent('onEnemyHit', bpos);
                triggerEvent.trigger(enemy.node, 'onHit', bpos);
                return true;
            }
        }

        if (SpaceGame.capitalShipNode) {
            var epos2 = SpaceGame.capitalShipNode.worldPosition2D;

            if (Math.abs(epos2[0] - bpos[0]) < 0.75 &&
                Math.abs(epos2[1] - bpos[1]) < 0.75) {

                // Need to come back to the event system later..not working as expected.
                //SpaceGame.capitalShipNode.sendEvent('onHit', bpos);
                triggerEvent.trigger(SpaceGame.capitalShipNode, 'onHit', bpos);
                return true;
            }
        }
    }

    update(timeStep) {

        var speed = this.speed * timeStep;
        this.node.translate2D([0, speed]);

        if (this.isPlayer) {
            if (this.updatePlayerBullet()) {
                Atomic.destroy(this.node);
            }
        } else {
            if (this.updateEnemyBullet()) {
                Atomic.destroy(this.node);
            }
        }
    }
}

module.exports = Bullet;
