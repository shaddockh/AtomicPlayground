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
        var tilexref = {
            0: 'tile_floor_c',
            1: 'tile_floor_cl',
            2: 'tile_floor_cr',
            3: 'tile_floor_vcorridor_c',
            4: 'tile_floor_bc',
            5: 'tile_floor_bl',
            6: 'tile_floor_br',

            8: 'tile_floor_tc',
            9: 'tile_floor_tl',
            10: 'tile_floor_tr',

            12: 'tile_floor_hcorridor_c',

            defaultTile: 'tile_floor_c'
        };

        // run through the entire map and remap the edge tiles
        var tiles = mapData.tiles;
        for (let x = 0, xEnd = mapData.width; x < xEnd; x++) {
            for (let y = 0, yEnd = mapData.height; y < yEnd; y++) {
                var tile = tiles[x][y];
                if (tile.type === MapData.TILE_FLOOR) {
                    tile.edge = getNeighborSignature(mapData, x, y);
                    //TODO: renderer responsibility
                    tile.blueprint = tilexref[tile.edge] || tilexref.defaultTile;
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


function getNeighborSignature(mapData, x, y) {
    let tiles = mapData.tiles;
    let t = 0;
    // left edge
    if (x === 0 || tiles[x - 1][y].type !== MapData.TILE_FLOOR) {
        t += 1;
    }

    // right edge
    if (x === mapData.width - 1 || tiles[x + 1][y].type !== MapData.TILE_FLOOR) {
        t += 2;
    }

    // top edge
    if (y === 0 || tiles[x][y - 1].type !== MapData.TILE_FLOOR) {
        t += 4;
    }

    // bottom edge
    if (y === mapData.height - 1 || tiles[x][y + 1].type !== MapData.TILE_FLOOR) {
        t += 8;
    }

    // top left edge -- not right...commenting out
    //if (!inBounds(x-1,y-1) || tiles[x-1][y-1] !== TILE_FLOOR) {
    //t += 16;
    //}

    return t;
}

