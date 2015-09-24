'use strict';
'atomic component';
import * as triggerEvent from 'atomicTriggerEvent';
//import { nodeBuilder } from 'atomic-blueprintLib';
//import MapData from 'MapData';

import CustomJSComponent from 'CustomJSComponent';
export default class Potion extends CustomJSComponent {

    inspectorFields = {
        debug: false,
        addHealth: 0,
        drinkSound: ['Sound']
    };

    start() {
    }

    onBump(bumperComponent, bumperNode) {
        this.DEBUG(`Bumped by: ${bumperComponent.node.name} `);
        if (this.addHealth !== 0) {
            triggerEvent.trigger(bumperNode, 'onAdjustHealth', this.addHealth);
        }

        if (this.drinkSound) {
            let soundSource = this.node.createComponent("SoundSource");
            soundSource.soundType = Atomic.SOUND_EFFECT;
            soundSource.gain = 0.75;
            let sound = Atomic.cache.getResource("Sound", this.drinkSound);
            soundSource.play(sound);
            soundSource.setAutoRemove(true);
        }

        triggerEvent.trigger(this.node, 'onDestroy');
        Atomic.destroy(this.node);
    }

}
