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

    onBump(bumperComponent, bumperNode) {
        this.life--;
        this.DEBUG(`Bumped by: ${bumperComponent.node.name} `);
        this.DEBUG(`Life reduced.  Current Life: ${this.life} `);
        if (this.life <= 0) {
            // send an onDie message as if it came from the bumper
            triggerEvent.trigger(this.node, 'onDie', bumperComponent, bumperNode);
        }
    }

}
