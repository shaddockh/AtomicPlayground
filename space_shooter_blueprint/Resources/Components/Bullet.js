'use strict';
"atomic component";

var triggerEvent = require('atomicTriggerEvent');

module.exports.component = function (self) {
    var node = self.node;

    var SpaceGame = Globals.SpaceGame;

    var inspectorFields = {
        isPlayer: false,
        laserSound: '',
        speed: 5
    };

    self.start =  function start() {
        self.laserSound = Atomic.cache.getResource("Sound", self.laserSound);
        self.soundSource = node.createComponent("SoundSource");
        self.soundSource.soundType = Atomic.SOUND_EFFECT;
        self.soundSource.gain = 0.75;
        if (!self.isPlayer) {
            self.node.roll(180);
        }
        self.soundSource.play(self.laserSound);
    };

    function updateEnemyBullet() {

        var bpos = self.node.position2D;

        // off the bottom of the screen
        if (bpos[1] < -SpaceGame.halfHeight) {
            return true;
        }

        if (SpaceGame.player) {

            var epos = SpaceGame.player.node.worldPosition2D;

            if (Math.abs(epos[0] - bpos[0]) < 0.25 &&
                Math.abs(epos[1] - bpos[1]) < 0.25) {

                // Need to come back to the event system later..not working as expected.
                //SpaceGame.player.node.sendEvent('onPlayerHit', { x: bpos[0], y: bpos[1] });
                triggerEvent.trigger(SpaceGame.player.node, 'onHit', bpos);

                return true;
            }
        }
    }

    function updatePlayerBullet() {

        var bpos = node.position2D;

        // off the top of the screen
        if (bpos[1] > SpaceGame.halfHeight) {
            return true;
        }

        // Manually checking for collisions
        for (var i = 0; i < SpaceGame.enemies.length; i++) {

            var enemy = SpaceGame.enemies[i];
            var epos = enemy.node.worldPosition2D;

            if (Math.abs(epos[0] - bpos[0]) < 0.25 &&
                Math.abs(epos[1] - bpos[1]) < 0.25) {

                // Need to come back to the event system later..not working as expected.
                //enemy.node.sendEvent('onEnemyHit', bpos);
                triggerEvent.trigger(enemy.node, 'onHit', bpos);
                return true;
            }
        }

        if (SpaceGame.capitalShipNode) {
            var epos2 = SpaceGame.capitalShipNode.worldPosition2D;

            if (Math.abs(epos2[0] - bpos[0]) < 0.75 &&
                Math.abs(epos2[1] - bpos[1]) < 0.75) {

                // Need to come back to the event system later..not working as expected.
                //SpaceGame.capitalShipNode.sendEvent('onHit', bpos);
                triggerEvent.trigger(SpaceGame.capitalShipNode, 'onHit', bpos);
                return true;
            }
        }
    }

    self.update = function update(timeStep) {

        var speed = self.speed * timeStep;
        node.translate2D([0, speed]);

        if (self.isPlayer) {
            if (updatePlayerBullet()) {
                Atomic.destroy(node);
            }
        } else {
            if (updateEnemyBullet()) {
                Atomic.destroy(node);
            }
        }
    };
};
