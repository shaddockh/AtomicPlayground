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
'atomic component';

var SpaceGame = Globals.SpaceGame;

var AI = (function (_Atomic$JSComponent) {
    _inherits(AI, _Atomic$JSComponent);

    function AI() {
        _classCallCheck(this, AI);

        _get(Object.getPrototypeOf(AI.prototype), 'constructor', this).apply(this, arguments);

        this.inspectorFields = {
            canMove: false,
            allowShoot: false,
            bulletBlueprint: 'enemyBullet'
        };
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
})(Atomic.JSComponent);

exports['default'] = AI;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFJLmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs0QkFFOEIsY0FBYzs7SUFBaEMsWUFBWTs7QUFGeEIsWUFBWSxDQUFDO0FBQ2Isa0JBQWtCLENBQUM7O0FBR25CLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7O0lBRWYsRUFBRTtjQUFGLEVBQUU7O2FBQUYsRUFBRTs4QkFBRixFQUFFOzttQ0FBRixFQUFFOzthQUVuQixlQUFlLEdBQUc7QUFDZCxtQkFBTyxFQUFFLEtBQUs7QUFDZCxzQkFBVSxFQUFFLEtBQUs7QUFDakIsMkJBQWUsRUFBRSxhQUFhO1NBQ2pDOzs7aUJBTmdCLEVBQUU7O2VBUWIsZ0JBQUMsUUFBUSxFQUFFOztBQUViLGdCQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUU7QUFDcEIsdUJBQU87YUFDVjs7QUFFRCxnQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7QUFDcEMsZ0JBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDOztBQUVoRCxnQkFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2Qsb0JBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFO0FBQ25DLHdCQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDbEIsMkJBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO3FCQUM3QixNQUFNO0FBQ0gsMkJBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO3FCQUM3QjtBQUNELHdCQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7aUJBQzlCO2FBQ0o7O0FBRUQsZ0JBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7QUFDckIsb0JBQUksQ0FBQyxVQUFVLElBQUksUUFBUSxDQUFDO0FBQzVCLG9CQUFJLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxFQUFFO0FBQ3JCLHdCQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztpQkFDdkI7QUFDRCx1QkFBTzthQUNWOztBQUVELGdCQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRTtBQUNuQyxvQkFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFDdEIsb0JBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRTtBQUNyQiwyQkFBTztpQkFDVjtBQUNELG9CQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztBQUNyQyxvQkFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUNoQix5QkFBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2FBQ3JEO1NBQ0o7OztXQTdDZ0IsRUFBRTtHQUFTLE1BQU0sQ0FBQyxXQUFXOztxQkFBN0IsRUFBRSIsImZpbGUiOiJBSS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbidhdG9taWMgY29tcG9uZW50JztcbmltcG9ydCAqIGFzIGJsdWVwcmludExpYiBmcm9tICdibHVlcHJpbnRMaWInO1xuXG5jb25zdCBTcGFjZUdhbWUgPSBHbG9iYWxzLlNwYWNlR2FtZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQUkgZXh0ZW5kcyBBdG9taWMuSlNDb21wb25lbnQge1xuXG4gICAgaW5zcGVjdG9yRmllbGRzID0ge1xuICAgICAgICBjYW5Nb3ZlOiBmYWxzZSxcbiAgICAgICAgYWxsb3dTaG9vdDogZmFsc2UsXG4gICAgICAgIGJ1bGxldEJsdWVwcmludDogJ2VuZW15QnVsbGV0J1xuICAgIH07XG5cbiAgICB1cGRhdGUodGltZVN0ZXApIHtcblxuICAgICAgICBpZiAoU3BhY2VHYW1lLmdhbWVPdmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcG9zID0gdGhpcy5ub2RlLndvcmxkUG9zaXRpb24yRDtcbiAgICAgICAgdmFyIHBwb3MgPSBTcGFjZUdhbWUucGxheWVyTm9kZS53b3JsZFBvc2l0aW9uMkQ7XG5cbiAgICAgICAgaWYgKHRoaXMuY2FuTW92ZSkge1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKHBvc1swXSAtIHBwb3NbMF0pID4gMC4yNSkge1xuICAgICAgICAgICAgICAgIGlmIChwb3NbMF0gPCBwcG9zWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc1swXSArPSB0aW1lU3RlcCAqIDAuOTU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zWzBdIC09IHRpbWVTdGVwICogMC45NTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uMkQgPSBwb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zaG9vdERlbHRhID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zaG9vdERlbHRhIC09IHRpbWVTdGVwO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hvb3REZWx0YSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob290RGVsdGEgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHBvc1swXSAtIHBwb3NbMF0pIDwgMC4yNSkge1xuICAgICAgICAgICAgdGhpcy5zaG9vdERlbHRhID0gMC41O1xuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcG9zMiA9IHRoaXMubm9kZS53b3JsZFBvc2l0aW9uMkQ7XG4gICAgICAgICAgICBwb3MyWzFdIC09IDAuMjU7XG4gICAgICAgICAgICBTcGFjZUdhbWUuc3Bhd25CdWxsZXQocG9zMiwgdGhpcy5idWxsZXRCbHVlcHJpbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19