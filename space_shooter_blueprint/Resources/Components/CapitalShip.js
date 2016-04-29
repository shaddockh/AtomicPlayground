'use strict';
"atomic component";
var blueprintLib = require('atomic-blueprintlib');

module.exports.component = function (self) {
    var node = self.node;
    var scene = node.scene;

    var SpaceGame = Globals.SpaceGame;

    var inspectorFields = {};

    // using start to initialize the script component
    self.start = function start() {
        node.roll(180);
    };

    function die() {
        SpaceGame.capitalShipDestroyed();

        for (var i = 0; i < 16; i++) {
            var pos = node.position2D;
            pos[0] += SpaceGame.random(-2, 2);
            pos[1] += SpaceGame.random(-2, 2);

            var explosion = blueprintLib.createChildAtPosition(scene, 'explosion', pos);

            var randomSize = SpaceGame.random(4, 8);
            explosion.scale2D = [randomSize, randomSize];
        }
        SpaceGame.win();
    }

    self.onDie = function () {
        die();
    };

    self.onHit = function (pos) {
        blueprintLib.createChildAtPosition(scene, 'explosion', pos);
        var explosion = blueprintLib.createChildAtPosition(scene, 'explosion', pos);
        explosion.scale2D = [2.0, 2.0];
    };

    // update function called per frame with delta time
    self.update = function update(timeStep) {

    };
};
