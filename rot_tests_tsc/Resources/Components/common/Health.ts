'use strict';
'atomic component';
import CustomJSComponent from 'CustomJSComponent';
import * as triggerEvent from 'atomicTriggerEvent';

class Health extends CustomJSComponent {
    inspectorFields = {
        debug: false,
        life: 1
    };
    life:number = 1;

    onHit(attackerComponent, attackerNode) {
        this.life--;
        // send a notification that health has changed
        triggerEvent.trigger(this.node, 'onHealthChanged', this, this.node);
        this.DEBUG(`Bumped by: ${attackerComponent.node.name} `);
        this.DEBUG(`Life reduced.  Current Life: ${this.life} `);
        if (this.life <= 0) {
            // send an onDie message as if it came from the bumper
            triggerEvent.trigger(this.node, 'onDie', attackerComponent, attackerNode);
        }
    }

    onAdjustHealth(health) {
        this.life += health;
        triggerEvent.trigger(this.node, 'onHealthChanged', this, this.node);
    }

}
export = Health;
