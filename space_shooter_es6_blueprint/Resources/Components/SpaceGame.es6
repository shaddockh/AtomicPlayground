'use strict';
import * as blueprintLib from 'blueprintLib';

var game = Atomic.game;
var node = self.node;
var scene = game.scene;

// expose ourselves as a global
Globals.SpaceGame = self;

self.halfWidth = game.graphics.width * Atomic.PIXEL_SIZE * 0.5;
self.halfHeight = game.graphics.height * Atomic.PIXEL_SIZE * 0.5;

var enemyBaseDir = false;
var enemyBaseNode = scene.createChild("EnemyBaseNode");
var enemyBasePosX = 0;
var score = 0;

var defaultBlueprint = {
    backgroundMusic: 'Music/battle.ogg'
};

// Initialize the blueprint here for elements that need to happen prior to start
var blueprint = node.getComponentBlueprint(self, defaultBlueprint);
/**
 * Perform any setup required before the first start iteration
 */
(function () {}());

// using start to initialize the script component
function start() {
    self.gameOver = false;
    self.enemies = [];
    spawnSpace();
    spawnPlayer();
    spawnEnemies();

    var musicFile = game.cache.getResource("Sound", blueprint.backgroundMusic);
    musicFile.looped = true;
    var musicNode = scene.createChild("MusicNode");
    var musicSource = musicNode.createComponent("SoundSource");
    musicSource.gain = 0.5;
    musicSource.soundType = Atomic.SOUND_MUSIC;
    musicSource.play(musicFile);
}

self.random = function random(min, max) {
    return Math.random() * (max - min) + min;
};

self.spawnBullet = function (pos, blueprint) {
    if (typeof(blueprint) === 'string') {
        blueprint = blueprintLib.getBlueprint(blueprint);
    }

    blueprintLib.createChildAtPosition(scene, blueprint, pos);
};

self.removeEnemy = function (enemy) {
    score += 10;

    node.HUD.updateScore(score);

    self.enemies.splice(self.enemies.indexOf(enemy), 1);
    Atomic.destroy(enemy.node);
    return;
};

self.capitalShipDestroyed = function () {
    score += 1000;

    self.node.HUD.updateScore(score);

    Atomic.destroy(self.capitalShipNode);
    self.capitalShipNode = null;
};

function spawnSpace() {
    var spaceNode = blueprintLib.createChild(scene, 'background');
}

function spawnEnemies() {
    self.capitalShipNode = blueprintLib.createChildAtPosition(scene, 'capitalShip', [-4, self.halfHeight - 1]);

    var pos = [0, 0];
    pos[1] = self.halfHeight - 2.5;

    for (var y = 0; y < 3; y++) {
        pos[0] = -4.5;

        for (var x = 0; x < 12; x++) {
            var enemyNode = blueprintLib.createChildAtPosition(enemyBaseNode,
                Math.random() < 0.85 ? 'spaceship_louse' : 'spaceship_scarab', [pos[0], pos[1]]);
            self.enemies.push(enemyNode.Enemy);

            pos[0] += 0.75;
        }
        pos[1] -= 0.75;
    }
}

function updateEnemies(timeStep) {

    if (!enemyBaseDir) {
        enemyBasePosX += timeStep;
    } else {
        enemyBasePosX -= timeStep;
    }

    var xvalue = 2;

    if (enemyBasePosX > xvalue) {
        enemyBasePosX = xvalue;
        enemyBaseDir = !enemyBaseDir;
    }

    if (enemyBasePosX < -xvalue) {
        enemyBasePosX = -xvalue;
        enemyBaseDir = !enemyBaseDir;
    }

    enemyBaseNode.position2D = [enemyBasePosX, 0];
}

self.win = function () {
    node.HUD.updateGameText("YOU WIN!!!!");
    self.gameOver = true;
};

self.lose = function () {
    node.HUD.updateGameText("YOU LOSE!!!!");
    self.gameOver = true;
};

function spawnPlayer() {
    self.playerNode = blueprintLib.createChild(scene, 'player');
    self.player = self.playerNode.Player;
}

function update(timeStep) {
    updateEnemies(timeStep);
}
