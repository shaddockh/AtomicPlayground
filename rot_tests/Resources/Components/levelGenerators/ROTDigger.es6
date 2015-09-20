'use strict';
'atomic component';
import ROT from 'rot-js';
import MapData from 'MapData';
import BaseLevelGenerator from './BaseLevelGenerator';

export default class ROTDigger extends BaseLevelGenerator {

    inspectorFields = {
        debug: false,
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

        this.placeDoors(builder.getRooms());

        this.placeCreatures();
    }

    placeDoors(rooms) {
        // TOOD: move this out into it's own generator ( a door generator or something )
        for (let rIndex = 0; rIndex < rooms.length; rIndex++) {
            rooms[rIndex].getDoors((x, y) => {
                let tile = this.mapData.getTile(x, y);
                let doorbp = '';
                switch (tile.edge) {
                    case 1: 
                    case 2:
                    case 12:
                        doorbp = 'door_ew';
                        break;

                    case 3:
                    case 4:
                    case 8:
                        doorbp = 'door_ns';
                        break;

                    default:
                        console.log(`Unknown edge type for a door: ${tile.edge}`);
                }
                let entity = MapData.buildEntity(doorbp);
                this.mapData.addEntityAtPosition(x, y, entity); 
            });
        }
    }

    placeCreatures() {
        // TODO: Hard Coded!  Definitely move to blueprints
        const numCreatures = 5,
              creatureTypes = ['fred'];

        for (let i = 0; i < numCreatures; i++) {
            let [x,y] = this.mapData.getRandomEmptyPosition();
            let entity = MapData.buildRandomEntity(creatureTypes);
            this.mapData.addEntityAtPosition(x, y, entity);
        }
    }
}
