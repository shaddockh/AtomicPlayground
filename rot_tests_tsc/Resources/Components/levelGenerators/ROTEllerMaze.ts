'use strict';
'atomic component';
import ROT = require('rot-js');
import MapData from '../../Modules/MapData';
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

        this.processEdges();

        // no rooms
        // this.placeDoors(builder.getRooms());

        this.placeCreatures(null);
        this.placeItems();
    }
}
