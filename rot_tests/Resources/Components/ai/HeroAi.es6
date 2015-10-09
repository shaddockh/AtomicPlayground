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
            this.DEBUG('Registering self with scheduler');
            this.scene.Level.registerActor(this);

            // TODO: we need to unlock the engine here for some reason.  It would be better if there were a less invasive way
            this.scene.Level.engine.unlock();
            this.scene.Level.updateFov(this.getPosition(), this.sightRadius);
        }
    }

    /** Pointer to be called when the action is complete.  The complete promise will overwrite this */
    onActionComplete = null;

    act() {
        this.DEBUG('contemplating action.');
        triggerEvent.trigger(this.node, 'onActionBegin', this, this.node);

        // we are returning a 'thenable' which tells the scheduler to not move on to the next actor
        // until this actor has completed.  This is overriding the onTurnTaken event on this class with
        // the callback passed to the then method, which means that when this class gets an onTurnTaken
        // event, it will resolve the then.
        // See: http://ondras.github.io/rot.js/manual/#timing/engine for some more information.
        return {
            then: (resolve) => {
                this.DEBUG('starting action.');
                this.onActionComplete = (() => {
                    this.DEBUG('action complete.');
                    // unhook the onActionComplete event
                    this.onActionComplete = null;
                    // call the callback, notifying the scheduler that we are done
                    resolve();
                });
            }
        };
    }

    onTurnTaken() {
        this.scene.Level.incTurn();
        this.scene.Level.updateFov(this.getPosition());
        //this.scene.Level.pause(false);
        //this.DEBUG('Unpausing action.');
        triggerEvent.trigger(this.node, 'onActionComplete', this, this.node);
    }

    getPosition() {
        return this.node.getJSComponent('Entity').getPosition();
    }

    // Action Handlers

    onMoveComplete() {
        triggerEvent.trigger(this.node, 'onTurnTaken', this, this.node);
    }

    onSkipTurn() {
        triggerEvent.trigger(this.node, 'onLogAction', 'Waiting...');
        triggerEvent.trigger(this.node, 'onTurnTaken', this, this.node);
    }

    onDie( /*killerComponent, killerNode*/ ) {
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
