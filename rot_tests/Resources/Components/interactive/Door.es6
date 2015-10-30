'use strict';
'atomic component';
import * as triggerEvent from 'atomicTriggerEvent';
//import { nodeBuilder } from 'atomic-blueprintLib';
//import MapData from 'MapData';

import CustomJSComponent from 'CustomJSComponent';
export default class Door extends CustomJSComponent {

    inspectorFields = {
        debug: false,
        open: false,
        openSprite: ['Sprite2D', 'Sprites/door_ns_o.png'],
        closedSprite: ['Sprite2D', 'Sprites/door_ns_c.png'],
        openSound: ['Sound', 'Sounds/doorOpen_1.ogg'],
        closeSound: ['Sound']
    };

    start() {
        this.sprite2D = this.node.getComponent('StaticSprite2D');
        this.entity = this.node.getJSComponent('Entity');
        this.updateState();
    }

    updateState() {
        // delay because the body component may be added later
        if (!this.body) {
            this.body = this.node.getComponent('RigidBody2D');
        }

        if (this.open) {
            this.sprite2D.sprite = Atomic.cache.getResource('Sprite2D', this.openSprite);
            this.entity.blocksLight = false;
            this.entity.blocksPath = false;
            this.entity.bumpable = false;
            if (this.body) {
                this.body.castShadows = false;
                this.body.enabled = false;
            }
        } else {
            this.sprite2D.sprite = Atomic.cache.getResource('Sprite2D', this.closedSprite);
            this.entity.blocksLight = true;
            this.entity.blocksPath = true;
            this.entity.bumpable = true;
            if (this.body) {
                this.body.castShadows = true;
                this.body.enabled = true;
            }
        }
    }

    onBump(bumperComponent /*, bumperNode*/ ) {
        this.DEBUG(`Bumped by: ${bumperComponent.node.name} `);
        if (!this.open) {
            this.DEBUG('Door opened.');
            this.open = true;
            this.updateState();
            triggerEvent.trigger(this.node, 'onOpen');
            triggerEvent.trigger(bumperComponent.node, 'onActionComplete');

            if (this.openSound) {
                let soundSource = this.node.createComponent("SoundSource");
                soundSource.soundType = Atomic.SOUND_EFFECT;
                soundSource.gain = 0.75;
                let sound = Atomic.cache.getResource("Sound", this.openSound);
                soundSource.play(sound);
                soundSource.setAutoRemove(true);
            }
        }
    }

}
