'atomic component';

class Star extends Atomic.JSComponent {

    // Inspector fields will show up in the Atomic Editor scene view to allow editing
    inspectorFields = {
        speed: 100,
    };

    // Start will be called when component is instantiated
    start() {
        console.log(this.speed);
    }

    // Update will be called every cycle
    update(timeStep) {
        this.node.roll(timeStep * this.speed);
    }
}

module.exports = Star;
