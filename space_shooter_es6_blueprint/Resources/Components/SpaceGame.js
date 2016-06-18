'use strict';
'atomic component';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _atomicBlueprintlib = require('atomic-blueprintlib');

var blueprintLib = _interopRequireWildcard(_atomicBlueprintlib);

var _Globals = require('Globals');

var _Globals2 = _interopRequireDefault(_Globals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is used to defer deleted until the next iteration of the event loop so that we don't destroy elements while they
// are still being referenced within the current event loop.  for instance, sending on onHit to an enemy could cause the onDie to trigger before the onHit for
// a subsequent component.  the onDie will then schedule a deletion.
var deleteQueue = [];

var inspectorFields = {
    backgroundMusic: ["Sound"]
};

var SpaceGame = function (_Atomic$JSComponent) {
    _inherits(SpaceGame, _Atomic$JSComponent);

    function SpaceGame() {
        _classCallCheck(this, SpaceGame);

        // expose ourselves as a global

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SpaceGame).call(this));

        _this.HUD = null;
        _Globals2.default.SpaceGame = _this;
        _this.halfWidth = Atomic.graphics.width * Atomic.PIXEL_SIZE * 0.5;
        _this.halfHeight = Atomic.graphics.height * Atomic.PIXEL_SIZE * 0.5;

        _this.enemyBaseDir = false;
        _this.enemyBasePosX = 0;
        _this.score = 0;

        return _this;
    }

    // using start to initialize the script component


    _createClass(SpaceGame, [{
        key: 'start',
        value: function start() {
            this.HUD = this.node.getJSComponent("HUD");
            this.enemyBaseNode = this.scene.createChild("EnemyBaseNode");

            this.gameOver = false;
            this.enemies = [];
            this.spawnSpace();
            this.spawnPlayer();
            this.spawnEnemies();

            this.backgroundMusic.looped = true;
            var musicNode = this.scene.createChild("MusicNode");
            var musicSource = musicNode.createComponent("SoundSource");
            musicSource.gain = 0.5;
            musicSource.soundType = Atomic.SOUND_MUSIC;
            musicSource.play(this.backgroundMusic);
        }
    }, {
        key: 'random',
        value: function random(min, max) {
            return Math.random() * (max - min) + min;
        }
    }, {
        key: 'spawnBullet',
        value: function spawnBullet(pos, blueprint) {
            if (typeof blueprint === 'string') {
                blueprint = blueprintLib.catalog.getBlueprint(blueprint);
            }

            blueprintLib.createChildAtPosition(this.scene, blueprint, pos);
        }
    }, {
        key: 'removeEnemy',
        value: function removeEnemy(enemy) {

            this.score += 10;
            this.enemies.splice(this.enemies.indexOf(enemy), 1);

            // CHANGED! For the event system to work, we need to schedule this to get deleted on the next update
            deleteQueue.push(enemy.node);
            this.HUD.updateScore(this.score);
        }
    }, {
        key: 'capitalShipDestroyed',
        value: function capitalShipDestroyed() {
            this.score += 1000;
            deleteQueue.push(this.capitalShipNode);

            this.capitalShipNode = null;
            this.HUD.updateScore(this.score);
        }
    }, {
        key: 'spawnSpace',
        value: function spawnSpace() {
            var spaceNode = blueprintLib.createChild(this.scene, 'background');
        }
    }, {
        key: 'spawnEnemies',
        value: function spawnEnemies() {
            this.capitalShipNode = blueprintLib.createChildAtPosition(this.scene, 'capitalShip', [-4, this.halfHeight - 1]);

            var pos = [0, 0];
            pos[1] = this.halfHeight - 2.5;

            for (var y = 0; y < 3; y++) {
                pos[0] = -4.5;

                for (var x = 0; x < 12; x++) {
                    var enemyNode = blueprintLib.createChildAtPosition(this.enemyBaseNode, Math.random() < 0.85 ? 'spaceship_louse' : 'spaceship_scarab', [pos[0], pos[1]]);
                    this.enemies.push(enemyNode.getJSComponent('Enemy'));

                    pos[0] += 0.75;
                }
                pos[1] -= 0.75;
            }
        }
    }, {
        key: 'updateEnemies',
        value: function updateEnemies(timeStep) {

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
    }, {
        key: 'win',
        value: function win() {
            this.HUD.updateGameText("YOU WIN!!!!");
            this.gameOver = true;
        }
    }, {
        key: 'lose',
        value: function lose() {
            this.HUD.updateGameText("YOU LOSE!!!!");
            this.gameOver = true;
        }
    }, {
        key: 'spawnPlayer',
        value: function spawnPlayer() {
            this.playerNode = blueprintLib.createChild(this.scene, 'player');
            this.player = this.playerNode.getJSComponent('Player');
        }
    }, {
        key: 'update',
        value: function update(timeStep) {
            for (var x = 0; x < deleteQueue.length; x++) {
                Atomic.destroy(deleteQueue.pop());
            }
            this.updateEnemies(timeStep);
        }
    }]);

    return SpaceGame;
}(Atomic.JSComponent);

module.exports = SpaceGame;