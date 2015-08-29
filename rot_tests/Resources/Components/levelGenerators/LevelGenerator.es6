'use strict';
import ROT from 'rot-js';
import { nodeBuilder } from 'atomic-blueprintLib';

export default class LevelGenerator extends Atomic.JSComponent {

    inspectorFields = {
        strategy: 'Digger',
        strategyOptions: {},
        iterations: 1,
        width: 80,
        height: 25,
        cellPixelSize: 16
    };

    children = [];

    start() {
        var map = buildMap(this.strategy, this);

        let scale = this.cellPixelSize * Atomic.PIXEL_SIZE,
            offsetX = this.width / 2 * scale * -1,
            offsetY = this.height / 2 * scale * -1;

        for (let floorCoord in map) {
            let [x, y] = floorCoord.split(',');
            //children.push(nodeBuilder.createChildAtPosition(node, map[floorCoord], [parseInt(x) * scale + offsetX, parseInt(y) * scale + offsetY]));
            children.push(nodeBuilder.createChildAtPosition(node, map[floorCoord], [parseInt(x) * scale, parseInt(y) * scale]));
        }

        node.position2D = [offsetX, offsetY];
    }

    onClear() {
        for (let i = 0; i < this.children.length; i++) {
            Atomic.destroy(this.children[i]);
        }
        this.children = [];
    }

    update() {
        //var camera = game.camera;
        //var pos = game.cameraNode.position2D;
        //pos[1] -= 4;
        //node.position2D = pos;
        //var zoom = camera.zoom;
        //node.scale2D = [zoom, zoom];
    }
}

function buildMap(strategy, generator) {

    // Taken from the Ananais tutorial.. there is a better way to store maps, but this works for now.
    var map = {};

    var builder;

    switch (strategy) {
    case 'Digger':
        builder = new ROT.Map.Digger(generator.width, generator.height, generator.strategyOptions);
        break;
    case 'Uniform':
        builder = new ROT.Map.Uniform(generator.width, generator.height, generator.strategyOptions);
        break;
    case 'Rogue':
        builder = new ROT.Map.Rogue(generator.width, generator.height, generator.strategyOptions);
        break;
    case 'DividedMaze':
        builder = new ROT.Map.DividedMaze(generator.width, generator.height, generator.strategyOptions);
        break;
    case 'IceyMaze':
        //builder = new ROT.Map.IceyMaze(generator.width, generator.height, generator.strategyOptions);
        //FIXME!
        builder = new ROT.Map.IceyMaze(generator.width, generator.height);
        break;
    case 'EllerMaze':
        builder = new ROT.Map.EllerMaze(generator.width, generator.height, generator.strategyOptions);
        break;
    case 'Cellular':
        builder = new ROT.Map.Cellular(generator.width, generator.height, generator.strategyOptions);
        builder.randomize(generator.strategyOptions.randomization);
        break;
    }

    for (let i = 0; i < generator.iterations; i++) {
        if (i === generator.iterations - 1) {
            // Only capture final iteration
            builder.create((x, y, value) => {
                if (value) {
                    return;
                } /* do not store walls */

                map[`${x},${y}`] = "tile_floor_overview";
            });

        } else {
            builder.create();
        }
    }

    // See if there are any rooms
    if (builder.getRooms) {
        let rooms = builder.getRooms();
        for (let i = 0, iLen = rooms.length; i < iLen; i++) {
            rooms[i].getDoors((x, y) => {
                map[`${x},${y}`] = 'tile_door_overview';
            });
        }
    }

    return map;
}
