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

var SpaceGame = Globals.SpaceGame;

var CapitalShip = (function (_Atomic$JSComponent) {
    _inherits(CapitalShip, _Atomic$JSComponent);

    function CapitalShip() {
        _classCallCheck(this, CapitalShip);

        _get(Object.getPrototypeOf(CapitalShip.prototype), 'constructor', this).apply(this, arguments);
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
})(Atomic.JSComponent);

exports['default'] = CapitalShip;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNhcGl0YWxTaGlwLmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs0QkFHOEIsY0FBYzs7SUFBaEMsWUFBWTs7QUFIeEIsWUFBWSxDQUFDO0FBQ2Isa0JBQWtCLENBQUM7O0FBSW5CLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7O0lBQ2YsV0FBVztjQUFYLFdBQVc7O2FBQVgsV0FBVzs4QkFBWCxXQUFXOzttQ0FBWCxXQUFXOzs7aUJBQVgsV0FBVzs7OztlQUd2QixpQkFBRztBQUNKLGdCQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2Qjs7O2VBRUUsZUFBRztBQUNGLHFCQUFTLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzs7QUFFakMsaUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDekIsb0JBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQy9CLG1CQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsQyxtQkFBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7O0FBRWxDLG9CQUFJLFNBQVMsR0FBRyxZQUFZLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztBQUV0RixvQkFBSSxVQUFVLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEMseUJBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDaEQ7QUFDRCxxQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ25COzs7ZUFFSSxpQkFBRztBQUNKLGdCQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDZDs7O2VBRUksZUFBQyxHQUFHLEVBQUU7QUFDUCx3QkFBWSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0RSxnQkFBSSxTQUFTLEdBQUcsWUFBWSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0RixxQkFBUyxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNsQzs7Ozs7ZUFHSyxnQkFBQyxRQUFRLEVBQUUsRUFFaEI7OztXQXBDZ0IsV0FBVztHQUFTLE1BQU0sQ0FBQyxXQUFXOztxQkFBdEMsV0FBVyIsImZpbGUiOiJDYXBpdGFsU2hpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblwiYXRvbWljIGNvbXBvbmVudFwiO1xuXG5pbXBvcnQgKiBhcyBibHVlcHJpbnRMaWIgZnJvbSAnYmx1ZXByaW50TGliJztcblxuY29uc3QgU3BhY2VHYW1lID0gR2xvYmFscy5TcGFjZUdhbWU7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXBpdGFsU2hpcCBleHRlbmRzIEF0b21pYy5KU0NvbXBvbmVudCB7XG5cbiAgICAvLyB1c2luZyBzdGFydCB0byBpbml0aWFsaXplIHRoZSBzY3JpcHQgY29tcG9uZW50XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5yb2xsKDE4MCk7XG4gICAgfVxuXG4gICAgZGllKCkge1xuICAgICAgICBTcGFjZUdhbWUuY2FwaXRhbFNoaXBEZXN0cm95ZWQoKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLm5vZGUucG9zaXRpb24yRDtcbiAgICAgICAgICAgIHBvc1swXSArPSBTcGFjZUdhbWUucmFuZG9tKC0yLCAyKTtcbiAgICAgICAgICAgIHBvc1sxXSArPSBTcGFjZUdhbWUucmFuZG9tKC0yLCAyKTtcblxuICAgICAgICAgICAgdmFyIGV4cGxvc2lvbiA9IGJsdWVwcmludExpYi5jcmVhdGVDaGlsZEF0UG9zaXRpb24odGhpcy5ub2RlLnNjZW5lLCAnZXhwbG9zaW9uJywgcG9zKTtcblxuICAgICAgICAgICAgdmFyIHJhbmRvbVNpemUgPSBTcGFjZUdhbWUucmFuZG9tKDQsIDgpO1xuICAgICAgICAgICAgZXhwbG9zaW9uLnNjYWxlMkQgPSBbcmFuZG9tU2l6ZSwgcmFuZG9tU2l6ZV07XG4gICAgICAgIH1cbiAgICAgICAgU3BhY2VHYW1lLndpbigpO1xuICAgIH1cblxuICAgIG9uRGllKCkge1xuICAgICAgICB0aGlzLmRpZSgpO1xuICAgIH1cblxuICAgIG9uSGl0KHBvcykge1xuICAgICAgICBibHVlcHJpbnRMaWIuY3JlYXRlQ2hpbGRBdFBvc2l0aW9uKHRoaXMubm9kZS5zY2VuZSwgJ2V4cGxvc2lvbicsIHBvcyk7XG4gICAgICAgIHZhciBleHBsb3Npb24gPSBibHVlcHJpbnRMaWIuY3JlYXRlQ2hpbGRBdFBvc2l0aW9uKHRoaXMubm9kZS5zY2VuZSwgJ2V4cGxvc2lvbicsIHBvcyk7XG4gICAgICAgIGV4cGxvc2lvbi5zY2FsZTJEID0gWzIuMCwgMi4wXTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgZnVuY3Rpb24gY2FsbGVkIHBlciBmcmFtZSB3aXRoIGRlbHRhIHRpbWVcbiAgICB1cGRhdGUodGltZVN0ZXApIHtcblxuICAgIH1cbn1cbiJdfQ==