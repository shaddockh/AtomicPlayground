'use strict';
'atomic component';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Space = (function (_Atomic$JSComponent) {
    _inherits(Space, _Atomic$JSComponent);

    function Space() {
        _classCallCheck(this, Space);

        _get(Object.getPrototypeOf(Space.prototype), 'constructor', this).apply(this, arguments);

        this.inspectorFields = {
            speed: 0.75
        };
    }

    _createClass(Space, [{
        key: 'update',
        value: function update(timeStep) {
            this.node.translate([0, -timeStep * this.speed, 0]);
        }
    }]);

    return Space;
})(Atomic.JSComponent);

exports['default'] = Space;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwYWNlLmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUFFRSxLQUFLO2NBQUwsS0FBSzs7YUFBTCxLQUFLOzhCQUFMLEtBQUs7O21DQUFMLEtBQUs7O2FBRXRCLGVBQWUsR0FBRztBQUNkLGlCQUFLLEVBQUUsSUFBSTtTQUNkOzs7aUJBSmdCLEtBQUs7O2VBTWhCLGdCQUFDLFFBQVEsRUFBRTtBQUNiLGdCQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7OztXQVJnQixLQUFLO0dBQVMsTUFBTSxDQUFDLFdBQVc7O3FCQUFoQyxLQUFLIiwiZmlsZSI6IlNwYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuJ2F0b21pYyBjb21wb25lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGFjZSBleHRlbmRzIEF0b21pYy5KU0NvbXBvbmVudCB7XG5cbiAgICBpbnNwZWN0b3JGaWVsZHMgPSB7XG4gICAgICAgIHNwZWVkOiAwLjc1XG4gICAgfTtcblxuICAgIHVwZGF0ZSh0aW1lU3RlcCkge1xuICAgICAgICB0aGlzLm5vZGUudHJhbnNsYXRlKFswLCAtdGltZVN0ZXAgKiB0aGlzLnNwZWVkLCAwXSk7XG4gICAgfVxufVxuIl19