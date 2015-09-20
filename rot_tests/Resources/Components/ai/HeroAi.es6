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
            this.scene.Level.updateFov(this.getPosition(), this.sightRadius);
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

    getPosition() {
        return this.node.getJSComponent('Entity').getPosition();
    }

    onMoveComplete() {
        this.scene.Level.incTurn();
        this.scene.Level.updateFov(this.getPosition());
    }

    onActionComplete() {
        this.scene.Level.incTurn();
        this.scene.Level.updateFov(this.getPosition());
    }

    onDie(/*killerComponent, killerNode*/) {
        this.DEBUG('Killed!');
        this.scene.Level.deregisterActor(this);
        this.scene.Level.gameOver();
    }
}
