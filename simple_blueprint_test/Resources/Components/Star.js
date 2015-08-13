'atomic component';

var inspectorFields = {
    speed: 100
};

module.exports = function (self) {

    var game = Atomic.game;
    var node = self.node;

    // Initialize the blueprint here for elements that need to happen prior to start
    var blueprint = node.getComponentBlueprint(self, inspectorFields);
    /**
     * Perform any setup required before the first start iteration
     */
    (function () {
        // no setup here
    }());

    self.start = function () {

    };

    self.update = function (timeStep) {
        node.roll(timeStep * blueprint.speed);
    };
};
