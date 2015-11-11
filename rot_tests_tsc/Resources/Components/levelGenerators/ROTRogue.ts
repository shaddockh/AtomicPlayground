'use strict';
'atomic component';
import ROT = require('rot-js');
import MapData from '../../Modules/MapData';
import BaseLevelGenerator from './BaseLevelGenerator';

export default class ROTRogue extends BaseLevelGenerator {

    inspectorFields = {
        debug: false,
        width: 80, // copied from BaseLevelGenerator
        height: 25, // copied from BaseLevelGenerator

        // options
        cellWidth: 3,
        cellHeight: 3
    };

    cellWidth:number = 3;
    cellHeight:number = 3;

    /** @override */
    buildMapData() {

        this.mapData = new MapData(this.width, this.height);
        if (this.debug) {
            console.log(`Generating Terrain: ROT Rogue (${this.width} x ${this.height})`);
            console.log('Options:');
            console.log('Cell Width: ' + this.cellWidth);
            console.log('Cell Height: ' + this.cellHeight);
        }

        let builder = new ROT.Map.Rogue(this.width, this.height, this);
        builder.create((x, y, value) => {
            if (value) {
                return;
            } /* do not store walls */
            this.mapData.setTile(x, y, MapData.buildTile(MapData.TILE_FLOOR));
        });

        this.processEdges();

        // TODO figure out doors for ROTRogue
        // this.placeDoors(builder.getRooms());

        this.placeCreatures(null);
        this.placeItems();
    }
}
