'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var triggerEvent = require('atomicTriggerEvent');
var CustomJSComponent_1 = require('../../Modules/CustomJSComponent');
var Door = (function (_super) {
    __extends(Door, _super);
    function Door() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: false,
            open: false,
            openSprite: ['Sprite2D', 'Sprites/door_ns_o.png'],
            closedSprite: ['Sprite2D', 'Sprites/door_ns_c.png'],
            openSound: ['Sound', 'Sounds/doorOpen_1.ogg'],
            closeSound: ['Sound', '']
        };
        this.entity = null;
        this.open = false;
        this.openSprite = null;
        this.closedSprite = null;
        this.openSound = null;
        this.closeSound = null;
    }
    Door.prototype.start = function () {
        this.sprite2D = this.node.getComponent('StaticSprite2D');
        this.entity = this.node.getJSComponent('Entity');
        this.updateState();
    };
    Door.prototype.updateState = function () {
        // delay because the body component may be added later
        if (!this.body) {
            this.body = this.node.getComponent('RigidBody2D');
        }
        if (this.open) {
            this.sprite2D.sprite = this.openSprite; //this.resolve2DResource(this.openSprite);
            this.entity.blocksLight = false;
            this.entity.blocksPath = false;
            this.entity.bumpable = false;
            if (this.body) {
                this.body.castShadows = false;
                this.body.enabled = false;
            }
        }
        else {
            this.sprite2D.sprite = this.closedSprite; //this.resolve2DResource(this.closedSprite);
            this.entity.blocksLight = true;
            this.entity.blocksPath = true;
            this.entity.bumpable = true;
            if (this.body) {
                this.body.castShadows = true;
                this.body.enabled = true;
            }
        }
    };
    Door.prototype.onBump = function (bumperComponent /*, bumperNode*/) {
        this.DEBUG("Bumped by: " + bumperComponent.node.name + " ");
        if (!this.open) {
            this.DEBUG('Door opened.');
            this.open = true;
            this.updateState();
            triggerEvent.trigger(this.node, 'onOpen');
            triggerEvent.trigger(bumperComponent.node, 'onActionComplete');
            if (this.openSound) {
                var soundSource = this.node.createComponent('SoundSource');
                // TODO no Atomic.SOUND_EFFECT
                //soundSource.soundType = Atomic.SOUND_EFFECT;
                soundSource.gain = 0.75;
                var sound = this.openSound; //Atomic.cache.getResource<Atomic.Sound>('Sound', this.openSound);
                soundSource.play(sound);
                soundSource.setAutoRemove(true);
            }
        }
    };
    return Door;
}(CustomJSComponent_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Door;
