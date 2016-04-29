// Health component
'use strict';
"atomic component";

var triggerEvent = require('atomicTriggerEvent');

module.exports.component = function (self) {
    var node = self.node;

    var SpaceGame = Globals.SpaceGame;

    var inspectorFields = {
        health: 1,
    };

    // using start to initialize the script component
    self.start = function start() {};

    self.onHit = function () {
        self.health--;

        if (self.health <= 0) {
            triggerEvent.trigger(node, 'onDie');
        }
        return true;
    };
};
