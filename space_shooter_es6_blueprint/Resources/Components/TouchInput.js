'use strict';
'atomic component';
// Atomic Component

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var input = Atomic.input;

var TouchInput = (function (_Atomic$JSComponent) {
    _inherits(TouchInput, _Atomic$JSComponent);

    function TouchInput() {
        _classCallCheck(this, TouchInput);

        _get(Object.getPrototypeOf(TouchInput.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(TouchInput, [{
        key: 'start',
        value: function start() {
            // input.setTouchEmulation(true);
            var layout = Atomic.cache.getResource("XMLFile", "Data/ScreenJoystick.xml");
            var uiStyle = Atomic.cache.getResource("XMLFile", "UI/DefaultStyle.xml");
            input.addScreenJoystick(layout, uiStyle);
        }
    }]);

    return TouchInput;
})(Atomic.JSComponent);

exports['default'] = TouchInput;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvdWNoSW5wdXQuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLGtCQUFrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFHbkIsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQzs7SUFDTixVQUFVO2NBQVYsVUFBVTs7YUFBVixVQUFVOzhCQUFWLFVBQVU7O21DQUFWLFVBQVU7OztpQkFBVixVQUFVOztlQUN0QixpQkFBRzs7QUFFSixnQkFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLHlCQUF5QixDQUFDLENBQUM7QUFDNUUsZ0JBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0FBQ3pFLGlCQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzVDOzs7V0FOZ0IsVUFBVTtHQUFTLE1BQU0sQ0FBQyxXQUFXOztxQkFBckMsVUFBVSIsImZpbGUiOiJUb3VjaElucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuJ2F0b21pYyBjb21wb25lbnQnO1xuLy8gQXRvbWljIENvbXBvbmVudFxuXG5jb25zdCBpbnB1dCA9IEF0b21pYy5pbnB1dDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvdWNoSW5wdXQgZXh0ZW5kcyBBdG9taWMuSlNDb21wb25lbnQge1xuICAgIHN0YXJ0KCkge1xuICAgICAgICAvLyBpbnB1dC5zZXRUb3VjaEVtdWxhdGlvbih0cnVlKTtcbiAgICAgICAgdmFyIGxheW91dCA9IEF0b21pYy5jYWNoZS5nZXRSZXNvdXJjZShcIlhNTEZpbGVcIiwgXCJEYXRhL1NjcmVlbkpveXN0aWNrLnhtbFwiKTtcbiAgICAgICAgdmFyIHVpU3R5bGUgPSBBdG9taWMuY2FjaGUuZ2V0UmVzb3VyY2UoXCJYTUxGaWxlXCIsIFwiVUkvRGVmYXVsdFN0eWxlLnhtbFwiKTtcbiAgICAgICAgaW5wdXQuYWRkU2NyZWVuSm95c3RpY2sobGF5b3V0LCB1aVN0eWxlKTtcbiAgICB9XG59XG4iXX0=