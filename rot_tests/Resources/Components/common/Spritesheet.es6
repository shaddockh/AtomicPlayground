'use strict';
"atomic component";

import CustomJSComponent from 'CustomJSComponent';
export default class SpriteSheet extends CustomJSComponent {
    inspectorFields = {
        debug: false,
        spriteSheet: null,
        spriteName: null
    };

    start() {
        /**
         * Perform any setup required before the first start iteration
         */
        // see if we have a sprite on our node..if not create one
        const sprite2D = this.node.getOrCreateComponent('StaticSprite2D');
        this.DEBUG(`Loading spritesheet ${this.spriteSheet}`);
        const sheet = Atomic.cache.getResource("SpriteSheet2D", this.spriteSheet);
        if (this.spriteName) {
            sprite2D.sprite = sheet.getSprite(this.spriteName);
        }
    }
}
