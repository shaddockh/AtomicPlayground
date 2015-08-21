Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _blueprintLib = require('blueprintLib');

var blueprintLib = _interopRequireWildcard(_blueprintLib);

// This is used to defer deleted until the next iteration of the event loop so that we don't destroy elements while they
// are still being referenced within the current event loop.  for instance, sending on onHit to an enemy could cause the onDie to trigger before the onHit for
// a subsequent component.  the onDie will then schedule a deletion.
'use strict';
'atomic component';
var deleteQueue = [];

var SpaceGame = (function (_Atomic$JSComponent) {
    _inherits(SpaceGame, _Atomic$JSComponent);

    function SpaceGame() {
        _classCallCheck(this, SpaceGame);

        _get(Object.getPrototypeOf(SpaceGame.prototype), 'constructor', this).call(this);
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

    _createClass(SpaceGame, [{
        key: 'start',
        value: function start() {
            console.log('start');
            this.enemyBaseNode = this.scene.createChild("EnemyBaseNode");
            this.gameOver = false;
            this.enemies = [];
            this.spawnSpace();
            this.spawnPlayer();
            this.spawnEnemies();

            var musicFile = Atomic.cache.getResource("Sound", this.backgroundMusic);
            musicFile.looped = true;
            var musicNode = this.scene.createChild("MusicNode");
            var musicSource = musicNode.createComponent("SoundSource");
            musicSource.gain = 0.5;
            musicSource.soundType = Atomic.SOUND_MUSIC;
            musicSource.play(musicFile);
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
                blueprint = blueprintLib.getBlueprint(blueprint);
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
            this.node.HUD.updateScore(this.score);
        }
    }, {
        key: 'capitalShipDestroyed',
        value: function capitalShipDestroyed() {
            this.score += 1000;
            deleteQueue.push(this.capitalShipNode);

            this.capitalShipNode = null;
            this.node.HUD.updateScore(this.score);
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
                    this.enemies.push(enemyNode.Enemy);

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
            this.node.HUD.updateGameText("YOU WIN!!!!");
            this.gameOver = true;
        }
    }, {
        key: 'lose',
        value: function lose() {
            this.node.HUD.updateGameText("YOU LOSE!!!!");
            this.gameOver = true;
        }
    }, {
        key: 'spawnPlayer',
        value: function spawnPlayer() {
            this.playerNode = blueprintLib.createChild(this.scene, 'player');
            this.player = this.playerNode.Player;
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
})(Atomic.JSComponent);

exports['default'] = SpaceGame;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,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cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuJ2F0b21pYyBjb21wb25lbnQnO1xuaW1wb3J0ICogYXMgYmx1ZXByaW50TGliIGZyb20gJ2JsdWVwcmludExpYic7XG5cbi8vIFRoaXMgaXMgdXNlZCB0byBkZWZlciBkZWxldGVkIHVudGlsIHRoZSBuZXh0IGl0ZXJhdGlvbiBvZiB0aGUgZXZlbnQgbG9vcCBzbyB0aGF0IHdlIGRvbid0IGRlc3Ryb3kgZWxlbWVudHMgd2hpbGUgdGhleSBcbi8vIGFyZSBzdGlsbCBiZWluZyByZWZlcmVuY2VkIHdpdGhpbiB0aGUgY3VycmVudCBldmVudCBsb29wLiAgZm9yIGluc3RhbmNlLCBzZW5kaW5nIG9uIG9uSGl0IHRvIGFuIGVuZW15IGNvdWxkIGNhdXNlIHRoZSBvbkRpZSB0byB0cmlnZ2VyIGJlZm9yZSB0aGUgb25IaXQgZm9yXG4vLyBhIHN1YnNlcXVlbnQgY29tcG9uZW50LiAgdGhlIG9uRGllIHdpbGwgdGhlbiBzY2hlZHVsZSBhIGRlbGV0aW9uLlxuY29uc3QgZGVsZXRlUXVldWUgPSBbXTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwYWNlR2FtZSBleHRlbmRzIEF0b21pYy5KU0NvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zb2xlLmxvZygnY29uc3RydWN0b3InKTtcbiAgICAgICAgLy8gZXhwb3NlIG91cnNlbHZlcyBhcyBhIGdsb2JhbFxuICAgICAgICBHbG9iYWxzLlNwYWNlR2FtZSA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RvcjMnKTtcbiAgICAgICAgdGhpcy5oYWxmV2lkdGggPSBBdG9taWMuZ3JhcGhpY3Mud2lkdGggKiBBdG9taWMuUElYRUxfU0laRSAqIDAuNTtcbiAgICAgICAgdGhpcy5oYWxmSGVpZ2h0ID0gQXRvbWljLmdyYXBoaWNzLmhlaWdodCAqIEF0b21pYy5QSVhFTF9TSVpFICogMC41O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RvcjQnKTtcbiAgICAgICAgdGhpcy5lbmVteUJhc2VEaXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbmVteUJhc2VQb3NYID0gMDtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2NvbnN0cnVjdG9yNScpO1xuICAgICAgICB0aGlzLmluc3BlY3RvckZpZWxkcyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRNdXNpYzogJ011c2ljL2JhdHRsZS5vZ2cnXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCdleGl0IGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuXG4gICAgLy8gdXNpbmcgc3RhcnQgdG8gaW5pdGlhbGl6ZSB0aGUgc2NyaXB0IGNvbXBvbmVudFxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQnKTtcbiAgICAgICAgdGhpcy5lbmVteUJhc2VOb2RlID0gdGhpcy5zY2VuZS5jcmVhdGVDaGlsZChcIkVuZW15QmFzZU5vZGVcIik7XG4gICAgICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbmVtaWVzID0gW107XG4gICAgICAgIHRoaXMuc3Bhd25TcGFjZSgpO1xuICAgICAgICB0aGlzLnNwYXduUGxheWVyKCk7XG4gICAgICAgIHRoaXMuc3Bhd25FbmVtaWVzKCk7XG5cbiAgICAgICAgdmFyIG11c2ljRmlsZSA9IEF0b21pYy5jYWNoZS5nZXRSZXNvdXJjZShcIlNvdW5kXCIsIHRoaXMuYmFja2dyb3VuZE11c2ljKTtcbiAgICAgICAgbXVzaWNGaWxlLmxvb3BlZCA9IHRydWU7XG4gICAgICAgIHZhciBtdXNpY05vZGUgPSB0aGlzLnNjZW5lLmNyZWF0ZUNoaWxkKFwiTXVzaWNOb2RlXCIpO1xuICAgICAgICB2YXIgbXVzaWNTb3VyY2UgPSBtdXNpY05vZGUuY3JlYXRlQ29tcG9uZW50KFwiU291bmRTb3VyY2VcIik7XG4gICAgICAgIG11c2ljU291cmNlLmdhaW4gPSAwLjU7XG4gICAgICAgIG11c2ljU291cmNlLnNvdW5kVHlwZSA9IEF0b21pYy5TT1VORF9NVVNJQztcbiAgICAgICAgbXVzaWNTb3VyY2UucGxheShtdXNpY0ZpbGUpO1xuICAgIH1cblxuICAgIHJhbmRvbShtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xuICAgIH1cblxuICAgIHNwYXduQnVsbGV0KHBvcywgYmx1ZXByaW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGJsdWVwcmludCkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBibHVlcHJpbnQgPSBibHVlcHJpbnRMaWIuZ2V0Qmx1ZXByaW50KGJsdWVwcmludCk7XG4gICAgICAgIH1cblxuICAgICAgICBibHVlcHJpbnRMaWIuY3JlYXRlQ2hpbGRBdFBvc2l0aW9uKHRoaXMuc2NlbmUsIGJsdWVwcmludCwgcG9zKTtcbiAgICB9XG5cbiAgICByZW1vdmVFbmVteShlbmVteSkge1xuXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTA7XG4gICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UodGhpcy5lbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKTtcblxuXG4gICAgICAgIC8vIENIQU5HRUQhIEZvciB0aGUgZXZlbnQgc3lzdGVtIHRvIHdvcmssIHdlIG5lZWQgdG8gc2NoZWR1bGUgdGhpcyB0byBnZXQgZGVsZXRlZCBvbiB0aGUgbmV4dCB1cGRhdGVcbiAgICAgICAgZGVsZXRlUXVldWUucHVzaChlbmVteS5ub2RlKTtcbiAgICAgICAgdGhpcy5ub2RlLkhVRC51cGRhdGVTY29yZSh0aGlzLnNjb3JlKTtcbiAgICB9XG5cbiAgICBjYXBpdGFsU2hpcERlc3Ryb3llZCgpIHtcbiAgICAgICAgdGhpcy5zY29yZSArPSAxMDAwO1xuICAgICAgICBkZWxldGVRdWV1ZS5wdXNoKHRoaXMuY2FwaXRhbFNoaXBOb2RlKTtcblxuICAgICAgICB0aGlzLmNhcGl0YWxTaGlwTm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMubm9kZS5IVUQudXBkYXRlU2NvcmUodGhpcy5zY29yZSk7XG4gICAgfVxuXG4gICAgc3Bhd25TcGFjZSgpIHtcbiAgICAgICAgdmFyIHNwYWNlTm9kZSA9IGJsdWVwcmludExpYi5jcmVhdGVDaGlsZCh0aGlzLnNjZW5lLCAnYmFja2dyb3VuZCcpO1xuICAgIH1cblxuICAgIHNwYXduRW5lbWllcygpIHtcbiAgICAgICAgdGhpcy5jYXBpdGFsU2hpcE5vZGUgPSBibHVlcHJpbnRMaWIuY3JlYXRlQ2hpbGRBdFBvc2l0aW9uKHRoaXMuc2NlbmUsICdjYXBpdGFsU2hpcCcsIFstNCwgdGhpcy5oYWxmSGVpZ2h0IC0gMV0pO1xuXG4gICAgICAgIHZhciBwb3MgPSBbMCwgMF07XG4gICAgICAgIHBvc1sxXSA9IHRoaXMuaGFsZkhlaWdodCAtIDIuNTtcblxuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IDM7IHkrKykge1xuICAgICAgICAgICAgcG9zWzBdID0gLTQuNTtcblxuICAgICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCAxMjsgeCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVuZW15Tm9kZSA9IGJsdWVwcmludExpYi5jcmVhdGVDaGlsZEF0UG9zaXRpb24odGhpcy5lbmVteUJhc2VOb2RlLFxuICAgICAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpIDwgMC44NSA/ICdzcGFjZXNoaXBfbG91c2UnIDogJ3NwYWNlc2hpcF9zY2FyYWInLCBbcG9zWzBdLCBwb3NbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaChlbmVteU5vZGUuRW5lbXkpO1xuXG4gICAgICAgICAgICAgICAgcG9zWzBdICs9IDAuNzU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3NbMV0gLT0gMC43NTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUVuZW1pZXModGltZVN0ZXApIHtcblxuICAgICAgICBpZiAoIXRoaXMuZW5lbXlCYXNlRGlyKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15QmFzZVBvc1ggKz0gdGltZVN0ZXA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15QmFzZVBvc1ggLT0gdGltZVN0ZXA7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgeHZhbHVlID0gMjtcblxuICAgICAgICBpZiAodGhpcy5lbmVteUJhc2VQb3NYID4geHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15QmFzZVBvc1ggPSB4dmFsdWU7XG4gICAgICAgICAgICB0aGlzLmVuZW15QmFzZURpciA9ICF0aGlzLmVuZW15QmFzZURpcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmVuZW15QmFzZVBvc1ggPCAteHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmVuZW15QmFzZVBvc1ggPSAteHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5lbmVteUJhc2VEaXIgPSAhdGhpcy5lbmVteUJhc2VEaXI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVuZW15QmFzZU5vZGUucG9zaXRpb24yRCA9IFt0aGlzLmVuZW15QmFzZVBvc1gsIDBdO1xuICAgIH1cblxuICAgIHdpbigpIHtcbiAgICAgICAgdGhpcy5ub2RlLkhVRC51cGRhdGVHYW1lVGV4dChcIllPVSBXSU4hISEhXCIpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBsb3NlKCkge1xuICAgICAgICB0aGlzLm5vZGUuSFVELnVwZGF0ZUdhbWVUZXh0KFwiWU9VIExPU0UhISEhXCIpO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzcGF3blBsYXllcigpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXJOb2RlID0gYmx1ZXByaW50TGliLmNyZWF0ZUNoaWxkKHRoaXMuc2NlbmUsICdwbGF5ZXInKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllck5vZGUuUGxheWVyO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lU3RlcCkge1xuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IGRlbGV0ZVF1ZXVlLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBBdG9taWMuZGVzdHJveShkZWxldGVRdWV1ZS5wb3AoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVFbmVtaWVzKHRpbWVTdGVwKTtcbiAgICB9XG59XG4iXX0=