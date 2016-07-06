'use strict';
'atomic component';
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
class EventSound extends CustomJSComponent {
    inspectorFields = {
        debug: false,
        eventMessage01: [Atomic.VAR_STRING],
        eventSound01: ['Sound'],
        eventMessage02: [Atomic.VAR_STRING],
        eventSound02: ['Sound'],
        eventMessage03: [Atomic.VAR_STRING],
        eventSound03: ['Sound'],
        eventMessage04: [Atomic.VAR_STRING],
        eventSound04: ['Sound'],
    };

    private soundSource: Atomic.SoundSource;
    eventMessage01: string;
    eventSound01: Atomic.Sound;
    eventMessage02: string;
    eventSound02: Atomic.Sound;
    eventMessage03: string;
    eventSound03: Atomic.Sound;
    eventMessage04: string;
    eventSound04: Atomic.Sound;
    eventMap = {};

    private mapEventToMap(eventMessage: string, eventSound: Atomic.Sound) {
        if (eventMessage) {
            this.eventMap[eventMessage] = eventSound;
        }
    }

    start() {
        this.soundSource = this.node.createComponent<Atomic.SoundSource>('SoundSource');
        //this.soundSource.soundType = Atomic.SOUND_EFFECT;
        this.soundSource.gain = 0.75;
        this.mapEventToMap(this.eventMessage01, this.eventSound01);
        this.mapEventToMap(this.eventMessage02, this.eventSound02);
        this.mapEventToMap(this.eventMessage03, this.eventSound03);
        this.mapEventToMap(this.eventMessage04, this.eventSound04);
    }

    onAny(eventName) {
        let sound = this.eventMap[eventName];
        if (sound) {
            this.DEBUG(`Playing sound for event: ${eventName}`);
            this.soundSource.play(sound);
        }
    }
}
export = EventSound;
