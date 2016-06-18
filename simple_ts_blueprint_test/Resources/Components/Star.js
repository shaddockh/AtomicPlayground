"atomic component";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Star = (function (_super) {
    __extends(Star, _super);
    function Star() {
        _super.apply(this, arguments);
        // Inspector fields will show up in the Atomic Editor scene view to allow editing
        this.inspectorFields = {
            speed: 100,
        };
        this.speed = 100;
    }
    // Start will be called when component is instantiated
    Star.prototype.start = function () {
        console.log(this.speed);
    };
    ;
    // Update will be called every cycle
    Star.prototype.update = function (timeStep) {
        this.node.roll(timeStep * this.speed);
    };
    ;
    return Star;
}(Atomic.JSComponent));
;
module.exports = Star;
