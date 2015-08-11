// Position component
'use strict';
"atomic component";

var inspectorFields = {
    spawnPosition: null
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
        self.spawnPosition = blueprint.spawnPosition;
    }());

    self.start = function () {
        if (self.spawnPosition) {
            self.setPosition(self.spawnPosition);
        }
    };

    self.setPosition = function (pos) {
        node.position2D = pos;
    };
};
