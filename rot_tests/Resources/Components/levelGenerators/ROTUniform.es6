'use strict';
'atomic component';
import ROT from 'rot-js';
import MapData from 'MapData';
import BaseLevelGenerator from './BaseLevelGenerator';

export default class ROTUniform extends BaseLevelGenerator {

    inspectorFields = {
        debug: false,
        width: 80, // copied from BaseLevelGenerator
        height: 25, // copied from BaseLevelGenerator

        // options
        roomWidth: [Atomic.VAR_VECTOR2, [3, 9]],
        /* room minimum and maximum width */
        roomHeight: [Atomic.VAR_VECTOR2, [3, 5]],
        /* we stop after this percentage of level area has been dug out */
        roomDugPercentage: 0.1,
        /* we stop after this much time has passed (msec) */
        timeLimit: 1000
    };

    /** @override */
    buildMapData() {

        this.mapData = new MapData(this.width, this.height);
        if (this.debug) {
            console.log(`Generating Terrain: ROT Uniform (${this.width} x ${this.height})`);
            console.log('Options:');
            console.log(this.roomWidth);
            console.log(this.roomHeight);
            console.log(this.roomDugPercentage);
            console.log(this.timeLimit);
        }

        let builder = new ROT.Map.Uniform(this.width, this.height, this);
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
