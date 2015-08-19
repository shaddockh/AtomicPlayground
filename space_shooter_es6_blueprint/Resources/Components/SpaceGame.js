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

            blueprintLib.createChildAtPosition(this.node.scene, blueprint, pos);
        }
    }, {
        key: 'removeEnemy',
        value: function removeEnemy(enemy) {

            this.score += 10;
            this.enemies.splice(this.enemies.indexOf(enemy), 1);

            // CHANGED! For the event system to work, we need to schedule this to get deleted on the next update
            deleteQueue.push(enemy.node);

            // FIXME
            //node.HUD.updateScore(score);
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
            var spaceNode = blueprintLib.createChild(this.node.scene, 'background');
        }
    }, {
        key: 'spawnEnemies',
        value: function spawnEnemies() {
            this.capitalShipNode = blueprintLib.createChildAtPosition(this.node.scene, 'capitalShip', [-4, this.halfHeight - 1]);

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
            this.playerNode = blueprintLib.createChild(this.node.scene, 'player');
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
//# sourceMappingURL=data:application/json;base64,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bnQiOlsiJ3VzZSBzdHJpY3QnO1xuJ2F0b21pYyBjb21wb25lbnQnO1xuaW1wb3J0ICogYXMgYmx1ZXByaW50TGliIGZyb20gJ2JsdWVwcmludExpYic7XG5cbi8vIFRoaXMgaXMgdXNlZCB0byBkZWZlciBkZWxldGVkIHVudGlsIHRoZSBuZXh0IGl0ZXJhdGlvbiBvZiB0aGUgZXZlbnQgbG9vcCBzbyB0aGF0IHdlIGRvbid0IGRlc3Ryb3kgZWxlbWVudHMgd2hpbGUgdGhleSBcbi8vIGFyZSBzdGlsbCBiZWluZyByZWZlcmVuY2VkIHdpdGhpbiB0aGUgY3VycmVudCBldmVudCBsb29wLiAgZm9yIGluc3RhbmNlLCBzZW5kaW5nIG9uIG9uSGl0IHRvIGFuIGVuZW15IGNvdWxkIGNhdXNlIHRoZSBvbkRpZSB0byB0cmlnZ2VyIGJlZm9yZSB0aGUgb25IaXQgZm9yXG4vLyBhIHN1YnNlcXVlbnQgY29tcG9uZW50LiAgdGhlIG9uRGllIHdpbGwgdGhlbiBzY2hlZHVsZSBhIGRlbGV0aW9uLlxuY29uc3QgZGVsZXRlUXVldWUgPSBbXTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNwYWNlR2FtZSBleHRlbmRzIEF0b21pYy5KU0NvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zb2xlLmxvZygnY29uc3RydWN0b3InKTtcbiAgICAgICAgLy8gZXhwb3NlIG91cnNlbHZlcyBhcyBhIGdsb2JhbFxuICAgICAgICBHbG9iYWxzLlNwYWNlR2FtZSA9IHRoaXM7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RvcjMnKTtcbiAgICAgICAgdGhpcy5oYWxmV2lkdGggPSBBdG9taWMuZ3JhcGhpY3Mud2lkdGggKiBBdG9taWMuUElYRUxfU0laRSAqIDAuNTtcbiAgICAgICAgdGhpcy5oYWxmSGVpZ2h0ID0gQXRvbWljLmdyYXBoaWNzLmhlaWdodCAqIEF0b21pYy5QSVhFTF9TSVpFICogMC41O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjb25zdHJ1Y3RvcjQnKTtcbiAgICAgICAgdGhpcy5lbmVteUJhc2VEaXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbmVteUJhc2VQb3NYID0gMDtcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2NvbnN0cnVjdG9yNScpO1xuICAgICAgICB0aGlzLmluc3BlY3RvckZpZWxkcyA9IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRNdXNpYzogJ011c2ljL2JhdHRsZS5vZ2cnXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKCdleGl0IGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuXG4gICAgLy8gdXNpbmcgc3RhcnQgdG8gaW5pdGlhbGl6ZSB0aGUgc2NyaXB0IGNvbXBvbmVudFxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQnKTtcbiAgICAgICAgdGhpcy5lbmVteUJhc2VOb2RlID0gdGhpcy5ub2RlLnNjZW5lLmNyZWF0ZUNoaWxkKFwiRW5lbXlCYXNlTm9kZVwiKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zcGF3blNwYWNlKCk7XG4gICAgICAgIHRoaXMuc3Bhd25QbGF5ZXIoKTtcbiAgICAgICAgdGhpcy5zcGF3bkVuZW1pZXMoKTtcblxuICAgICAgICB2YXIgbXVzaWNGaWxlID0gQXRvbWljLmNhY2hlLmdldFJlc291cmNlKFwiU291bmRcIiwgdGhpcy5iYWNrZ3JvdW5kTXVzaWMpO1xuICAgICAgICBtdXNpY0ZpbGUubG9vcGVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIG11c2ljTm9kZSA9IHRoaXMubm9kZS5zY2VuZS5jcmVhdGVDaGlsZChcIk11c2ljTm9kZVwiKTtcbiAgICAgICAgdmFyIG11c2ljU291cmNlID0gbXVzaWNOb2RlLmNyZWF0ZUNvbXBvbmVudChcIlNvdW5kU291cmNlXCIpO1xuICAgICAgICBtdXNpY1NvdXJjZS5nYWluID0gMC41O1xuICAgICAgICBtdXNpY1NvdXJjZS5zb3VuZFR5cGUgPSBBdG9taWMuU09VTkRfTVVTSUM7XG4gICAgICAgIG11c2ljU291cmNlLnBsYXkobXVzaWNGaWxlKTtcbiAgICB9XG5cbiAgICByYW5kb20obWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbiAgICB9XG5cbiAgICBzcGF3bkJ1bGxldChwb3MsIGJsdWVwcmludCkge1xuICAgICAgICBpZiAodHlwZW9mIChibHVlcHJpbnQpID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgYmx1ZXByaW50ID0gYmx1ZXByaW50TGliLmdldEJsdWVwcmludChibHVlcHJpbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgYmx1ZXByaW50TGliLmNyZWF0ZUNoaWxkQXRQb3NpdGlvbih0aGlzLm5vZGUuc2NlbmUsIGJsdWVwcmludCwgcG9zKTtcbiAgICB9XG5cbiAgICByZW1vdmVFbmVteShlbmVteSkge1xuXG4gICAgICAgIHRoaXMuc2NvcmUgKz0gMTA7XG4gICAgICAgIHRoaXMuZW5lbWllcy5zcGxpY2UodGhpcy5lbmVtaWVzLmluZGV4T2YoZW5lbXkpLCAxKTtcblxuXG4gICAgICAgIC8vIENIQU5HRUQhIEZvciB0aGUgZXZlbnQgc3lzdGVtIHRvIHdvcmssIHdlIG5lZWQgdG8gc2NoZWR1bGUgdGhpcyB0byBnZXQgZGVsZXRlZCBvbiB0aGUgbmV4dCB1cGRhdGVcbiAgICAgICAgZGVsZXRlUXVldWUucHVzaChlbmVteS5ub2RlKTtcblxuICAgICAgICAvLyBGSVhNRVxuICAgICAgICAvL25vZGUuSFVELnVwZGF0ZVNjb3JlKHNjb3JlKTtcbiAgICB9XG5cbiAgICBjYXBpdGFsU2hpcERlc3Ryb3llZCgpIHtcbiAgICAgICAgdGhpcy5zY29yZSArPSAxMDAwO1xuICAgICAgICBkZWxldGVRdWV1ZS5wdXNoKHRoaXMuY2FwaXRhbFNoaXBOb2RlKTtcblxuICAgICAgICB0aGlzLmNhcGl0YWxTaGlwTm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMubm9kZS5IVUQudXBkYXRlU2NvcmUodGhpcy5zY29yZSk7XG4gICAgfVxuXG4gICAgc3Bhd25TcGFjZSgpIHtcbiAgICAgICAgdmFyIHNwYWNlTm9kZSA9IGJsdWVwcmludExpYi5jcmVhdGVDaGlsZCh0aGlzLm5vZGUuc2NlbmUsICdiYWNrZ3JvdW5kJyk7XG4gICAgfVxuXG4gICAgc3Bhd25FbmVtaWVzKCkge1xuICAgICAgICB0aGlzLmNhcGl0YWxTaGlwTm9kZSA9IGJsdWVwcmludExpYi5jcmVhdGVDaGlsZEF0UG9zaXRpb24odGhpcy5ub2RlLnNjZW5lLCAnY2FwaXRhbFNoaXAnLCBbLTQsIHRoaXMuaGFsZkhlaWdodCAtIDFdKTtcblxuICAgICAgICB2YXIgcG9zID0gWzAsIDBdO1xuICAgICAgICBwb3NbMV0gPSB0aGlzLmhhbGZIZWlnaHQgLSAyLjU7XG5cbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCAzOyB5KyspIHtcbiAgICAgICAgICAgIHBvc1swXSA9IC00LjU7XG5cbiAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgMTI7IHgrKykge1xuICAgICAgICAgICAgICAgIHZhciBlbmVteU5vZGUgPSBibHVlcHJpbnRMaWIuY3JlYXRlQ2hpbGRBdFBvc2l0aW9uKHRoaXMuZW5lbXlCYXNlTm9kZSxcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSA8IDAuODUgPyAnc3BhY2VzaGlwX2xvdXNlJyA6ICdzcGFjZXNoaXBfc2NhcmFiJywgW3Bvc1swXSwgcG9zWzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmVtaWVzLnB1c2goZW5lbXlOb2RlLkVuZW15KTtcblxuICAgICAgICAgICAgICAgIHBvc1swXSArPSAwLjc1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcG9zWzFdIC09IDAuNzU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVFbmVtaWVzKHRpbWVTdGVwKSB7XG5cbiAgICAgICAgaWYgKCF0aGlzLmVuZW15QmFzZURpcikge1xuICAgICAgICAgICAgdGhpcy5lbmVteUJhc2VQb3NYICs9IHRpbWVTdGVwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbmVteUJhc2VQb3NYIC09IHRpbWVTdGVwO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHh2YWx1ZSA9IDI7XG5cbiAgICAgICAgaWYgKHRoaXMuZW5lbXlCYXNlUG9zWCA+IHh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5lbmVteUJhc2VQb3NYID0geHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5lbmVteUJhc2VEaXIgPSAhdGhpcy5lbmVteUJhc2VEaXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5lbmVteUJhc2VQb3NYIDwgLXh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5lbmVteUJhc2VQb3NYID0gLXh2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuZW5lbXlCYXNlRGlyID0gIXRoaXMuZW5lbXlCYXNlRGlyO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbmVteUJhc2VOb2RlLnBvc2l0aW9uMkQgPSBbdGhpcy5lbmVteUJhc2VQb3NYLCAwXTtcbiAgICB9XG5cbiAgICB3aW4oKSB7XG4gICAgICAgIHRoaXMubm9kZS5IVUQudXBkYXRlR2FtZVRleHQoXCJZT1UgV0lOISEhIVwiKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgfVxuXG4gICAgbG9zZSgpIHtcbiAgICAgICAgdGhpcy5ub2RlLkhVRC51cGRhdGVHYW1lVGV4dChcIllPVSBMT1NFISEhIVwiKTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgfVxuXG4gICAgc3Bhd25QbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucGxheWVyTm9kZSA9IGJsdWVwcmludExpYi5jcmVhdGVDaGlsZCh0aGlzLm5vZGUuc2NlbmUsICdwbGF5ZXInKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB0aGlzLnBsYXllck5vZGUuUGxheWVyO1xuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lU3RlcCkge1xuICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IGRlbGV0ZVF1ZXVlLmxlbmd0aDsgeCsrKSB7XG4gICAgICAgICAgICBBdG9taWMuZGVzdHJveShkZWxldGVRdWV1ZS5wb3AoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVFbmVtaWVzKHRpbWVTdGVwKTtcbiAgICB9XG59XG4iXX0=