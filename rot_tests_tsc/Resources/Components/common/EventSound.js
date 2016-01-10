'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CustomJSComponent_1 = require('CustomJSComponent');
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
var EventSound = (function (_super) {
    __extends(EventSound, _super);
    function EventSound() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: false,
            life: 1,
            eventMap: {}
        };
        this.eventMap = {};
    }
    EventSound.prototype.start = function () {
        this.soundSource = this.node.createComponent('SoundSource');
        //this.soundSource.soundType = Atomic.SOUND_EFFECT;
        this.soundSource.gain = 0.75;
    };
    EventSound.prototype.onAny = function (eventName) {
        var soundName = this.eventMap[eventName];
        if (soundName) {
            this.DEBUG("Playing sound: " + soundName);
            var sound = Atomic.cache.getResource('Sound', soundName);
            this.soundSource.play(sound);
        }
    };
    return EventSound;
}(CustomJSComponent_1.default));
module.exports = EventSound;
