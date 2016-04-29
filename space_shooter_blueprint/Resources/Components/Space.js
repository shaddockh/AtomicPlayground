'use strict';
"atomic component";

module.exports.component = function (self) {
    var node = self.node;

    var inspectorFields = {
        speed: 0.75
    };

    self.start = function start() {

    };

    self.update = function update(timeStep) {
        node.translate([0, -timeStep * self.speed, 0]);
    };
};
