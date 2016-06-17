'use strict';
"atomic component";

const inspectorFields = {
    spriteSheet: ["SpriteSheet2D"],
    spriteName: '',
    blendMode: Atomic.BLEND_ALPHA,
    orderInLayer: 0,
};

class SpriteSheet extends Atomic.JSComponent {

    start() {
        /**
         * Perform any setup required before the first start iteration
         */
        // add a sprite component to our node
        var sprite2D = this.node.Sprite2D = this.node.createComponent("StaticSprite2D");
        sprite2D.blendMode = this.blendMode;
        sprite2D.orderInLayer = this.orderInLayer;

        //var sheet = Atomic.cache.getResource("SpriteSheet2D", this.spriteSheet);
        if (this.spriteName) {
            sprite2D.sprite = this.spriteSheet.getSprite(this.spriteName);
        }
    }
}

module.exports = SpriteSheet;
