'use strict';
'atomic component';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CustomJSComponent_1 = require("CustomJSComponent");
var SpriteSheet = (function (_super) {
    __extends(SpriteSheet, _super);
    function SpriteSheet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inspectorFields = {
            debug: false,
            spriteSheet: [Atomic.VariantType.VAR_STRING],
            spriteName: [Atomic.VariantType.VAR_STRING]
        };
        _this.spriteSheet = null;
        _this.spriteName = null;
        return _this;
    }
    SpriteSheet.prototype.start = function () {
        /**
         * Perform any setup required before the first start iteration
         */
        // see if we have a sprite on our node..if not create one
        var sprite2D = this.node.getOrCreateComponent('StaticSprite2D');
        this.DEBUG("Loading spritesheet " + this.spriteSheet);
        var sheet = Atomic.cache.getResource('SpriteSheet2D', this.spriteSheet);
        if (this.spriteName) {
            sprite2D.sprite = sheet.getSprite(this.spriteName);
        }
    };
    return SpriteSheet;
}(CustomJSComponent_1.default));
exports.default = SpriteSheet;
