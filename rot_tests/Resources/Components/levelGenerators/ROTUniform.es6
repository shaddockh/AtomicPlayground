'use strict';
'atomic component';
import ROT from 'rot-js';
import MapData from 'MapData';
import BaseLevelGenerator from './BaseLevelGenerator';

export default class ROTUniform extends BaseLevelGenerator {

    inspectorFields = {
        debug: [Atomic.VAR_BOOL, true],
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

    children = [];

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
            this.mapData.setTile(x, y,
                MapData.buildTile(MapData.TILE_FLOOR, 0, 'tile_floor_c'));
        });

        // run through the entire map and remap the edge tiles
        var tiles = this.mapData.tiles;
        for (let x = 0, xEnd = this.width; x < xEnd; x++) {
            for (let y = 0, yEnd = this.height; y < yEnd; y++) {
                var tile = tiles[x][y];
                if (tile.type === MapData.TILE_FLOOR) {
                    tile.edge = this.getNeighborSignature(x, y);
                }
            }
        }

        // See if there are any rooms
        //if (builder.getRooms) {
        //let rooms = builder.getRooms();
        //for (let i = 0, iLen = rooms.length; i < iLen; i++) {
        //rooms[i].getDoors((x, y) => {
        ////map[x][y] = 'tile_floor_c';
        //});
        //}
        //}
    }
}
