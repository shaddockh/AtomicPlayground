// Position component
'use strict';

var game = Atomic.game;
var node = self.node;

var defaultBlueprint = {
    spawnPosition: null,
    debug: false
};

// Initialize the blueprint here for elements that need to happen prior to start
var blueprint = node.getComponentBlueprint(self, defaultBlueprint);
/**
 * Perform any setup required before the first start iteration
 */
(function () {
    self.spawnPosition = blueprint.spawnPosition;
}());

function start() {
    if (self.spawnPosition) {
        if (blueprint.debug) {
            print(`POSITION: Spawning ${node.blueprint.name} at ${self.spawnPosition[0]},${self.spawnPosition[1]}`);
        }
        self.setPosition(self.spawnPosition);
    }
}

self.setPosition = function (pos) {
    node.position2D = pos;
};
