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

var Enemty = (function (_Atomic$JSComponent) {
    _inherits(Enemty, _Atomic$JSComponent);

    function Enemty() {
        _classCallCheck(this, Enemty);

        _get(Object.getPrototypeOf(Enemty.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Enemty, [{
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

    return Enemty;
})(Atomic.JSComponent);

exports['default'] = Enemty;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVuZW15LmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs0QkFHOEIsY0FBYzs7SUFBaEMsWUFBWTs7QUFIeEIsWUFBWSxDQUFDO0FBQ2Isa0JBQWtCLENBQUM7O0FBSW5CLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7O0lBQ2YsTUFBTTtjQUFOLE1BQU07O2FBQU4sTUFBTTs4QkFBTixNQUFNOzttQ0FBTixNQUFNOzs7aUJBQU4sTUFBTTs7OztlQUdsQixpQkFBRztBQUNKLGdCQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUNuQixnQkFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7QUFDbEIsZ0JBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDMUMsZ0JBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BCLGdCQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzs7QUFFakMsZ0JBQUksQ0FBQyxHQUFHLEdBQUksSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQUFBQyxDQUFDOztBQUVqQyxnQkFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkQ7OztlQUVJLGlCQUFHO0FBQ0oscUJBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0I7OztlQUVJLGVBQUMsR0FBRyxFQUFFOzs7Ozs7QUFNUCx3QkFBWSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN6RTs7Ozs7ZUFHSyxnQkFBQyxRQUFRLEVBQUU7QUFDYixnQkFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxFQUFFO0FBQ3RCLG9CQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUN4Qjs7QUFFRCxnQkFBSSxDQUFDLFNBQVMsSUFBSyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxBQUFDLENBQUM7O0FBRTVELGdCQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pELGVBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDekMsZ0JBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztTQUM5Qjs7O1dBdkNnQixNQUFNO0dBQVMsTUFBTSxDQUFDLFdBQVc7O3FCQUFqQyxNQUFNIiwiZmlsZSI6IkVuZW15LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuJ2F0b21pYyBjb21wb25lbnQnO1xuXG5pbXBvcnQgKiBhcyBibHVlcHJpbnRMaWIgZnJvbSAnYmx1ZXByaW50TGliJztcblxuY29uc3QgU3BhY2VHYW1lID0gR2xvYmFscy5TcGFjZUdhbWU7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbmVtdHkgZXh0ZW5kcyBBdG9taWMuSlNDb21wb25lbnQge1xuXG4gICAgLy8gdXNpbmcgc3RhcnQgdG8gaW5pdGlhbGl6ZSB0aGUgc2NyaXB0IGNvbXBvbmVudFxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLm1vdmVEZWx0YSA9IDA7XG4gICAgICAgIHRoaXMuZGVhZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNwYXduUG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb24yRDtcbiAgICAgICAgdGhpcy5ub2RlLnJvbGwoMTgwKTtcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlMkQgPSBbMC42NSwgMC42NV07XG5cbiAgICAgICAgdGhpcy5kaXIgPSAoTWF0aC5yYW5kb20oKSA+IDAuNSk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpYmVUb0V2ZW50KCdvbkVuZW15SGl0JywgdGhpcy5vbkhpdCk7XG4gICAgfVxuXG4gICAgb25EaWUoKSB7XG4gICAgICAgIFNwYWNlR2FtZS5yZW1vdmVFbmVteSh0aGlzKTtcbiAgICB9XG5cbiAgICBvbkhpdChwb3MpIHtcbiAgICAgICAgLy8gd2hhdCdzIGRpZmZlcmVudD9cbiAgICAgICAgLy8gaW4gdGhlIG9yaWdpbmFsIHZlcnNpb24sIHRoZSBmb2xsb3dpbmcgbGluZSB3b3JrZWQsIGJ1dCBub3cgaXQgY2F1c2VzIHRoZVxuICAgICAgICAvLyBleHBsb3Npb24gdG8gYXBwZWFyIHNvbWV3aGVyZSB3YXkgb2ZmIGZyb20gdGhlIG5vZGUuLi5saWtlIHRoZSBzcHJpdGUgaXMgbm90IGRpc3BsYXllZCB3aGVyZSB0aGUgMmQgY29vcmQgaXMuXG4gICAgICAgIC8vIHN3aXRjaGluZyBpdCB0byB1c2UgdGhlIHBhc3NlZCBpbiBwb3Mgd29ya3MsIGJ1dCBpdCBtYXkgYmUgbWFza2luZyBzb21lIGJ1ZyBzb21ld2hlcmUuXG4gICAgICAgIC8vRW50aXR5QnVpbGRlci5jcmVhdGVDaGlsZEF0UG9zaXRpb24oZ2FtZS5zY2VuZSwgJ2V4cGxvc2lvbicsIG5vZGUud29ybGRQb3NpdGlvbjJEKTtcbiAgICAgICAgYmx1ZXByaW50TGliLmNyZWF0ZUNoaWxkQXRQb3NpdGlvbih0aGlzLm5vZGUuc2NlbmUsICdleHBsb3Npb24nLCBwb3MpO1xuICAgIH1cblxuICAgIC8vIHVwZGF0ZSBmdW5jdGlvbiBjYWxsZWQgcGVyIGZyYW1lIHdpdGggZGVsdGEgdGltZVxuICAgIHVwZGF0ZSh0aW1lU3RlcCkge1xuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuOTgpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyID0gIXRoaXMuZGlyO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb3ZlRGVsdGEgKz0gKHRoaXMuZGlyID8gdGltZVN0ZXAgKiA0IDogLXRpbWVTdGVwICogNCk7XG5cbiAgICAgICAgdmFyIHBvcyA9IFt0aGlzLnNwYXduUG9zaXRpb25bMF0sIHRoaXMuc3Bhd25Qb3NpdGlvblsxXV07XG4gICAgICAgIHBvc1sxXSArPSBNYXRoLnNpbih0aGlzLm1vdmVEZWx0YSkgKiAwLjE7XG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbjJEID0gcG9zO1xuICAgIH1cbn1cbiJdfQ==