'use strict';
"atomic component";
import CustomJSComponent from 'CustomJSComponent';
import * as triggerEvent from 'atomicTriggerEvent';

export default class Health extends CustomJSComponent {
    inspectorFields = {
        debug: true,
        life: 1
    };

    start() {}

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
