// Health component
'use strict';
'atomic component';

import * as triggerEvent from 'atomicTriggerEvent';

const SpaceGame = Globals.SpaceGame;
export default class Health extends Atomic.JSComponent {

    constructor() {
        super();
        this.inspectorFields = {
            health: 1,
        };
    }

    // using start to initialize the script component
    start() {}

    onHit() {
        this.health--;
        if (this.health <= 0) {
            triggerEvent.trigger(this.node, 'onDie');
        }
        return true;
    }
}
