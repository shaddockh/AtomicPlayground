'use strict';
'atomic component';

import * as triggerEvent from 'atomicTriggerEvent';
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
        triggerEvent.trigger(this.node, 'onLogAction', 'Waiting...');
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

    onHit(hitter, hitterNode) {
        const entityComponent = hitterNode.getJSComponent('Entity');
        triggerEvent.trigger(this.node, 'onLogAction', `You are attacked by ${entityComponent.screenName}`);
    }

    onAttack(targetNode) {
        const entityComponent = targetNode.getJSComponent('Entity');
        this.DEBUG(`Attacked ${targetNode.name}`);
        triggerEvent.trigger(this.node, 'onLogAction', `You attack ${entityComponent.screenName}`);
        triggerEvent.trigger(targetNode, 'onHit', this, this.node);
    }

    onHandleBump(targetNode) {
        const entityComponent = targetNode.getJSComponent('Entity');
        if (entityComponent.attackable) {
            triggerEvent.trigger(this.node, 'onAttack', targetNode);
        } else if (entityComponent.bumpable) {
            triggerEvent.trigger(targetNode, 'onBump', this, this.node);
        }
    }

    onHealthChanged() {
        this.scene.Level.updateUi();
    }
}
