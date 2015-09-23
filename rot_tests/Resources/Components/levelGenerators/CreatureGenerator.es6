'use strict';
'atomic component';
import MapData from 'MapData';
import * as utils from 'utils';

import CustomJSComponent from 'CustomJSComponent';
export default class CreatureGenerator extends CustomJSComponent {

    inspectorFields = {
        debug: false,
        creatureCount: [Atomic.VAR_INTVECTOR2, [0,0]],
        creatureList: ['']
    };

    buildCreatures(mapData /*, roomData*/) {
        for (let i = 0; i < utils.randomNumber(this.creatureCount[0], this.creatureCount[1]); i++) {
            // TODO if roomdata, then use that for storing creatures
            // TODO 2 maybe the map generator should place spawn points and then the creature generator can just use those
            let [x,y] = mapData.getRandomEmptyPosition();
            let entity = MapData.buildRandomEntity(this.creatureList);
            this.DEBUG(`Adding ${entity.blueprint} at ${x,y}`);
            mapData.addEntityAtPosition(x, y, entity);
        }
    }

    onBuildCreatures = this.buildCreatures;
}
