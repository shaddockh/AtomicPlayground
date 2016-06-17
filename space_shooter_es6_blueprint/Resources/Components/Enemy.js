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

var SpaceGame = _Globals2.default.SpaceGame;

var Enemy = function (_Atomic$JSComponent) {
    _inherits(Enemy, _Atomic$JSComponent);

    function Enemy() {
        _classCallCheck(this, Enemy);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Enemy).apply(this, arguments));
    }

    _createClass(Enemy, [{
        key: 'start',


        // using start to initialize the script component
        value: function start() {
            this.moveDelta = 0;
            this.dead = false;
            this.spawnPosition = this.node.position2D;
            this.node.roll(180);
            this.node.scale2D = [0.65, 0.65];

            this.dir = Math.random() > 0.5;

            this.subscribeToEvent('onEnemyHit', this.onHit);
        }
    }, {
        key: 'onDie',
        value: function onDie() {
            SpaceGame.removeEnemy(this);
        }
    }, {
        key: 'onHit',
        value: function onHit(pos) {
            // what's different?
            // in the original version, the following line worked, but now it causes the
            // explosion to appear somewhere way off from the node...like the sprite is not displayed where the 2d coord is.
            // switching it to use the passed in pos works, but it may be masking some bug somewhere.
            //EntityBuilder.createChildAtPosition(game.scene, 'explosion', node.worldPosition2D);
            blueprintLib.createChildAtPosition(this.node.scene, 'explosion', pos);
        }

        // update function called per frame with delta time

    }, {
        key: 'update',
        value: function update(timeStep) {
            if (Math.random() > 0.98) {
                this.dir = !this.dir;
            }

            this.moveDelta += this.dir ? timeStep * 4 : -timeStep * 4;

            var pos = [this.spawnPosition[0], this.spawnPosition[1]];
            pos[1] += Math.sin(this.moveDelta) * 0.1;
            this.node.position2D = pos;
        }
    }]);

    return Enemy;
}(Atomic.JSComponent);

module.exports = Enemy;