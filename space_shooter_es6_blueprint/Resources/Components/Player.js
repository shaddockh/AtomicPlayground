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
            //TODO: Fix
            //SpaceGame.node.HUD.updateHealth(this.node.Health.health);
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
//# sourceMappingURL=data:application/json;base64,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SUFBSSxLQUFLLENBQUM7YUFDbkI7O0FBRUQsZ0JBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUU7QUFDbkMsbUJBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2FBQ3JDOztBQUVELGdCQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBRTtBQUNsQyxtQkFBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2FBQ3BDOztBQUVELGdCQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7U0FFOUI7OztlQUVLLGdCQUFDLFFBQVEsRUFBRTs7QUFFYixnQkFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ2pCLG9CQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzdCOztBQUVELGdCQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDaEIsb0JBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDM0I7U0FDSjs7O1dBcEZnQixNQUFNO0dBQVMsTUFBTSxDQUFDLFdBQVc7O3FCQUFqQyxNQUFNIiwiZmlsZSI6IlBsYXllci5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblwiYXRvbWljIGNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgYmx1ZXByaW50TGliIGZyb20gJ2JsdWVwcmludExpYic7XG5cbmNvbnN0IGlucHV0ID0gQXRvbWljLmlucHV0O1xuY29uc3QgU3BhY2VHYW1lID0gR2xvYmFscy5TcGFjZUdhbWU7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBBdG9taWMuSlNDb21wb25lbnQge1xuXG4gICAgaW5zcGVjdG9yRmllbGRzID0ge1xuICAgICAgICBhbGxvd01vdmU6IHRydWUsXG4gICAgICAgIGFsbG93U2hvb3Q6IHRydWUsXG4gICAgICAgIHNob290RGVsdGE6IDAsXG4gICAgICAgIHNwcml0ZTogJ3NwYWNlc2hpcF9tYW50aXMnLFxuICAgICAgICBidWxsZXRCbHVlcHJpbnQ6ICdwbGF5ZXJCdWxsZXQnXG4gICAgfTtcblxuICAgIC8vIHVzaW5nIHN0YXJ0IHRvIGluaXRpYWxpemUgdGhlIHNjcmlwdCBjb21wb25lbnRcbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uMkQgPSBbMCwgLVNwYWNlR2FtZS5oYWxmSGVpZ2h0ICsgMV07XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlVG9FdmVudCgnb25QbGF5ZXJIaXQnLCB0aGlzLm9uSGl0KTtcbiAgICB9XG5cbiAgICBvbkhpdChwb3MpIHtcbiAgICAgICAgYmx1ZXByaW50TGliLmNyZWF0ZUNoaWxkQXRQb3NpdGlvbih0aGlzLm5vZGUuc2NlbmUsICdleHBsb3Npb24nLCBwb3MpO1xuICAgICAgICAvL1RPRE86IEZpeFxuICAgICAgICAvL1NwYWNlR2FtZS5ub2RlLkhVRC51cGRhdGVIZWFsdGgodGhpcy5ub2RlLkhlYWx0aC5oZWFsdGgpO1xuICAgIH1cblxuICAgIG9uRGllKCkge1xuICAgICAgICBTcGFjZUdhbWUubG9zZSgpO1xuICAgIH1cblxuICAgIGRvU2hvb3RpbmcodGltZVN0ZXApIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvb3REZWx0YSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2hvb3REZWx0YSAtPSB0aW1lU3RlcDtcbiAgICAgICAgICAgIGlmICh0aGlzLnNob290RGVsdGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG9vdERlbHRhID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaW5wdXQuZ2V0S2V5RG93bihBdG9taWMuS0VZX1cpICYmICFpbnB1dC5nZXRLZXlEb3duKEF0b21pYy5LRVlfVVApICYmICFpbnB1dC5nZXRLZXlEb3duKEF0b21pYy5LRVlfU1BBQ0UpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob290RGVsdGEgPSAwLjE1O1xuXG4gICAgICAgIHZhciBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb24yRDtcbiAgICAgICAgcG9zWzFdICs9IDAuNTtcblxuICAgICAgICBTcGFjZUdhbWUuc3Bhd25CdWxsZXQocG9zLCB0aGlzLmJ1bGxldEJsdWVwcmludCk7XG4gICAgfVxuXG4gICAgbW92ZVNoaXAodGltZVN0ZXApIHtcbiAgICAgICAgdmFyIHNwZWVkID0gMy4wICogdGltZVN0ZXA7XG5cbiAgICAgICAgdmFyIHBvcyA9IHRoaXMubm9kZS5wb3NpdGlvbjJEO1xuXG4gICAgICAgIHZhciBsZWZ0ID0gZmFsc2U7XG4gICAgICAgIHZhciByaWdodCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChpbnB1dC5nZXRLZXlEb3duKEF0b21pYy5LRVlfQSkgfHwgaW5wdXQuZ2V0S2V5RG93bihBdG9taWMuS0VZX0xFRlQpKSB7XG4gICAgICAgICAgICBwb3NbMF0gLT0gc3BlZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5wdXQuZ2V0S2V5RG93bihBdG9taWMuS0VZX0QpIHx8IGlucHV0LmdldEtleURvd24oQXRvbWljLktFWV9SSUdIVCkpIHtcbiAgICAgICAgICAgIHBvc1swXSArPSBzcGVlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NbMF0gPCAtU3BhY2VHYW1lLmhhbGZXaWR0aCArIDIpIHtcbiAgICAgICAgICAgIHBvc1swXSA9IC1TcGFjZUdhbWUuaGFsZldpZHRoICsgMjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NbMF0gPiBTcGFjZUdhbWUuaGFsZldpZHRoIC0gMikge1xuICAgICAgICAgICAgcG9zWzBdID0gU3BhY2VHYW1lLmhhbGZXaWR0aCAtIDI7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24yRCA9IHBvcztcblxuICAgIH1cblxuICAgIHVwZGF0ZSh0aW1lU3RlcCkge1xuXG4gICAgICAgIGlmICh0aGlzLmFsbG93U2hvb3QpIHtcbiAgICAgICAgICAgIHRoaXMuZG9TaG9vdGluZyh0aW1lU3RlcCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5hbGxvd01vdmUpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZVNoaXAodGltZVN0ZXApO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19