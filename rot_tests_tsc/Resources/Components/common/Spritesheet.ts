'use strict';
'atomic component';

import CustomJSComponent from '../../Modules/CustomJSComponent';
export default class SpriteSheet extends CustomJSComponent {
    inspectorFields = {
        debug: false,
        spriteSheet: null,
        spriteName: null
    };
    spriteSheet:string = null;
    spriteName:string = null;

    start() {
        /**
         * Perform any setup required before the first start iteration
         */
        // see if we have a sprite on our node..if not create one
        const sprite2D = this.node.getOrCreateComponent<Atomic.StaticSprite2D>('StaticSprite2D');
        this.DEBUG(`Loading spritesheet ${this.spriteSheet}`);
        const sheet = Atomic.cache.getResource<Atomic.SpriteSheet2D>('SpriteSheet2D', this.spriteSheet);
        if (this.spriteName) {
            sprite2D.sprite = sheet.getSprite(this.spriteName);
        }
    }
}
