'use strict';
'atomic component';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Star = function (_Atomic$JSComponent) {
    _inherits(Star, _Atomic$JSComponent);

    function Star() {
        var _Object$getPrototypeO;

        var _temp, _this, _ret;

        _classCallCheck(this, Star);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Star)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.inspectorFields = {
            speed: 100
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    // Inspector fields will show up in the Atomic Editor scene view to allow editing


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
}(Atomic.JSComponent);

module.exports = Star;