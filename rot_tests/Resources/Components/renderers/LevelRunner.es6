'use strict';
'atomic component';
import * as triggerEvent from 'atomicTriggerEvent';
//import { nodeBuilder } from 'atomic-blueprintLib';
import MapData from 'MapData';

export default class LevelRunner extends Atomic.JSComponent {

    inspectorFields = {
        debug: false,
        mapData: null,
        turnBased: true
    };

    start() {
        this.node.scene.Level = this;
    }

    calculateOffsetPosition(pos, vector2D) {
        return [pos[0] + vector2D[0], pos[1] + vector2D[1]];
    }

    getTileAt(pos) {
        return this.mapData.getTile(pos[0], pos[1]);
    }

    getEntitiesAt(pos) {
        return this.mapData.getEntitiesAt(pos[0], pos[1]);
    }

    iterateEntitiesAt(pos, callback) {
        this.mapData.iterateEntitiesAt(pos[0],pos[1],callback);
    }

    onSetMapData(mapData) {
        // let's just defer to the renderer for now
        //
        if (this.debug) {
            console.log(`LevelRunner: onSetMapData called.`);
            console.log(`LevelRunner: dimensions - ${mapData.width} x ${mapData.height}`);
        }
        this.mapData = mapData;

        this.createHero(mapData.getRandomEmptyPosition());

        triggerEvent.trigger(this.node, 'onRender', mapData);
    }

    createHero(position) {
        let [x,y] = position;
        if (this.debug) {
            console.log(`Create actor at: ${x},${y}`);
        }
        this.mapData.addEntityAtPosition(x, y, new MapData.buildEntity('hero'));
    }

}
