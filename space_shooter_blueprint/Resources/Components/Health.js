// Health component
'use strict';

var game = Atomic.game;
var node = self.node;

var SpaceGame = Globals.SpaceGame;

var defaultBlueprint = {
    health: 1,
};

// Initialize the blueprint here for elements that need to happen prior to start
var blueprint = node.getComponentBlueprint(self, defaultBlueprint);
/**
 * Perform any setup required before the first start iteration
 */
(function() {
    self.health = blueprint.health;
}());

// using start to initialize the script component
function start() {
}

self.onHit = function () {
    self.health--;

    //var explosion = EntityBuilder.buildChildEntity(game.scene, 'explosion');
    //explosion.Position.setPosition(node.worldPosition2D);

    if (self.health <= 0) {
    //SpaceGame.removeEnemy(self);
      self.node.trigger('onDie');
    }
    return true;
};
