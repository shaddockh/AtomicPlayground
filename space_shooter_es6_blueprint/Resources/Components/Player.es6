'use strict';
"atomic component";
import * as blueprintLib from 'blueprintLib';

const input = Atomic.input;
const SpaceGame = Globals.SpaceGame;
export default class Player extends Atomic.JSComponent {

    inspectorFields = {
        allowMove: true,
        allowShoot: true,
        shootDelta: 0,
        sprite: 'spaceship_mantis',
        bulletBlueprint: 'playerBullet'
    };

    // using start to initialize the script component
    start() {
        this.node.position2D = [0, -SpaceGame.halfHeight + 1];
        this.subscribeToEvent('onPlayerHit', this.onHit);
    }

    onHit(pos) {
        blueprintLib.createChildAtPosition(this.node.scene, 'explosion', pos);
        SpaceGame.node.HUD.updateHealth(this.node.Health.health);
    }

    onDie() {
        SpaceGame.lose();
    }

    doShooting(timeStep) {
        if (this.shootDelta > 0) {
            this.shootDelta -= timeStep;
            if (this.shootDelta < 0) {
                this.shootDelta = 0;
            }
            return;
        }

        if (!input.getKeyDown(Atomic.KEY_W) && !input.getKeyDown(Atomic.KEY_UP) && !input.getKeyDown(Atomic.KEY_SPACE)) {
            return;
        }

        this.shootDelta = 0.15;

        var pos = this.node.position2D;
        pos[1] += 0.5;

        SpaceGame.spawnBullet(pos, this.bulletBlueprint);
    }

    moveShip(timeStep) {
        var speed = 3.0 * timeStep;

        var pos = this.node.position2D;

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

        this.node.position2D = pos;

    }

    update(timeStep) {

        if (this.allowShoot) {
            this.doShooting(timeStep);
        }

        if (this.allowMove) {
            this.moveShip(timeStep);
        }
    }
}
