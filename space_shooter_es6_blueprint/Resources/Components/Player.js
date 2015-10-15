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

'use strict';
"atomic component";

var input = Atomic.input;
var SpaceGame = Globals.SpaceGame;

var Player = (function (_Atomic$JSComponent) {
    _inherits(Player, _Atomic$JSComponent);

    function Player() {
        _classCallCheck(this, Player);

        _get(Object.getPrototypeOf(Player.prototype), 'constructor', this).apply(this, arguments);

        this.inspectorFields = {
            allowMove: true,
            allowShoot: true,
            shootDelta: 0,
            sprite: 'spaceship_mantis',
            bulletBlueprint: 'playerBullet'
        };
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
})(Atomic.JSComponent);

exports['default'] = Player;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,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QUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDdEUsbUJBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUM7YUFDbkI7O0FBRUQsZ0JBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUU7QUFDbkMsbUJBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2FBQ3JDOztBQUVELGdCQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtBQUNsQyxtQkFBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2FBQ3BDOztBQUVELGdCQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7U0FFOUI7OztlQUVLLGdCQUFDLFFBQVEsRUFBRTs7QUFFYixnQkFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ2pCLG9CQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzdCOztBQUVELGdCQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDaEIsb0JBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDM0I7U0FDSjs7O1dBbkZnQixNQUFNO0dBQVMsTUFBTSxDQUFDLFdBQVc7O3FCQUFqQyxNQUFNIiwiZmlsZSI6IlBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblwiYXRvbWljIGNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgYmx1ZXByaW50TGliIGZyb20gJ2JsdWVwcmludExpYic7XG5cbmNvbnN0IGlucHV0ID0gQXRvbWljLmlucHV0O1xuY29uc3QgU3BhY2VHYW1lID0gR2xvYmFscy5TcGFjZUdhbWU7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBBdG9taWMuSlNDb21wb25lbnQge1xuXG4gICAgaW5zcGVjdG9yRmllbGRzID0ge1xuICAgICAgICBhbGxvd01vdmU6IHRydWUsXG4gICAgICAgIGFsbG93U2hvb3Q6IHRydWUsXG4gICAgICAgIHNob290RGVsdGE6IDAsXG4gICAgICAgIHNwcml0ZTogJ3NwYWNlc2hpcF9tYW50aXMnLFxuICAgICAgICBidWxsZXRCbHVlcHJpbnQ6ICdwbGF5ZXJCdWxsZXQnXG4gICAgfTtcblxuICAgIC8vIHVzaW5nIHN0YXJ0IHRvIGluaXRpYWxpemUgdGhlIHNjcmlwdCBjb21wb25lbnRcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uMkQgPSBbMCwgLVNwYWNlR2FtZS5oYWxmSGVpZ2h0ICsgMV07XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9FdmVudCgnb25QbGF5ZXJIaXQnLCB0aGlzLm9uSGl0KTtcbiAgICB9XG5cbiAgICBvbkhpdChwb3MpIHtcbiAgICAgICAgYmx1ZXByaW50TGliLmNyZWF0ZUNoaWxkQXRQb3NpdGlvbih0aGlzLm5vZGUuc2NlbmUsICdleHBsb3Npb24nLCBwb3MpO1xuICAgICAgICBTcGFjZUdhbWUubm9kZS5IVUQudXBkYXRlSGVhbHRoKHRoaXMubm9kZS5IZWFsdGguaGVhbHRoKTtcbiAgICB9XG5cbiAgICBvbkRpZSgpIHtcbiAgICAgICAgU3BhY2VHYW1lLmxvc2UoKTtcbiAgICB9XG5cbiAgICBkb1Nob290aW5nKHRpbWVTdGVwKSB7XG4gICAgICAgIGlmICh0aGlzLnNob290RGVsdGEgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNob290RGVsdGEgLT0gdGltZVN0ZXA7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG9vdERlbHRhIDwgMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvb3REZWx0YSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlucHV0LmdldEtleURvd24oQXRvbWljLktFWV9XKSAmJiAhaW5wdXQuZ2V0S2V5RG93bihBdG9taWMuS0VZX1VQKSAmJiAhaW5wdXQuZ2V0S2V5RG93bihBdG9taWMuS0VZX1NQQUNFKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG9vdERlbHRhID0gMC4xNTtcblxuICAgICAgICB2YXIgcG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uMkQ7XG4gICAgICAgIHBvc1sxXSArPSAwLjU7XG5cbiAgICAgICAgU3BhY2VHYW1lLnNwYXduQnVsbGV0KHBvcywgdGhpcy5idWxsZXRCbHVlcHJpbnQpO1xuICAgIH1cblxuICAgIG1vdmVTaGlwKHRpbWVTdGVwKSB7XG4gICAgICAgIHZhciBzcGVlZCA9IDMuMCAqIHRpbWVTdGVwO1xuXG4gICAgICAgIHZhciBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb24yRDtcblxuICAgICAgICB2YXIgbGVmdCA9IGZhbHNlO1xuICAgICAgICB2YXIgcmlnaHQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoaW5wdXQuZ2V0S2V5RG93bihBdG9taWMuS0VZX0EpIHx8IGlucHV0LmdldEtleURvd24oQXRvbWljLktFWV9MRUZUKSkge1xuICAgICAgICAgICAgcG9zWzBdIC09IHNwZWVkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlucHV0LmdldEtleURvd24oQXRvbWljLktFWV9EKSB8fCBpbnB1dC5nZXRLZXlEb3duKEF0b21pYy5LRVlfUklHSFQpKSB7XG4gICAgICAgICAgICBwb3NbMF0gKz0gc3BlZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zWzBdIDwgLVNwYWNlR2FtZS5oYWxmV2lkdGggKyAyKSB7XG4gICAgICAgICAgICBwb3NbMF0gPSAtU3BhY2VHYW1lLmhhbGZXaWR0aCArIDI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zWzBdID4gU3BhY2VHYW1lLmhhbGZXaWR0aCAtIDIpIHtcbiAgICAgICAgICAgIHBvc1swXSA9IFNwYWNlR2FtZS5oYWxmV2lkdGggLSAyO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uMkQgPSBwb3M7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUodGltZVN0ZXApIHtcblxuICAgICAgICBpZiAodGhpcy5hbGxvd1Nob290KSB7XG4gICAgICAgICAgICB0aGlzLmRvU2hvb3RpbmcodGltZVN0ZXApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuYWxsb3dNb3ZlKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVTaGlwKHRpbWVTdGVwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==