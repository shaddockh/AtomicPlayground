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


    onTurnTaken() {
        this.scene.Level.incTurn();
        this.scene.Level.updateFov(this.getPosition());
        this.scene.Level.pause(false);
        this.DEBUG('Unpausing action.');
        triggerEvent.trigger(this.node, 'onActionComplete', this, this.node);
    }

    getPosition() {
        return this.node.getJSComponent('Entity').getPosition();
    }

    // Action Handlers

    onMoveComplete() {
        triggerEvent.trigger(this.node, 'onTurnTaken', this, this.node);
    }

    onActionComplete() {
        // noop
    }

    onSkipTurn() {
        triggerEvent.trigger(this.node, 'onLogAction', 'Waiting...');
        triggerEvent.trigger(this.node, 'onTurnTaken', this, this.node);
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
        // move will handle the turn taken
        // TODO: need to clean up the whole turn taking logic somehow, it could get really messy really quickly.
        // triggerEvent.trigger(this.node, 'onTurnTaken', this, this.node);
    }

    onHandleBump(targetNode) {
        const entityComponent = targetNode.getJSComponent('Entity');
        if (entityComponent.attackable) {
            triggerEvent.trigger(this.node, 'onAttack', targetNode);
        } else if (entityComponent.bumpable) {
            triggerEvent.trigger(targetNode, 'onBump', this, this.node);
            triggerEvent.trigger(this.node, 'onActionComplete', this, this.node);
        }
    }

    onHealthChanged() {
        this.scene.Level.updateUi();
    }
}
