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

var inspectorFields = {
    canMove: false,
    allowShoot: false,
    bulletBlueprint: 'enemyBullet'
};

var AI = function (_Atomic$JSComponent) {
    _inherits(AI, _Atomic$JSComponent);

    function AI() {
        _classCallCheck(this, AI);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AI).apply(this, arguments));
    }

    _createClass(AI, [{
        key: 'update',
        value: function update(timeStep) {

            if (SpaceGame.gameOver) {
                return;
            }

            var pos = this.node.worldPosition2D;
            var ppos = SpaceGame.playerNode.worldPosition2D;

            if (this.canMove) {
                if (Math.abs(pos[0] - ppos[0]) > 0.25) {
                    if (pos[0] < ppos[0]) {
                        pos[0] += timeStep * 0.95;
                    } else {
                        pos[0] -= timeStep * 0.95;
                    }
                    this.node.position2D = pos;
                }
            }

            if (this.shootDelta > 0) {
                this.shootDelta -= timeStep;
                if (this.shootDelta < 0) {
                    this.shootDelta = 0;
                }
                return;
            }

            if (Math.abs(pos[0] - ppos[0]) < 0.25) {
                this.shootDelta = 0.5;
                if (Math.random() > 0.1) {
                    return;
                }
                var pos2 = this.node.worldPosition2D;
                pos2[1] -= 0.25;
                SpaceGame.spawnBullet(pos2, this.bulletBlueprint);
            }
        }
    }]);

    return AI;
}(Atomic.JSComponent);

module.exports = AI;