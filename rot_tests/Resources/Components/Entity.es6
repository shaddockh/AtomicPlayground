'use strict';
'atomic component';
//import * as triggerEvent from 'atomicTriggerEvent';
//import { nodeBuilder } from 'atomic-blueprintLib';
//import MapData from 'MapData';

export default class Entity extends Atomic.JSComponent {
    componentName = 'Entity';
    inspectorFields = {
        debug: false,
        blocksPath: false,
        blocksLight: false,
        bumpable: false,
        mapEntity: null
    };


    getPosition() {
        return [this.mapEntity.x, this.mapEntity.y];
    }

    setPosition(pos) {
        this.mapEntity.x = pos[0];
        this.mapEntity.y = pos[1];
    }

    setMapEntityReference(mapEntity) {
        mapEntity.node = this.node;
        mapEntity.entityComponent = this;
        this.mapEntity = mapEntity;
    }
}
