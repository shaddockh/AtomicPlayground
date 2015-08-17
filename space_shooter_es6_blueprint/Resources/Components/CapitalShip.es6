'use strict';
import * as blueprintLib from 'blueprintLib';

const SpaceGame = Globals.SpaceGame;
export default class CapitalShip extends Atomic.JSComponent {

    // using start to initialize the script component
    start() {
        this.node.roll(180);
    }

    die() {
        SpaceGame.capitalShipDestroyed();

        for (var i = 0; i < 16; i++) {
            var pos = this.node.position2D;
            pos[0] += SpaceGame.random(-2, 2);
            pos[1] += SpaceGame.random(-2, 2);

            var explosion = blueprintLib.createChildAtPosition(this.node.scene, 'explosion', pos);

            var randomSize = SpaceGame.random(4, 8);
            explosion.scale2D = [randomSize, randomSize];
        }
        SpaceGame.win();
    }

    onDie() {
        this.die();
    }

    onHit(pos) {
        blueprintLib.createChildAtPosition(this.node.scene, 'explosion', pos);
        var explosion = blueprintLib.createChildAtPosition(this.node.scene, 'explosion', pos);
        explosion.scale2D = [2.0, 2.0];
    }

    // update function called per frame with delta time
    update(timeStep) {

    }
}
