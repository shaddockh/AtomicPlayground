'use strict';

var game = Atomic.game;
var node = self.node;


var defaultBlueprint = {
    speed: 0.75
};

// Initialize the blueprint here for elements that need to happen prior to start
var blueprint = node.getComponentBlueprint(self, defaultBlueprint);
/**
 * Perform any setup required before the first start iteration
 */
(function () {
    self.speed = blueprint.speed;
}());

function start() {

}

function update(timeStep) {
    node.translate([0, -timeStep * self.speed, 0]);
}
