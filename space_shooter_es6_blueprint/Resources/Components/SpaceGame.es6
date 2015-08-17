'use strict';
'atomic component';
import * as blueprintLib from 'blueprintLib';

// This is used to defer deleted until the next iteration of the event loop so that we don't destroy elements while they 
// are still being referenced within the current event loop.  for instance, sending on onHit to an enemy could cause the onDie to trigger before the onHit for
// a subsequent component.  the onDie will then schedule a deletion.
const deleteQueue = [];
export default class SpaceGame extends Atomic.JSComponent {

    constructor() {

        super();
        console.log('constructor');
        // expose ourselves as a global
        Globals.SpaceGame = this;
        console.log('constructor3');
        this.halfWidth = Atomic.graphics.width * Atomic.PIXEL_SIZE * 0.5;
        this.halfHeight = Atomic.graphics.height * Atomic.PIXEL_SIZE * 0.5;

        console.log('constructor4');
        this.enemyBaseDir = false;
        this.enemyBasePosX = 0;
        this.score = 0;

        console.log('constructor5');
        this.inspectorFields = {
            backgroundMusic: 'Music/battle.ogg'
        };
        console.log('exit constructor');
    }

    // using start to initialize the script component
    start() {
        console.log('start');
        this.enemyBaseNode = this.node.scene.createChild("EnemyBaseNode");
        this.gameOver = false;
        this.enemies = [];
        this.spawnSpace();
        this.spawnPlayer();
        this.spawnEnemies();

        var musicFile = Atomic.cache.getResource("Sound", this.backgroundMusic);
        musicFile.looped = true;
        var musicNode = this.node.scene.createChild("MusicNode");
        var musicSource = musicNode.createComponent("SoundSource");
        musicSource.gain = 0.5;
        musicSource.soundType = Atomic.SOUND_MUSIC;
        musicSource.play(musicFile);
    }

    random(min, max) {
        return Math.random() * (max - min) + min;
    }

    spawnBullet(pos, blueprint) {
        if (typeof (blueprint) === 'string') {
            blueprint = blueprintLib.getBlueprint(blueprint);
        }

        blueprintLib.createChildAtPosition(this.node.scene, blueprint, pos);
    }

    removeEnemy(enemy) {

        this.score += 10;
        this.enemies.splice(this.enemies.indexOf(enemy), 1);


        // CHANGED! For the event system to work, we need to schedule this to get deleted on the next update
        deleteQueue.push(enemy.node);

        // FIXME
        //node.HUD.updateScore(score);
    }

    capitalShipDestroyed() {
        this.score += 1000;
        deleteQueue.push(this.capitalShipNode);

        this.capitalShipNode = null;
        this.node.HUD.updateScore(this.score);
    }

    spawnSpace() {
        var spaceNode = blueprintLib.createChild(this.node.scene, 'background');
    }

    spawnEnemies() {
        this.capitalShipNode = blueprintLib.createChildAtPosition(this.node.scene, 'capitalShip', [-4, this.halfHeight - 1]);

        var pos = [0, 0];
        pos[1] = this.halfHeight - 2.5;

        for (var y = 0; y < 3; y++) {
            pos[0] = -4.5;

            for (var x = 0; x < 12; x++) {
                var enemyNode = blueprintLib.createChildAtPosition(this.enemyBaseNode,
                    Math.random() < 0.85 ? 'spaceship_louse' : 'spaceship_scarab', [pos[0], pos[1]]);
                this.enemies.push(enemyNode.Enemy);

                pos[0] += 0.75;
            }
            pos[1] -= 0.75;
        }
    }

    updateEnemies(timeStep) {

        if (!this.enemyBaseDir) {
            this.enemyBasePosX += timeStep;
        } else {
            this.enemyBasePosX -= timeStep;
        }

        var xvalue = 2;

        if (this.enemyBasePosX > xvalue) {
            this.enemyBasePosX = xvalue;
            this.enemyBaseDir = !this.enemyBaseDir;
        }

        if (this.enemyBasePosX < -xvalue) {
            this.enemyBasePosX = -xvalue;
            this.enemyBaseDir = !this.enemyBaseDir;
        }

        this.enemyBaseNode.position2D = [this.enemyBasePosX, 0];
    }

    win() {
        this.node.HUD.updateGameText("YOU WIN!!!!");
        this.gameOver = true;
    }

    lose() {
        this.node.HUD.updateGameText("YOU LOSE!!!!");
        this.gameOver = true;
    }

    spawnPlayer() {
        this.playerNode = blueprintLib.createChild(this.node.scene, 'player');
        this.player = this.playerNode.Player;
    }

    update(timeStep) {
        for (var x = 0; x < deleteQueue.length; x++) {
            Atomic.destroy(deleteQueue.pop());
        }
        this.updateEnemies(timeStep);
    }
}
