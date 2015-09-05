'use strict';
'atomic component';
//import * as triggerEvent from 'atomicTriggerEvent';
//import { nodeBuilder } from 'atomic-blueprintLib';
//import MapData from 'MapData';

class PlayerActions {
    static NO_ACTION = 0;
    static MOVE_LEFT = 1;
    static MOVE_RIGHT = 2;
    static MOVE_UP = 3;
    static MOVE_DOWN = 4;
}

export default class PlayerInputHandler extends Atomic.JSComponent {

    inspectorFields = {
        debug: false,
        TILE_SIZE: 16
    };

    /* beautify preserve:start */
    keymap = {
        [PlayerActions.MOVE_LEFT]: [Atomic.KEY_LEFT, Atomic.KEY_H, Atomic.KEY_A],
        [PlayerActions.MOVE_RIGHT]: [Atomic.KEY_RIGHT, Atomic.KEY_L, Atomic.KEY_D],
        [PlayerActions.MOVE_UP]: [Atomic.KEY_UP, Atomic.KEY_K, Atomic.KEY_W],
        [PlayerActions.MOVE_DOWN]: [Atomic.KEY_DOWN, Atomic.KEY_J, Atomic.KEY_S]
    };
    /* beautify preserve:end */

    start() {}

    getCurrentAction() {
        var input = Atomic.input,
            keymap = this.keymap;
        for (let action in keymap) {
            let keys = keymap[action];
            if (keys && keys.length) {
                for (let i = 0; i < keys.length; i++) {
                    if (input.getKeyPress(keys[i])) {
                        return parseInt(action);
                    }
                }
            }
        }
        return PlayerActions.NO_ACTION;
    }

    update(/*timeStep*/) {
        var action = this.getCurrentAction();
        if (action !== PlayerActions.NO_ACTION) {
            this.DEBUG(`Processing Action - ${action}`);
            //var speed = this.TILE_SIZE * timeStep;
            var speed = this.TILE_SIZE * Atomic.PIXEL_SIZE;
            var pos = this.node.position2D;
            this.DEBUG(pos);
            this.DEBUG(speed);
            switch (action) {
            case PlayerActions.MOVE_LEFT:
                pos[0] -= speed; // use translate?
                this.DEBUG('move left');
                break;
            case PlayerActions.MOVE_RIGHT:
                pos[0] += speed; // use translate?
                this.DEBUG('move right');
                break;
            case PlayerActions.MOVE_UP:
                pos[1] += speed; // use translate?
                this.DEBUG('move up');
                break;
            case PlayerActions.MOVE_DOWN:
                pos[1] -= speed; // use translate?
                this.DEBUG('move down');
                break;
            }
            console.log(pos);
            this.node.position2D = pos;
            console.log(this.node.position2D);
        }
    }

    DEBUG(msg) {
        if (this.debug) {
            console.log(`PlayerInputHandler: ${msg}`);
        }
    }

}
