'use strict';
"atomic component";
var blueprintLib = require('atomic-blueprintlib');

module.exports.component = function (self) {
    var node = self.node;
    var scene = node.scene;
    var hud = null;

    // expose ourselves as a global
    Globals.SpaceGame = self;

    self.halfWidth = Atomic.graphics.width * Atomic.PIXEL_SIZE * 0.5;
    self.halfHeight = Atomic.graphics.height * Atomic.PIXEL_SIZE * 0.5;

    var enemyBaseDir = false;
    var enemyBaseNode = scene.createChild("EnemyBaseNode");
    var enemyBasePosX = 0;
    var score = 0;

    var inspectorFields = {
        backgroundMusic: 'Music/battle.ogg'
    };

    // using start to initialize the script component
    self.start = function start() {
        self.gameOver = false;
        self.enemies = [];
        spawnSpace();
        spawnPlayer();
        spawnEnemies();

        var musicFile = Atomic.cache.getResource("Sound", self.backgroundMusic);
        musicFile.looped = true;
        var musicNode = scene.createChild("MusicNode");
        var musicSource = musicNode.createComponent("SoundSource");
        musicSource.gain = 0.5;
        musicSource.soundType = Atomic.SOUND_MUSIC;
        musicSource.play(musicFile);

        hud = self.node.getJSComponent('HUD');
    };

    self.random = function random(min, max) {
        return Math.random() * (max - min) + min;
    };

    self.spawnBullet = function (pos, blueprint) {
        if (typeof (blueprint) === 'string') {
            blueprint = blueprintLib.blueprintCatalog.getBlueprint(blueprint);
        }

        blueprintLib.createChildAtPosition(scene, blueprint, pos);
    };

    self.removeEnemy = function (enemy) {
        score += 10;
        self.enemies.splice(self.enemies.indexOf(enemy), 1);
        Atomic.destroy(enemy.node);
        hud.updateScore(score);
    };

    self.capitalShipDestroyed = function () {
        score += 1000;
        Atomic.destroy(self.capitalShipNode);
        self.capitalShipNode = null;
        hud.updateScore(score);
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
                self.enemies.push(enemyNode.getJSComponent('Enemy'));
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
        hud.updateGameText("YOU WIN!!!!");
        self.gameOver = true;
    };

    self.lose = function () {
        hud.updateGameText("YOU LOSE!!!!");
        self.gameOver = true;
    };

    function spawnPlayer() {
        self.playerNode = blueprintLib.createChild(scene, 'player');
        self.player = self.playerNode.getJSComponent('Player');
    }

    self.update = function update(timeStep) {
        updateEnemies(timeStep);
    };
};
