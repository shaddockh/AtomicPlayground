'use strict';
import ROT from 'rot-js';
import { nodeBuilder }
from 'atomic-blueprintLib';

var game = Atomic.game;
var node = self.node;

var defaultBlueprint = {
    strategy: 'Digger',
    strategyOptions: {},
    iterations: 1,
    width: 80,
    height: 25,
    cellPixelSize: 16
};

var children = [];

// Initialize the blueprint here for elements that need to happen prior to start
var blueprint = node.getComponentBlueprint(self, defaultBlueprint);
/**
 * Perform any setup required before the first start iteration
 */
(function () {

}());

function start() {
    var map = buildMap(blueprint.strategy);

    let scale = blueprint.cellPixelSize * Atomic.PIXEL_SIZE,
        offsetX = blueprint.width / 2 * scale * -1,
        offsetY = blueprint.height / 2 * scale * -1;

    for (let floorCoord in map) {
        let [x, y] = floorCoord.split(',');
        //children.push(nodeBuilder.createChildAtPosition(node, map[floorCoord], [parseInt(x) * scale + offsetX, parseInt(y) * scale + offsetY]));
        children.push(nodeBuilder.createChildAtPosition(node, map[floorCoord], [parseInt(x) * scale, parseInt(y) * scale]));
    }

    node.position2D = [offsetX, offsetY];
}

self.onClear = function () {
    for (let i = 0; i < children.length; i++) {
        Atomic.destroy(children[i]);
    }
    children = [];
};

function buildMap(strategy) {

    // Taken from the Ananais tutorial.. there is a better way to store maps, but this works for now.
    var map = {};

    var builder;

    switch (strategy) {
    case 'Digger':
        builder = new ROT.Map.Digger(blueprint.width, blueprint.height, blueprint.strategyOptions);
        break;
    case 'Uniform':
        builder = new ROT.Map.Uniform(blueprint.width, blueprint.height, blueprint.strategyOptions);
        break;
    case 'Rogue':
        builder = new ROT.Map.Rogue(blueprint.width, blueprint.height, blueprint.strategyOptions);
        break;
    case 'DividedMaze':
        builder = new ROT.Map.DividedMaze(blueprint.width, blueprint.height, blueprint.strategyOptions);
        break;
    case 'IceyMaze':
        //builder = new ROT.Map.IceyMaze(blueprint.width, blueprint.height, blueprint.strategyOptions);
        //FIXME!
        builder = new ROT.Map.IceyMaze(blueprint.width, blueprint.height);
        break;
    case 'EllerMaze':
        builder = new ROT.Map.EllerMaze(blueprint.width, blueprint.height, blueprint.strategyOptions);
        break;
    case 'Cellular':
        builder = new ROT.Map.Cellular(blueprint.width, blueprint.height, blueprint.strategyOptions);
        builder.randomize(blueprint.strategyOptions.randomization);
        break;
    }

    for (let i = 0; i < blueprint.iterations; i++) {
        if (i === blueprint.iterations - 1) {
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

function update() {
    var camera = game.camera;
    //var pos = game.cameraNode.position2D;
    //pos[1] -= 4;
    //node.position2D = pos;
    //var zoom = camera.zoom;
    //node.scale2D = [zoom, zoom];
}
