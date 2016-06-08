'use strict';
"atomic component";

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

var input = Atomic.input;
var SpaceGame = _Globals2.default.SpaceGame;

var Player = function (_Atomic$JSComponent) {
    _inherits(Player, _Atomic$JSComponent);

    function Player() {
        _classCallCheck(this, Player);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Player).apply(this, arguments));
    }

    _createClass(Player, [{
        key: 'start',


        // using start to initialize the script component
        value: function start() {
            this.node.position2D = [0, -SpaceGame.halfHeight + 1];
            this.subscribeToEvent('onPlayerHit', this.onHit);
        }
    }, {
        key: 'onHit',
        value: function onHit(pos) {
            blueprintLib.createChildAtPosition(this.node.scene, 'explosion', pos);
            SpaceGame.node.HUD.updateHealth(this.node.Health.health);
        }
    }, {
        key: 'onDie',
        value: function onDie() {
            SpaceGame.lose();
        }
    }, {
        key: 'doShooting',
        value: function doShooting(timeStep) {
            if (this.shootDelta > 0) {
                this.shootDelta -= timeStep;
                if (this.shootDelta < 0) {
                    this.shootDelta = 0;
                }
                return;
            }

            if (!input.getKeyDown(Atomic.KEY_W) && !input.getKeyDown(Atomic.KEY_UP) && !input.getKeyDown(Atomic.KEY_SPACE)) {
                return;
            }

            this.shootDelta = 0.15;

            var pos = this.node.position2D;
            pos[1] += 0.5;

            SpaceGame.spawnBullet(pos, this.bulletBlueprint);
        }
    }, {
        key: 'moveShip',
        value: function moveShip(timeStep) {
            var speed = 3.0 * timeStep;

            var pos = this.node.position2D;

            var left = false;
            var right = false;

            if (input.getKeyDown(Atomic.KEY_A) || input.getKeyDown(Atomic.KEY_LEFT)) {
                pos[0] -= speed;
            }

            if (input.getKeyDown(Atomic.KEY_D) || input.getKeyDown(Atomic.KEY_RIGHT)) {
                pos[0] += speed;
            }

            if (pos[0] < -SpaceGame.halfWidth + 2) {
                pos[0] = -SpaceGame.halfWidth + 2;
            }

            if (pos[0] > SpaceGame.halfWidth - 2) {
                pos[0] = SpaceGame.halfWidth - 2;
            }

            this.node.position2D = pos;
        }
    }, {
        key: 'update',
        value: function update(timeStep) {

            if (this.allowShoot) {
                this.doShooting(timeStep);
            }

            if (this.allowMove) {
                this.moveShip(timeStep);
            }
        }
    }]);

    return Player;
}(Atomic.JSComponent);

Player.inspectorFields = {
    allowMove: true,
    allowShoot: true,
    shootDelta: 0,
    sprite: 'spaceship_mantis',
    bulletBlueprint: 'playerBullet'
};


module.exports = Player;