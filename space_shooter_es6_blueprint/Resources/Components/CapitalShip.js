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

var SpaceGame = _Globals2.default.SpaceGame;

var CapitalShip = function (_Atomic$JSComponent) {
    _inherits(CapitalShip, _Atomic$JSComponent);

    function CapitalShip() {
        _classCallCheck(this, CapitalShip);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(CapitalShip).apply(this, arguments));
    }

    _createClass(CapitalShip, [{
        key: 'start',


        // using start to initialize the script component
        value: function start() {
            this.node.roll(180);
        }
    }, {
        key: 'die',
        value: function die() {
            SpaceGame.capitalShipDestroyed();

            for (var i = 0; i < 16; i++) {
                var pos = this.node.position2D;
                pos[0] += SpaceGame.random(-2, 2);
                pos[1] += SpaceGame.random(-2, 2);

                var explosion = blueprintLib.createChildAtPosition(this.node.scene, 'explosion', pos);

                var randomSize = SpaceGame.random(4, 8);
                explosion.scale2D = [randomSize, randomSize];
            }
            SpaceGame.win();
        }
    }, {
        key: 'onDie',
        value: function onDie() {
            this.die();
        }
    }, {
        key: 'onHit',
        value: function onHit(pos) {
            blueprintLib.createChildAtPosition(this.node.scene, 'explosion', pos);
            var explosion = blueprintLib.createChildAtPosition(this.node.scene, 'explosion', pos);
            explosion.scale2D = [2.0, 2.0];
        }

        // update function called per frame with delta time

    }, {
        key: 'update',
        value: function update(timeStep) {}
    }]);

    return CapitalShip;
}(Atomic.JSComponent);

module.exports = CapitalShip;