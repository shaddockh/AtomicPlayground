'use strict';
"atomic component";

//export default class SpriteSheet extends Atomic.JSComponent {
export default class SpriteSheet extends Atomic.JSComponent {

    inspectorFields = {
        spriteSheet: null,
        spriteName: null,
        blendMode: Atomic.BLEND_ALPHA,
        orderInLayer: 0,
        debug: true
    };

    start() {
        /**
         * Perform any setup required before the first start iteration
         */
        // add a sprite component to our node
        const sprite2D = this.node.Sprite2D = this.node.createComponent("StaticSprite2D");
        sprite2D.blendMode = this.blendMode;
        sprite2D.orderInLayer = this.orderInLayer;

        this.DEBUG(`Loading spritesheet ${this.spriteSheet}`);
        const sheet = Atomic.cache.getResource("SpriteSheet2D", this.spriteSheet);
        if (this.spriteName) {
            sprite2D.sprite = sheet.getSprite(this.spriteName);
        }
    }

    DEBUG(msg) {
        if (this.debug) {
            console.log(`Spritesheet: ${msg}`);
        }
    }
}
