Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _atomicTriggerEvent = require('atomicTriggerEvent');

var triggerEvent = _interopRequireWildcard(_atomicTriggerEvent);

// Health component
'use strict';
'atomic component';

var SpaceGame = Globals.SpaceGame;

var Health = (function (_Atomic$JSComponent) {
    _inherits(Health, _Atomic$JSComponent);

    function Health() {
        _classCallCheck(this, Health);

        _get(Object.getPrototypeOf(Health.prototype), 'constructor', this).apply(this, arguments);

        this.inspectorFields = {
            health: 1
        };
    }

    _createClass(Health, [{
        key: 'onHit',

        // using start to initialize the script component
        //start() {}

        value: function onHit() {
            this.health--;
            if (this.health <= 0) {
                triggerEvent.trigger(this.node, 'onDie');
            }
            return true;
        }
    }]);

    return Health;
})(Atomic.JSComponent);

exports['default'] = Health;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhlYWx0aC5lczYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7a0NBSThCLG9CQUFvQjs7SUFBdEMsWUFBWTs7O0FBSHhCLFlBQVksQ0FBQztBQUNiLGtCQUFrQixDQUFDOztBQUluQixJQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDOztJQUNmLE1BQU07Y0FBTixNQUFNOzthQUFOLE1BQU07OEJBQU4sTUFBTTs7bUNBQU4sTUFBTTs7YUFFdkIsZUFBZSxHQUFHO0FBQ2Qsa0JBQU0sRUFBRSxDQUFDO1NBQ1o7OztpQkFKZ0IsTUFBTTs7Ozs7O2VBU2xCLGlCQUFHO0FBQ0osZ0JBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNkLGdCQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQ2xCLDRCQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDNUM7QUFDRCxtQkFBTyxJQUFJLENBQUM7U0FDZjs7O1dBZmdCLE1BQU07R0FBUyxNQUFNLENBQUMsV0FBVzs7cUJBQWpDLE1BQU0iLCJmaWxlIjoiSGVhbHRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVhbHRoIGNvbXBvbmVudFxuJ3VzZSBzdHJpY3QnO1xuJ2F0b21pYyBjb21wb25lbnQnO1xuXG5pbXBvcnQgKiBhcyB0cmlnZ2VyRXZlbnQgZnJvbSAnYXRvbWljVHJpZ2dlckV2ZW50JztcblxuY29uc3QgU3BhY2VHYW1lID0gR2xvYmFscy5TcGFjZUdhbWU7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFsdGggZXh0ZW5kcyBBdG9taWMuSlNDb21wb25lbnQge1xuXG4gICAgaW5zcGVjdG9yRmllbGRzID0ge1xuICAgICAgICBoZWFsdGg6IDEsXG4gICAgfTtcblxuICAgIC8vIHVzaW5nIHN0YXJ0IHRvIGluaXRpYWxpemUgdGhlIHNjcmlwdCBjb21wb25lbnRcbiAgICAvL3N0YXJ0KCkge31cblxuICAgIG9uSGl0KCkge1xuICAgICAgICB0aGlzLmhlYWx0aC0tO1xuICAgICAgICBpZiAodGhpcy5oZWFsdGggPD0gMCkge1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50LnRyaWdnZXIodGhpcy5ub2RlLCAnb25EaWUnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iXX0=