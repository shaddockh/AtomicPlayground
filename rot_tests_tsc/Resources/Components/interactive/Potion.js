'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var triggerEvent = require('atomicTriggerEvent');
//import { nodeBuilder } from 'atomic-blueprintLib';
//import MapData from 'MapData';
var CustomJSComponent_1 = require('CustomJSComponent');
var Potion = (function (_super) {
    __extends(Potion, _super);
    function Potion() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: false,
            addHealth: 0,
            drinkSound: ['Sound'],
            drinkMessage: 'You feel healthier!'
        };
        this.addHealth = 0;
    }
    Potion.prototype.onBump = function (bumperComponent, bumperNode) {
        this.DEBUG("Bumped by: " + bumperComponent.node.name + " ");
        if (this.addHealth !== 0) {
            triggerEvent.trigger(bumperNode, 'onAdjustHealth', this.addHealth);
        }
        if (this.drinkSound) {
            var soundSource = this.node.createComponent('SoundSource');
            // TODO: Atomic.SOUND_EFFECT is undefined
            // soundSource.soundType = Atomic.SOUND_EFFECT;
            soundSource.gain = 0.75;
            var sound = Atomic.cache.getResource('Sound', this.drinkSound);
            soundSource.play(sound);
            soundSource.setAutoRemove(true);
        }
        // Not sure how to make a sprite invisible, so just make it too small to see
        this.node.scale2D = [0, 0];
        triggerEvent.trigger(bumperNode, 'onLogAction', this.drinkMessage);
    };
    Potion.prototype.update = function () {
        var soundSource = this.node.getComponent('SoundSource');
        if (soundSource) {
            if (!soundSource.isPlaying()) {
                triggerEvent.trigger(this.node, 'onDestroy');
                Atomic.destroy(this.node);
            }
        }
    };
    return Potion;
})(CustomJSComponent_1.default);
module.exports = Potion;
