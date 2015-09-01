'use strict';
'atomic component';
import ROT from 'rot-js';
import MapData from 'MapData';
import BaseLevelGenerator from './BaseLevelGenerator';

export default class ROTDigger extends BaseLevelGenerator {

    inspectorFields = {
        debug: [Atomic.VAR_BOOL, true],
        width: 80, // copied from BaseLevelGenerator
        height: 25, // copied from BaseLevelGenerator

        // Digger options
        roomWidth: [Atomic.VAR_VECTOR2, [3, 9]],
        /* room minimum and maximum width */
        roomHeight: [Atomic.VAR_VECTOR2, [3, 5]],
        /* room minimum and maximum height */
        corridorLength: [Atomic.VAR_VECTOR2, [3, 10]],
        /* corridor minimum and maximum length */
        dugPercentage: 0.2,
        /* we stop after this percentage of level area has been dug out */
        timeLimit: 1000 /* we stop after this much time has passed (msec) */
    };

    children = [];

    /** @override */
    buildMap() {

        var mapData = new MapData(this.width, this.height);
        if (this.debug) {
            console.log(`Generating map: ${this.width} x ${this.height}`);
            console.log('Options:');
            console.log(this.roomWidth);
            console.log(this.roomHeight);
            console.log(this.corridorLength);
            console.log(this.dugPercentage);
            console.log(this.timeLimit);
        }

        let builder = new ROT.Map.Digger(mapData.width, mapData.height, this);
        builder.create((x, y, value) => {
            if (value) {
                return;
            } /* do not store walls */
            mapData.setTile(x, y,
                MapData.buildTile(MapData.TILE_FLOOR, 0, 'tile_floor_c'));
        });

        // run through the entire map and remap the edge tiles
        var tiles = mapData.tiles;
        for (let x = 0, xEnd = mapData.width; x < xEnd; x++) {
            for (let y = 0, yEnd = mapData.height; y < yEnd; y++) {
                var tile = tiles[x][y];
                if (tile.type === MapData.TILE_FLOOR) {
                    tile.edge = this.getNeighborSignature(mapData, x, y);
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

        return mapData;
    }
}

