'use strict';
'atomic component';

var cache = Atomic.cache;
var sprites = [];

export default class Explosion extends Atomic.JSComponent {

    inspectorFields = {
        spriteSheet: ''
    };

    // using start to initialize the script component
    start() {
        this.frame = 0;
        this.frameTime = 0;
        if (sprites.length === 0) {
            // first time cache
            const expSheet = cache.getResource("SpriteSheet2D", this.spriteSheet);
            const i = Math.round(Math.random() * 7);
            for (let j = 0; j < 16; j++) {
                sprites.push(expSheet.getSprite(i + "_" + j));
            }
        }

        this.node.getComponent('StaticSprite2D').sprite = sprites[0];
        //node.position2D = node.Position.spawnPosition;
        const boomSound = cache.getResource("Sound", "Sounds/boom" + Math.round(Math.random(0, 1)) + ".wav");
        this.soundSource = this.node.createComponent("SoundSource");
        this.soundSource.soundType = Atomic.SOUND_EFFECT;
        this.soundSource.play(boomSound);
    }

    // update function called per frame with delta time
    update(timeStep) {
        this.frameTime += timeStep;
        if (this.frameTime > 0.05) {
            this.frameTime = 0;
            this.frame++;
            if (this.frame === 16) {
                Atomic.destroy(this.node);
                return;
            }
            this.node.getComponent('StaticSprite2D').sprite = sprites[this.frame];
        }
    }
}
