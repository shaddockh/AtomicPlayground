// Position component
'use strict';
'atomic component';

var inspectorFields = {
    spawnPosition: [Atomic.VAR_VECTOR3, [0, 0, 0]],
    debug: false
};

module.exports = function (self) {
    var game = Atomic.game;
    var node = self.node;

    self.start = function () {
        if (self.spawnPosition) {
            if (self.debug) {
                console.log('Position.SpawnPosition: ' + self.spawnPosition.join(','));
            }
            self.setPosition(self.spawnPosition);
        }
    };

    self.setPosition = function (pos) {
        if (self.debug) {
            console.log('Position.SetPosition: ' + pos.join(','));
        }
        node.position2D = pos;
    };
};
