'use strict';
"atomic component";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpriteSheet = (function (_Atomic$JSComponent) {
    _inherits(SpriteSheet, _Atomic$JSComponent);

    function SpriteSheet() {
        _classCallCheck(this, SpriteSheet);

        _get(Object.getPrototypeOf(SpriteSheet.prototype), "constructor", this).apply(this, arguments);

        this.inspectorFields = {
            spriteSheet: null,
            spriteName: null,
            blendMode: Atomic.BLEND_ALPHA,
            orderInLayer: 0
        };
    }

    _createClass(SpriteSheet, [{
        key: "start",
        value: function start() {
            /**
             * Perform any setup required before the first start iteration
             */
            // add a sprite component to our node
            var sprite2D = this.node.Sprite2D = this.node.createComponent("StaticSprite2D");
            sprite2D.blendMode = this.blendMode;
            sprite2D.orderInLayer = this.orderInLayer;

            var sheet = Atomic.cache.getResource("SpriteSheet2D", this.spriteSheet);
            if (this.spriteName) {
                sprite2D.sprite = sheet.getSprite(this.spriteName);
            }
        }
    }]);

    return SpriteSheet;
})(Atomic.JSComponent);

exports["default"] = SpriteSheet;
module.exports = exports["default"];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwcml0ZVNoZWV0LmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7QUFDYixrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUFFRSxXQUFXO2NBQVgsV0FBVzs7YUFBWCxXQUFXOzhCQUFYLFdBQVc7O21DQUFYLFdBQVc7O2FBRTVCLGVBQWUsR0FBRztBQUNkLHVCQUFXLEVBQUUsSUFBSTtBQUNqQixzQkFBVSxFQUFFLElBQUk7QUFDaEIscUJBQVMsRUFBRSxNQUFNLENBQUMsV0FBVztBQUM3Qix3QkFBWSxFQUFFLENBQUM7U0FDbEI7OztpQkFQZ0IsV0FBVzs7ZUFTdkIsaUJBQUc7Ozs7O0FBS0osZ0JBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDaEYsb0JBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUNwQyxvQkFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDOztBQUUxQyxnQkFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN4RSxnQkFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQ2pCLHdCQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3REO1NBQ0o7OztXQXRCZ0IsV0FBVztHQUFTLE1BQU0sQ0FBQyxXQUFXOztxQkFBdEMsV0FBVyIsImZpbGUiOiJTcHJpdGVTaGVldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblwiYXRvbWljIGNvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcHJpdGVTaGVldCBleHRlbmRzIEF0b21pYy5KU0NvbXBvbmVudCB7XG5cbiAgICBpbnNwZWN0b3JGaWVsZHMgPSB7XG4gICAgICAgIHNwcml0ZVNoZWV0OiBudWxsLFxuICAgICAgICBzcHJpdGVOYW1lOiBudWxsLFxuICAgICAgICBibGVuZE1vZGU6IEF0b21pYy5CTEVORF9BTFBIQSxcbiAgICAgICAgb3JkZXJJbkxheWVyOiAwLFxuICAgIH07XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFBlcmZvcm0gYW55IHNldHVwIHJlcXVpcmVkIGJlZm9yZSB0aGUgZmlyc3Qgc3RhcnQgaXRlcmF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICAvLyBhZGQgYSBzcHJpdGUgY29tcG9uZW50IHRvIG91ciBub2RlXG4gICAgICAgIHZhciBzcHJpdGUyRCA9IHRoaXMubm9kZS5TcHJpdGUyRCA9IHRoaXMubm9kZS5jcmVhdGVDb21wb25lbnQoXCJTdGF0aWNTcHJpdGUyRFwiKTtcbiAgICAgICAgc3ByaXRlMkQuYmxlbmRNb2RlID0gdGhpcy5ibGVuZE1vZGU7XG4gICAgICAgIHNwcml0ZTJELm9yZGVySW5MYXllciA9IHRoaXMub3JkZXJJbkxheWVyO1xuXG4gICAgICAgIHZhciBzaGVldCA9IEF0b21pYy5jYWNoZS5nZXRSZXNvdXJjZShcIlNwcml0ZVNoZWV0MkRcIiwgdGhpcy5zcHJpdGVTaGVldCk7XG4gICAgICAgIGlmICh0aGlzLnNwcml0ZU5hbWUpIHtcbiAgICAgICAgICAgIHNwcml0ZTJELnNwcml0ZSA9IHNoZWV0LmdldFNwcml0ZSh0aGlzLnNwcml0ZU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19