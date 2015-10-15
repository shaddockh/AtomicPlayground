'atomic component';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Star = (function (_Atomic$JSComponent) {
    _inherits(Star, _Atomic$JSComponent);

    function Star() {
        _classCallCheck(this, Star);

        _get(Object.getPrototypeOf(Star.prototype), 'constructor', this).apply(this, arguments);

        this.inspectorFields = {
            speed: 100
        };
    }

    _createClass(Star, [{
        key: 'start',

        // Start will be called when component is instantiated
        value: function start() {
            console.log(this.speed);
        }

        // Update will be called every cycle
    }, {
        key: 'update',
        value: function update(timeStep) {
            this.node.roll(timeStep * this.speed);
        }
    }]);

    return Star;
})(Atomic.JSComponent);

exports['default'] = Star;
module.exports = exports['default'];

// Inspector fields will show up in the Atomic Editor scene view to allow editing
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN0YXIuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7OztJQUVFLElBQUk7Y0FBSixJQUFJOzthQUFKLElBQUk7OEJBQUosSUFBSTs7bUNBQUosSUFBSTs7YUFHckIsZUFBZSxHQUFHO0FBQ2QsaUJBQUssRUFBRSxHQUFHO1NBQ2I7OztpQkFMZ0IsSUFBSTs7OztlQVFoQixpQkFBRztBQUNKLG1CQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjs7Ozs7ZUFHSyxnQkFBQyxRQUFRLEVBQUU7QUFDYixnQkFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6Qzs7O1dBZmdCLElBQUk7R0FBUyxNQUFNLENBQUMsV0FBVzs7cUJBQS9CLElBQUkiLCJmaWxlIjoiU3Rhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIidhdG9taWMgY29tcG9uZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhciBleHRlbmRzIEF0b21pYy5KU0NvbXBvbmVudCB7XG5cbiAgICAvLyBJbnNwZWN0b3IgZmllbGRzIHdpbGwgc2hvdyB1cCBpbiB0aGUgQXRvbWljIEVkaXRvciBzY2VuZSB2aWV3IHRvIGFsbG93IGVkaXRpbmdcbiAgICBpbnNwZWN0b3JGaWVsZHMgPSB7XG4gICAgICAgIHNwZWVkOiAxMDAsXG4gICAgfTtcblxuICAgIC8vIFN0YXJ0IHdpbGwgYmUgY2FsbGVkIHdoZW4gY29tcG9uZW50IGlzIGluc3RhbnRpYXRlZFxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNwZWVkKTtcbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgd2lsbCBiZSBjYWxsZWQgZXZlcnkgY3ljbGVcbiAgICB1cGRhdGUodGltZVN0ZXApIHtcbiAgICAgICAgdGhpcy5ub2RlLnJvbGwodGltZVN0ZXAgKiB0aGlzLnNwZWVkKTtcbiAgICB9XG59XG4iXX0=