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
        if (Math.random() * 100 < 50) {
            this.open = true;
        }
        this.updateState();
    }

    updateState() {
        if (this.open) {
            console.log('open');
            this.sprite2D.sprite = Atomic.cache.getResource('Sprite2D', this.openSprite);
            this.body.castShadows = false;
        } else {
            this.sprite2D.sprite = Atomic.cache.getResource('Sprite2D', this.closedSprite);
            this.body.castShadows = true;
        }
    }

}
