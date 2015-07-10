'use strict';
import {default as TWEEN, Tween, Easing} from 'tween.js';

const game = Atomic.game;
const node = self.node;

function start() {
	const sprite2D = node.createComponent("StaticSprite2D");
	sprite2D.sprite = game.getSprite2D("Sprites/star.png");
	sprite2D.blendMode = Atomic.BLEND_ALPHA;
	
    const tween = new Tween({ x: -1, y: -1 })
        .to({ x: 1, y: 1 }, 2000)
        .easing(Easing.Elastic.InOut)
        .onUpdate(function() { 
            node.setPosition2D([this.x, this.y]);
        })
        .start(0);
}

function update(timeStep) {	
    TWEEN.update(Atomic.totalTime * 1000);
}
