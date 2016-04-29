'use strict';
"atomic component";

module.exports.component = function (self) {
    var node = self.node;
    var cache = Atomic.cache;
    var boomSound = cache.getResource("Sound", "Sounds/boom" + Math.round(Math.random(0, 1)) + ".wav");

    var sprites = [];
    var frame = 0;
    var frameTime = 0;

    var inspectorFields = {
        spriteSheet: ''
    };

    // using start to initialize the script component
    self.start = function start() {
        //TODO: I don't think this will work well..may need to have another type of component
        var expSheet = cache.getResource("SpriteSheet2D", self.spriteSheet);
        var i = Math.round(Math.random() * 7);
        for (var j = 0; j < 16; j++) {
            sprites.push(expSheet.getSprite(i + "_" + j));
        }

        node.getComponent('StaticSprite2D').sprite = sprites[0];
        //node.position2D = node.Position.spawnPosition;
        self.soundSource = node.createComponent("SoundSource");
        self.soundSource.soundType = Atomic.SOUND_EFFECT;
        self.soundSource.play(boomSound);
    };

    // update function called per frame with delta time
    self.update = function update(timeStep) {
        frameTime += timeStep;
        if (frameTime > 0.05) {
            frameTime = 0;
            frame++;
            if (frame === 16) {
                Atomic.destroy(node);
                return;
            }
            node.getComponent('StaticSprite2D').sprite = sprites[frame];
        }
    };
};
