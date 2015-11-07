'use strict';
"atomic component";
import CustomJSComponent from 'CustomJSComponent';
//import * as triggerEvent from 'atomicTriggerEvent';

/*
 * This component will listen for an event and play the mapped sound.  You must
 * use the trigger method in the atomicTriggerEvent and send the appropriate event name.
 * this component listens to all events on a node and only responds when there is a match.
 * eventMap example:
 * @example
 * eventMap: {
 *   onOpen: 'Sounds/customsound.ogg'
 *   onClose: 'Sounds/customsound2.ogg'
 * }
 */
export default class EventSound extends CustomJSComponent {
    inspectorFields = {
        debug: false,

        life: 1,
        eventMap: {}
    };

    start() {
        this.soundSource = this.node.createComponent("SoundSource");
        this.soundSource.soundType = Atomic.SOUND_EFFECT;
        this.soundSource.gain = 0.75;
    }

    onAny(eventName) {
        let soundName = this.eventMap[eventName];
        if (soundName) {
            this.DEBUG(`Playing sound: ${soundName}`);
            let sound = Atomic.cache.getResource("Sound", soundName);
            this.soundSource.play(sound);
        }
    }
}
