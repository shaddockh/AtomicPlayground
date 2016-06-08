'use strict';
"atomic component";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpriteSheet = function (_Atomic$JSComponent) {
    _inherits(SpriteSheet, _Atomic$JSComponent);

    function SpriteSheet() {
        _classCallCheck(this, SpriteSheet);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SpriteSheet).apply(this, arguments));
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
}(Atomic.JSComponent);

SpriteSheet.inspectorFields = {
    spriteSheet: null,
    spriteName: null,
    blendMode: Atomic.BLEND_ALPHA,
    orderInLayer: 0
};


module.exports = SpriteSheet;