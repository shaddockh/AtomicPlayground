'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CustomJSComponent_1 = require('CustomJSComponent');
var SpriteSheet = (function (_super) {
    __extends(SpriteSheet, _super);
    function SpriteSheet() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: false,
            spriteSheet: [Atomic.VAR_STRING],
            spriteName: [Atomic.VAR_STRING]
        };
        this.spriteSheet = null;
        this.spriteName = null;
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
module.exports = SpriteSheet;
