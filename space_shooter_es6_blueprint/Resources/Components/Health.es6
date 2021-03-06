// Health component
'use strict';
'atomic component';

import * as triggerEvent from 'atomicTriggerEvent';
import Globals from "Globals";

const SpaceGame = Globals.SpaceGame;

const inspectorFields = {
    health: 1,
};

class Health extends Atomic.JSComponent {
    // using start to initialize the script component
    //start() {}

    onHit() {
        this.health--;
        if (this.health <= 0) {
            triggerEvent.trigger(this.node, 'onDie');
        }
        return true;
    }
}

module.exports = Health;
