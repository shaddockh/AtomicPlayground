'use strict';
'atomic component';
import MapData from '../../Modules/MapData';
import * as utils from '../../Modules/utils';

import CustomJSComponent from 'CustomJSComponent';
export default class CreatureGenerator extends CustomJSComponent {

    inspectorFields = {
        debug: false,
        creatureCount: [Atomic.VAR_VECTOR2, [0, 0]],
        creatureList: [Atomic.VAR_STRING, '']
    };

    creatureCount:Array<number> = [0, 0];
    creatureList:string = '';


    buildCreatures(mapData /*, roomData*/) {
        let creatures = this.creatureList.split(',');
        for (let i = 0; i < utils.randomNumber(this.creatureCount[0], this.creatureCount[1]); i++) {
            // TODO if roomdata, then use that for storing creatures
            // TODO 2 maybe the map generator should place spawn points and then the creature generator can just use those
            let [x, y] = mapData.getRandomEmptyPosition();
            let entity = MapData.buildRandomEntity(creatures);
            this.DEBUG(`Adding ${entity.blueprint} at ${x, y}`);
            mapData.addEntityAtPosition(x, y, entity);
        }
    }

    onPlaceCreatures = this.buildCreatures;
}
