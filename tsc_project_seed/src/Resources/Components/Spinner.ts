'atomic component';

/**
 * A component that rotates a node
 */
class Spinner extends Atomic.JSComponent {

    /**
     * Fields to expose to the editor
     */
    inspectorFields = {
        speed: [Atomic.VAR_INT, 100]
    };

    /**
     * The  speed to rotate the node.  Negative numbers rotate clockwise
     * @type {number}
     */
    speed: number;

    /**
     * Called every cycle.  The timestep will be the delta since the last time update was called
     * @param  {number} timeStep the delta time since the last time update was called
     */
    update(timeStep: number): void {
        //roll a node
        this.node.roll(timeStep * this.speed);
    }
}

export = Spinner;
