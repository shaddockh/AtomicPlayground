'use strict';
"atomic component";

module.exports.component = function (self) {
    var node = self.node;

    var inspectorFields = {
        spriteSheet: null,
        spriteName: null,
        blendMode: Atomic.BLEND_ALPHA,
        orderInLayer: 0,
    };

    /**
     * Perform any setup required before the first start iteration
     */
    // add a sprite component to our node
    var sprite2D = node.Sprite2D = node.createComponent("StaticSprite2D");
    sprite2D.blendMode = self.blendMode;
    sprite2D.orderInLayer = self.orderInLayer;

    var sheet = Atomic.cache.getResource("SpriteSheet2D", self.spriteSheet);
    if (self.spriteName) {
        sprite2D.sprite = sheet.getSprite(self.spriteName);
    }

};
