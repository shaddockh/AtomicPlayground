'use strict';
"atomic component";

var game = Atomic.game;
var node = self.node;

var defaultBlueprint = {
    spriteSheet: null,
    spriteName: null,
    spriteTexture: null,
    blendMode: Atomic.BLEND_ALPHA,
    orderInLayer: 0,
    scale: [1,1]
};

// Initialize the blueprint here for elements that need to happen prior to start
var blueprint = node.getComponentBlueprint(self, defaultBlueprint);
/**
 * Perform any setup required before the first start iteration
 */
(function () {
    // add a sprite component to our node
    var sprite2D = node.Sprite2D = node.createComponent("StaticSprite2D");
    sprite2D.blendMode = blueprint.blendMode;
    sprite2D.orderInLayer = blueprint.orderInLayer;

    // are we a spritesheet or a sprite texture
    if (blueprint.spriteSheet) {
        var sheet = game.getSpriteSheet(blueprint.spriteSheet);
        if (blueprint.spriteName) {
            sprite2D.sprite = sheet.getSprite(blueprint.spriteName);
        }
    }

    if (blueprint.spriteTexture) {
        sprite2D.sprite = game.getSprite2D(blueprint.spriteTexture);
    }

    node.scale2D = blueprint.scale;

}());
