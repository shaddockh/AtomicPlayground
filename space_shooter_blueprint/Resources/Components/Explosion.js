'use strict';

var game = Atomic.game;
var node = self.node;
var cache = game.cache;
var boomSound = cache.getResource("Sound", "Sounds/boom" + Math.round(Math.random(0, 1)) + ".wav");

var sprites = [];
var frame = 0;
var frameTime = 0;

var defaultBlueprint = {};
// Initialize the blueprint here for elements that need to happen prior to start
var blueprint = node.getComponentBlueprint(self, defaultBlueprint);
/**
 * Perform any setup required before the first start iteration
 */
(function() {
    //TODO: I don't think this will work well..may need to have another type of component
    var expSheet = cache.getResource("SpriteSheet2D", node.blueprint.Aspect.spriteSheet);
    var i = Math.round(Math.random() * 7);
    for (var j = 0; j < 16; j++) {
        sprites.push(expSheet.getSprite(i + "_" + j));
    }
}());

// using start to initialize the script component
function start() {
    node.Sprite2D.orderInLayer = 200;
    node.Sprite2D.sprite = sprites[0];
    //node.position2D = node.Position.spawnPosition;
    node.scale2D = [1.5, 1.5];
    self.soundSource = node.createComponent("SoundSource");
    self.soundSource.soundType = Atomic.SOUND_EFFECT;
    self.soundSource.play(boomSound);
}

// update function called per frame with delta time
function update(timeStep) {

    frameTime += timeStep;
    if (frameTime > 0.05) {
        frameTime = 0;
        frame++;
        if (frame === 16) {
            Atomic.destroy(node);
            return;
        }
        node.Sprite2D.sprite = sprites[frame];
    }

}
