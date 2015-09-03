'use strict';
'atomic component';
import ROT from 'rot-js';
import MapData from 'MapData';
import BaseLevelGenerator from './BaseLevelGenerator';

export default class ROTEllerMaze extends BaseLevelGenerator {

    inspectorFields = {
        debug: false,
        width: 80, // copied from BaseLevelGenerator
        height: 25 // copied from BaseLevelGenerator
    };

    /** @override */
    buildMapData() {

        this.mapData = new MapData(this.width, this.height);
        if (this.debug) {
            console.log(`Generating Terrain: ROT Eller Maze (${this.width} x ${this.height})`);
        }

        let builder = new ROT.Map.EllerMaze(this.width, this.height, this);
        builder.create((x, y, value) => {
            if (value) {
                return;
            } /* do not store walls */
            this.mapData.setTile(x, y, MapData.buildTile(MapData.TILE_FLOOR));
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
