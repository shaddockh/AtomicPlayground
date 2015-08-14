'use strict';
'atomic component';

var inspectorFields = {
    spriteSheet: "",
    spriteName: "",
    spriteTexture: "",
    blendMode: Atomic.BLEND_ALPHA,
    orderInLayer: 0,
    scale: [Atomic.VAR_VECTOR2 , [1, 1]],
    debug: false
};

module.exports = function (self) {

    var game = Atomic.game;
    var node = self.node;

    /**
     * Perform any setup required before the first update
     */
    self.start = function () {
        self.debug = true;
        // add a sprite component to our node
        var sprite2D = node.StaticSprite2D = node.createComponent("StaticSprite2D");
        sprite2D.blendMode = self.blendMode;
        sprite2D.orderInLayer = self.orderInLayer || 0;

        // are we a spritesheet or a sprite texture
        if (self.spriteSheet !== "") {
            if (self.debug) {
                console.log('Aspect.spriteSheet: ' + self.spriteSheet);
            }
            var sheet = game.getSpriteSheet(self.spriteSheet);
            if (self.spriteName !== "") {
                if (self.debug) {
                    console.log('Aspect.spriteName: ' + self.spriteName);
                }
                sprite2D.sprite = sheet.getSprite(self.spriteName);
            }
        }

        if (self.spriteTexture !== "") {
            if (self.debug) {
                console.log('Aspect.spriteTexture: ' + self.spriteTexture);
            }
            sprite2D.sprite = game.getSprite2D(self.spriteTexture);
        }

        node.scale2D = self.scale;
    };
};
