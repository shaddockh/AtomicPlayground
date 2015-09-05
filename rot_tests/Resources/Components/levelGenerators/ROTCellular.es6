'use strict';
'atomic component';
import ROT from 'rot-js';
import MapData from 'MapData';
import BaseLevelGenerator from './BaseLevelGenerator';

export default class ROTCellular extends BaseLevelGenerator {

    inspectorFields = {
        debug: false,
        width: 80, // copied from BaseLevelGenerator
        height: 25, // copied from BaseLevelGenerator
        iterations: 3,
        randomization: 0.9,

        /*List of neighbor counts for a new cell to be born in empty space*/
        // TODO: currently limited to an array of 4 here
        born: [Atomic.VAR_BUFFER, [5, 6, 7, 8]],

        /*List of neighbor counts for an existing  cell to survive*/
        // TODO: currently limited to an array of 4 here
        survive: [Atomic.VAR_BUFFER, [4, 5, 6, 7/*, 8*/]],

        /*Topology 4 or 6 or 8*/
        topology: 8,
        connected: false
    };

    /** @override */
    buildMapData() {

        this.mapData = new MapData(this.width, this.height);
        if (this.debug) {
            console.log(`Generating Terrain: ROT Cellular Automata (${this.width} x ${this.height})`);
            console.log('Options:');
            console.log('Iterations: ' + this.iterations);
            console.log('Randomization: ' + this.randomization);
            console.log('Born: ' + this.born.join(','));
            console.log('Survive: ' + this.survive.join(','));
            console.log('Topology: ' + this.topology);
            console.log('Connected: ' + this.connected);
        }

        let builder = new ROT.Map.Cellular(this.width, this.height, this);
        builder.randomize(this.randomization);

        // run through iterations until we are about to reach the last iteration
        for (let i = 0; i < this.iterations - 1; i++) {
            builder.create(null);
        }

        // Capture the final iteration
        builder.create((x, y, value) => {
            if (value) {
                return;
            } /* do not store walls */
            this.mapData.setTile(x, y, MapData.buildTile(MapData.TILE_FLOOR));
        });


        // See if there are any rooms
        //if (builder.getRooms) {
        //let rooms = builder.getRooms();
        //for (let i = 0, iLen = rooms.length; i < iLen; i++) {
        //rooms[i].getDoors((x, y) => {
        ////map[x][y] = 'tile_floor_c';
        //});
        //}
        //}
        this.processEdges();
    }
}
