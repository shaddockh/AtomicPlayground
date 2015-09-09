'use strict';
'atomic component';
import * as triggerEvent from 'atomicTriggerEvent';
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
        debug: false
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
        let input = Atomic.input,
            keymap = this.keymap;
        for (let action in keymap) {
            let keys = keymap[action];
            if (keys && keys.length) {
                for (let i = 0; i < keys.length; i++) {
                    if (this.scene.Level.turnBased) {
                        if (input.getKeyPress(keys[i])) {
                            return parseInt(action);
                        }
                    } else {
                        if (input.getKeyDown(keys[i])) {
                            return parseInt(action);
                        }
                    }
                }
            }
        }
        return PlayerActions.NO_ACTION;
    }

    update( /*timeStep*/ ) {
        let action = this.getCurrentAction();
        if (action !== PlayerActions.NO_ACTION) {
            switch (action) {
            case PlayerActions.MOVE_LEFT:
                this.DEBUG('Processing Action: move left');
                triggerEvent.trigger(this.node, "onTryMove", [-1, 0])
                break;
            case PlayerActions.MOVE_RIGHT:
                this.DEBUG('Processing Action: move right');
                triggerEvent.trigger(this.node, "onTryMove", [1, 0])
                break;
            case PlayerActions.MOVE_UP:
                this.DEBUG('Processing Action: move up');
                triggerEvent.trigger(this.node, "onTryMove", [0, 1])
                break;
            case PlayerActions.MOVE_DOWN:
                this.DEBUG('Processing Action: move down');
                triggerEvent.trigger(this.node, "onTryMove", [0, -1])
                break;
            }
        }
    }

    DEBUG(msg) {
        if (this.debug) {
            console.log(`PlayerInputHandler: ${msg}`);
        }
    }

}
