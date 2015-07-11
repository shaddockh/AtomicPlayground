var game = Atomic.game;
var node = self.node;

var defaultBlueprint = {
    speed: 100
};

// Initialize the blueprint here for elements that need to happen prior to start
var blueprint = node.getComponentBlueprint(self, defaultBlueprint);
/**
 * Perform any setup required before the first start iteration
 */
(function () {
    // no setup here
}());

function start() {}

function update(timeStep) {
    node.roll(timeStep * blueprint.speed);
}
