'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * A component that rotates a node
 */
var Spinner = (function (_super) {
    __extends(Spinner, _super);
    function Spinner() {
        _super.apply(this, arguments);
        /**
         * Fields to expose to the editor
         */
        this.inspectorFields = {
            speed: [Atomic.VAR_INT, 100]
        };
    }
    /**
     * Called every cycle.  The timestep will be the delta since the last time update was called
     * @param  {number} timeStep the delta time since the last time update was called
     */
    Spinner.prototype.update = function (timeStep) {
        //roll a node
        this.node.roll(timeStep * this.speed);
    };
    return Spinner;
})(Atomic.JSComponent);
module.exports = Spinner;
