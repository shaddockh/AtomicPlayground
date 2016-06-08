'use strict';
'atomic component';

class Space extends Atomic.JSComponent {

    static inspectorFields = {
        speed: 0.75
    };

    update(timeStep) {
        this.node.translate([0, -timeStep * this.speed, 0]);
    }
}

module.exports = Space;
