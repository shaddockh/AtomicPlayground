'use strict';
'atomic component';
import ROT = require('rot-js');
import MapData from '../../Modules/MapData';
import BaseLevelGenerator from './BaseLevelGenerator';

export default class ROTDigger extends BaseLevelGenerator {

    inspectorFields = {
        debug: false,
        width: 80, // copied from BaseLevelGenerator
        height: 25, // copied from BaseLevelGenerator

        // Digger options
        roomWidth: [Atomic.VariantType.VAR_VECTOR2, [3, 9]],
        /* room minimum and maximum width */
        roomHeight: [Atomic.VariantType.VAR_VECTOR2, [3, 5]],
        /* room minimum and maximum height */
        corridorLength: [Atomic.VariantType.VAR_VECTOR2, [3, 10]],
        /* corridor minimum and maximum length */
        dugPercentage: 0.2,
        /* we stop after this percentage of level area has been dug out */
        timeLimit: 1000 /* we stop after this much time has passed (msec) */
    };

    roomWidth: Array<number> = [3, 9];
    roomHeight: Array<number> = [3, 5];
    corridorLength: Array<number> = [3, 10];
    dugPercentage: number = 0.2;
    timeLimit: number = 1000;

    /** @override */
    buildMapData() {

        this.mapData = new MapData(this.width, this.height);
        if (this.debug) {
            console.log(`Generating Terrain: ROT Digger (${this.width} x ${this.height})`);
            console.log('Options:');
            console.log(this.roomWidth);
            console.log(this.roomHeight);
            console.log(this.corridorLength);
            console.log(this.dugPercentage);
            console.log(this.timeLimit);
        }

        let builder = new ROT.Map.Digger(this.width, this.height, this);
        builder.create((x, y, value) => {
            if (value) {
                return;
            } /* do not store walls */
            this.mapData.setTile(x, y, MapData.buildTile(MapData.TILE_FLOOR));
        });

        this.processEdges();

        this.placeDoors(builder.getRooms());
        this.placeCreatures(builder.getRooms());
        this.placeItems(builder.getRooms());
    }

}
