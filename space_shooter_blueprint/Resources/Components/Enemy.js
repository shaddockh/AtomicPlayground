'use strict';
"atomic component";
var blueprintLib = require('atomic-blueprintlib');

module.exports.component = function (self) {
    var node = self.node;

    var SpaceGame = Globals.SpaceGame;

    var moveDelta = 0;

    var dead = false;

    var inspectorFields = {};

    // using start to initialize the script component
    self.start = function start() {
        self.spawnPosition = node.position2D;
        node.roll(180);
        node.scale2D = [0.65, 0.65];

        self.dir = (Math.random() > 0.5);

        self.subscribeToEvent('onEnemyHit', self.onHit);
    };

    self.onDie = function () {
        SpaceGame.removeEnemy(self);
    };

    self.onHit = function (pos) {
        // what's different?
        // in the original version, the following line worked, but now it causes the
        // explosion to appear somewhere way off from the node...like the sprite is not displayed where the 2d coord is.
        // switching it to use the passed in pos works, but it may be masking some bug somewhere.
        //EntityBuilder.createChildAtPosition(game.scene, 'explosion', node.worldPosition2D);
        if (node && node.scene) {
            blueprintLib.createChildAtPosition(node.scene, 'explosion', pos);
        }
    };

    // update function called per frame with delta time
    self.update = function update(timeStep) {
        if (Math.random() > 0.98) {
            self.dir = !self.dir;
        }

        moveDelta += (self.dir ? timeStep * 4 : -timeStep * 4);

        var pos = [self.spawnPosition[0], self.spawnPosition[1]];
        pos[1] += Math.sin(moveDelta) * 0.1;
        node.position2D = pos;
    };
};
