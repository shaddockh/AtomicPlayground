'use strict';
'atomic component';

var inspectorFields = {
    spriteSheet: null,
    spriteName: null,
    spriteTexture: null,
    blendMode: Atomic.BLEND_ALPHA,
    orderInLayer: 0,
    scale: [1, 1],
    debug: false
};

module.exports = function (self) {

    var game = Atomic.game;
    var node = self.node;

    // Initialize the blueprint here for elements that need to happen prior to start
    var blueprint = node.getComponentBlueprint(self, inspectorFields);
    /**
     * Perform any setup required before the first start iteration
     */
    (function () {
        // add a sprite component to our node
        var sprite2D = node.StaticSprite2D = node.createComponent("StaticSprite2D");
        sprite2D.blendMode = blueprint.blendMode;
        sprite2D.orderInLayer = blueprint.orderInLayer;

        // are we a spritesheet or a sprite texture
        if (blueprint.spriteSheet) {
            if (blueprint.debug) { console.log('Aspect.spriteSheet: '  + blueprint.spriteSheet); }
            var sheet = game.getSpriteSheet(blueprint.spriteSheet);
            if (blueprint.spriteName) {
                if (blueprint.debug) { console.log('Aspect.spriteName: '  + blueprint.spriteName); }
                sprite2D.sprite = sheet.getSprite(blueprint.spriteName);
            }
        }

        if (blueprint.spriteTexture) {
            if (blueprint.debug) { console.log('Aspect.spriteTexture: '  + blueprint.spriteTexture); }
            sprite2D.sprite = game.getSprite2D(blueprint.spriteTexture);
        }

        node.scale2D = blueprint.scale;
    }());
};
