'use strict';
'atomic component';

import { default as TWEEN, Tween, Easing } from 'tween.js';

export default class Star extends Atomic.JSComponent {

     // Called when the component is instantiated
    start() {
        var node = this.node;
        const sprite2D = node.createComponent("StaticSprite2D");
        sprite2D.sprite = Atomic.cache.getResource("Sprite2D", "Sprites/star.png");
        sprite2D.blendMode = Atomic.BLEND_ALPHA;

        const tween = new Tween({ x: -1, y: -1 }) 
            .to({ x: 1, y: 1 }, 2000)
            .easing(Easing.Elastic.InOut)
            .onUpdate(function () {
                node.setPosition2D([this.x, this.y]);
            })
            .start(0);
    }


    // called every frame
    update(timeStep) {
        TWEEN.update(Atomic.totalTime * 1000);
    }
}
