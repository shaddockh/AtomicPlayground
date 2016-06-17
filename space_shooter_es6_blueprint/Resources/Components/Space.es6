'use strict';
'atomic component';

const inspectorFields = {
    speed: 0.75
};

class Space extends Atomic.JSComponent {

    update(timeStep) {
        this.node.translate([0, -timeStep * this.speed, 0]);
    }
}

module.exports = Space;
