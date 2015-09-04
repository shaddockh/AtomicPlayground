'use strict';
'atomic component';
import * as triggerEvent from 'atomicTriggerEvent';
//import { nodeBuilder } from 'atomic-blueprintLib';
import MapData from 'MapData';

export default class LevelRunner extends Atomic.JSComponent {

    inspectorFields = {
        debug: false
    };

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
