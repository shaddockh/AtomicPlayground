'use strict';

var game = Atomic.game;
var node = self.node;

var SpaceGame = Globals.SpaceGame;

var defaultBlueprint = {
    isPlayer: false,
    laserSound: '',
    speed: 5
};

// Initialize the blueprint here for elements that need to happen prior to start
var blueprint = node.getComponentBlueprint(self, defaultBlueprint);
/**
 * Perform any setup required before the first start iteration
 */
(function() {
    self.isPlayer = blueprint.isPlayer;
    self.laserSound = game.getSound(blueprint.laserSound);

    self.soundSource = node.createComponent("SoundSource");
    self.soundSource.soundType = Atomic.SOUND_EFFECT;
    self.soundSource.gain = 0.75;
    if (!self.isPlayer) {
        self.node.roll(180);
    }
}());

function start() {
    self.soundSource.play(self.laserSound);
}

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

            SpaceGame.playerNode.trigger('onHit');
            //SpaceGame.player.onHit();

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

            // Note: sendEvent doesn't seem to work, and you also can't send any information to it, so 
            // create a new message system
            //enemy.node.sendEvent('onHit', bpos);
            enemy.node.trigger('onHit', bpos);

            return true;
        }

    }

    if (SpaceGame.capitalShipNode) {
        var epos2 = SpaceGame.capitalShipNode.worldPosition2D;

        if (Math.abs(epos2[0] - bpos[0]) < 0.75 &&
            Math.abs(epos2[1] - bpos[1]) < 0.75) {

            SpaceGame.capitalShipNode.trigger('onHit', bpos);

            return true;
        }

    }

}

function update(timeStep) {

    var speed = blueprint.speed * timeStep;
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

}
