'use strict';
'atomic component';
//import * as triggerEvent from 'atomicTriggerEvent';
//import { nodeBuilder } from 'atomic-blueprintLib';
//import MapData from 'MapData';

export default class Door extends Atomic.JSComponent {

    inspectorFields = {
        debug: false,
        open: false,
        openSprite: 'Sprites/door_ns_o.png',
        closedSprite: 'Sprites/door_ns_c.png'
    };

    start() {
        this.sprite2D = this.node.getComponent('StaticSprite2D');
        this.body = this.node.getComponent('RigidBody2D');
        this.entity = this.node.getJSComponent('Entity');
        this.updateState();
    }

    updateState() {
        if (this.open) {
            this.sprite2D.sprite = Atomic.cache.getResource('Sprite2D', this.openSprite);
            this.body.castShadows = false;
            this.entity.blocksLight = false;
            this.entity.blocksPath = false;
            this.entity.bumpable = false;
            this.body.enabled = false;
        } else {
            this.sprite2D.sprite = Atomic.cache.getResource('Sprite2D', this.closedSprite);
            this.body.castShadows = true;
            this.entity.blocksLight = true;
            this.entity.blocksPath = true;
            this.entity.bumpable = true;
            this.body.enabled = true;
        }
    }

    onBump(bumperComponent /*, bumperNode*/) {
        this.DEBUG(`Bumped by: ${bumperComponent.className} `);
        if (!this.open) {
            this.DEBUG('Door opened.');
            this.open = true;
            this.updateState();
        }
    }

    DEBUG(msg) {
        if (this.debug) {
            console.log(`${this.className}: ${msg}`);
        }
    }
}
