'use strict';
'atomic component';

export default class Space extends Atomic.JSComponent {

    constructor() {
        super();
        this.inspectorFields = {
            speed: 0.75
        };
    }

    update(timeStep) {
        this.node.translate([0, -timeStep * this.speed, 0]);
    }
}
