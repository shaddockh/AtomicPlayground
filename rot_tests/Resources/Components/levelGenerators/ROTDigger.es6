'use strict';
import ROT from 'rot-js';
import {
    nodeBuilder
}
from 'atomic-blueprintLib';

var game = Atomic.game;
var node = self.node;

var defaultBlueprint = {
    width: 80,
    height: 25,
    cellPixelSize: 16,

    // Digger options
    roomWidth: [3, 9],
    /* room minimum and maximum width */
    roomHeight: [3, 5],
    /* room minimum and maximum height */
    corridorLength: [3, 10],
    /* corridor minimum and maximum length */
    dugPercentage: 0.2,
    /* we stop after this percentage of level area has been dug out */
    timeLimit: 1000 /* we stop after this much time has passed (msec) */
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
    var map = buildMap();

    let scale = blueprint.cellPixelSize * Atomic.PIXEL_SIZE,
        offsetX = blueprint.width / 2 * scale * -1,
        offsetY = blueprint.height / 2 * scale * -1;

    let currentCell = 0;
    for (let x = 0; x < blueprint.width; x++) {
        for (let y = 0; y < blueprint.height; y++) {
            currentCell = map[x][y];
            if (currentCell) {
                children.push(nodeBuilder.createChildAtPosition(node, currentCell, [x * scale, y * scale]));
            }
        }
    }
    node.position2D = [offsetX, offsetY];
}

self.onClear = function () {
    for (let i = 0; i < children.length; i++) {
        Atomic.destroy(children[i]);
    }
    children = [];
};

function createEmptyMap(width, height, defaultValue = 0) {
    var arr = [];
    for (var x = 0; x < width; x++) {
        // Create the nested array for the y values
        arr.push([]);
        // Add all the tiles
        for (var y = 0; y < height; y++) {
            arr[x].push(defaultValue);
        }
    }
    return arr;
}

function getNeighborSignature(map, x, y) {
    let t = 0;
    // left edge
    if (x === 0 || !map[x - 1][y]) {
        t += 1;
    }

    // right edge
    if (x === blueprint.width - 1 || !map[x + 1][y]) {
        t += 2;
    }

    // top edge
    if (y === 0 || !map[x][y - 1]) {
        t += 4;
    }

    // bottom edge
    if (y === blueprint.height - 1 || !map[x][y + 1]) {
        t += 8;
    }

    // top left edge -- not right...commenting out
    //if (!inBounds(x-1,y-1) || !map[x-1][y-1]) {
        //t += 16;
    //}

    return t;
}

function inBounds(x,y) {
    return x >= 0 && x < blueprint.width && y >= 0 && y < blueprint.height;
}

function buildMap() {
    var map = createEmptyMap(blueprint.width, blueprint.height);

    let builder = new ROT.Map.Digger(blueprint.width, blueprint.height, blueprint);
    builder.create((x, y, value) => {
        if (value) {
            return;
        } /* do not store walls */
        map[x][y] = "tile_floor_c";
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
    for (let x = 0; x < blueprint.width; x++) {
        for (let y = 0; y < blueprint.height; y++) {
            if (map[x][y]) {
                map[x][y] = tilexref[getNeighborSignature(map, x, y)] || tilexref.defaultTile;
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
