'use strict';
'atomic component';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _atomicTriggerEvent = require('atomicTriggerEvent');

var triggerEvent = _interopRequireWildcard(_atomicTriggerEvent);

var _Globals = require('Globals');

var _Globals2 = _interopRequireDefault(_Globals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpaceGame = _Globals2.default.SpaceGame;

var Bullet = function (_Atomic$JSComponent) {
    _inherits(Bullet, _Atomic$JSComponent);

    function Bullet() {
        _classCallCheck(this, Bullet);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Bullet).apply(this, arguments));
    }

    _createClass(Bullet, [{
        key: 'start',
        value: function start() {
            this.laserSound = Atomic.cache.getResource("Sound", this.laserSound);
            this.soundSource = this.node.createComponent("SoundSource");
            this.soundSource.soundType = Atomic.SOUND_EFFECT;
            this.soundSource.gain = 0.75;
            if (!this.isPlayer) {
                this.node.roll(180);
            }
            this.soundSource.play(this.laserSound);
        }
    }, {
        key: 'updateEnemyBullet',
        value: function updateEnemyBullet() {

            var bpos = this.node.position2D;

            // off the bottom of the screen
            if (bpos[1] < -SpaceGame.halfHeight) {
                return true;
            }

            if (SpaceGame.player) {

                var epos = SpaceGame.player.node.worldPosition2D;

                if (Math.abs(epos[0] - bpos[0]) < 0.25 && Math.abs(epos[1] - bpos[1]) < 0.25) {

                    // Need to come back to the event system later..not working as expected.
                    //SpaceGame.player.node.sendEvent('onPlayerHit', { x: bpos[0], y: bpos[1] });
                    triggerEvent.trigger(SpaceGame.player.node, 'onHit', bpos);

                    return true;
                }
            }
        }
    }, {
        key: 'updatePlayerBullet',
        value: function updatePlayerBullet() {

            var bpos = this.node.position2D;

            // off the top of the screen
            if (bpos[1] > SpaceGame.halfHeight) {
                return true;
            }

            // Manually checking for collisions
            for (var i = 0; i < SpaceGame.enemies.length; i++) {

                var enemy = SpaceGame.enemies[i];
                var epos = enemy.node.worldPosition2D;

                if (Math.abs(epos[0] - bpos[0]) < 0.25 && Math.abs(epos[1] - bpos[1]) < 0.25) {

                    // Need to come back to the event system later..not working as expected.
                    //enemy.node.sendEvent('onEnemyHit', bpos);
                    triggerEvent.trigger(enemy.node, 'onHit', bpos);
                    return true;
                }
            }

            if (SpaceGame.capitalShipNode) {
                var epos2 = SpaceGame.capitalShipNode.worldPosition2D;

                if (Math.abs(epos2[0] - bpos[0]) < 0.75 && Math.abs(epos2[1] - bpos[1]) < 0.75) {

                    // Need to come back to the event system later..not working as expected.
                    //SpaceGame.capitalShipNode.sendEvent('onHit', bpos);
                    triggerEvent.trigger(SpaceGame.capitalShipNode, 'onHit', bpos);
                    return true;
                }
            }
        }
    }, {
        key: 'update',
        value: function update(timeStep) {

            var speed = this.speed * timeStep;
            this.node.translate2D([0, speed]);

            if (this.isPlayer) {
                if (this.updatePlayerBullet()) {
                    Atomic.destroy(this.node);
                }
            } else {
                if (this.updateEnemyBullet()) {
                    Atomic.destroy(this.node);
                }
            }
        }
    }]);

    return Bullet;
}(Atomic.JSComponent);

Bullet.inspectorFields = {
    isPlayer: false,
    laserSound: '',
    speed: 5
};


module.exports = Bullet;