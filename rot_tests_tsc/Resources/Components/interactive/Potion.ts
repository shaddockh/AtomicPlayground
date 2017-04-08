'use strict';
'atomic component';
import * as triggerEvent from 'atomicTriggerEvent';

import CustomJSComponent from 'CustomJSComponent';
export default class Potion extends CustomJSComponent {

    inspectorFields = {
        debug: false,
        addHealth: 0,
        drinkSound: ['Sound'],
        drinkMessage: 'You feel healthier!'
    };

    addHealth: number = 0;
    drinkSound: Atomic.Sound;
    drinkMessage: string;

    onBump(bumperComponent, bumperNode) {
        this.DEBUG(`Bumped by: ${bumperComponent.node.name} `);
        if (this.addHealth !== 0) {
            triggerEvent.trigger(bumperNode, 'onAdjustHealth', this.addHealth);
        }

        if (this.drinkSound) {
            let soundSource = this.node.createComponent<Atomic.SoundSource>('SoundSource');
            // TODO: Atomic.SOUND_EFFECT is undefined
            // soundSource.soundType = Atomic.SOUND_EFFECT;
            soundSource.gain = 0.75;
            let sound = this.drinkSound;
            soundSource.play(sound);
            soundSource.autoRemoveMode = Atomic.AutoRemoveMode.REMOVE_COMPONENT;
        }

        // Not sure how to make a sprite invisible, so just make it too small to see
        this.node.scale2D = [0, 0];
        triggerEvent.trigger(bumperNode, 'onLogAction', this.drinkMessage);
    }

    update(/* timeStep */) {
        let soundSource = this.node.getComponent<Atomic.SoundSource>('SoundSource');
        if (soundSource) {
            if (!soundSource.isPlaying()) {
                triggerEvent.trigger(this.node, 'onDestroy');
                Atomic.destroy(this.node);
            }
        }
    }
}
