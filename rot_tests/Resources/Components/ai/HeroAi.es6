'use strict';
'atomic component';

import CustomJSComponent from 'CustomJSComponent';

export default class HeroAi extends CustomJSComponent {

    inspectorFields = {
        debug: false
    };

    start() {
        if (this.scene.Level) {
            this.scene.Level.registerActor(this);
        }
    }

    act() {
        this.scene.Level.pause(true);
        this.DEBUG('Pausing action.');
    }

    onSkipTurn() {
        this.scene.Level.incTurn();
        this.scene.Level.pause(false);
        this.DEBUG('Unpausing action.');
    }

    onTurnTaken() {
        this.scene.Level.incTurn();
        this.scene.Level.pause(false);
        this.DEBUG('Unpausing action.');
    }

    onDie(/*killerComponent, killerNode*/) {
        this.DEBUG('Killed!');
        this.scene.Level.deregisterActor(this);
        this.scene.Level.gameOver();
    }
}
