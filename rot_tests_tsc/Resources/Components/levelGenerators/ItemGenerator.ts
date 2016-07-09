'use strict';
'atomic component';
import MapData from '../../Modules/MapData';
import * as utils from '../../Modules/utils';

import CustomJSComponent from 'CustomJSComponent';
export default class ItemGenerator extends CustomJSComponent {

    inspectorFields = {
        debug: false,
        itemCount: [Atomic.VAR_VECTOR2, [0, 0]],
        itemList: ''
    };

    itemCount: Array<number> = [0,  0];
    itemList: string = '';

    buildItems(mapData /*, roomData*/) {
        let items = this.itemList.split(',');
        for (let i = 0; i < utils.randomNumber(this.itemCount[0], this.itemCount[1]); i++) {
            // TODO if roomdata, then use that for storing items
            // TODO 2 maybe the map generator should place spawn points and then the item generator can just use those
            let [x, y] = mapData.getRandomEmptyPosition();
            let entity = MapData.buildRandomEntity(items);
            this.DEBUG(`Adding ${entity.blueprint} at ${x, y}`);
            mapData.addEntityAtPosition(x, y, entity);
        }
    }

    onPlaceItems = this.buildItems;
}
