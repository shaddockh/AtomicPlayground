'use strict';
export default class MapData {

    constructor(width, height, defaultValue = {
        type: MapData.TILE_NONE,
        edge: 0
    }) {
        this.width = width;
        this.height = height;
        this.tiles = createEmptyMap(width, height, defaultValue);
        this.entities = [];
    }

    /**
     * Check if x and y are within bounds of the map
     */
    inBounds(x, y) {
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }

    setTile(x, y, value) {
        if (this.inBounds(x, y)) {
            this.tiles[x][y] = value;
        } else {
            throw new Error(`Position out of bounds: ${x},${y}`);
        }
    }

    getTile(x, y) {
        if (this.inBounds(x, y)) {
            return this.tiles[x][y];
        } else {
            throw new Error(`Position out of bounds: ${x},${y}`);
        }
    }

    isEmpty(x, y) {
        let tile = this.getTile(x, y);
        if (tile && tile.type === MapData.TILE_FLOOR) {
            return true;
        } else {
            return false;
        }
    }

    getRandomEmptyPosition() {
        let seek = true;
        while (seek) {
            let pos = [randomNumber(this.width), randomNumber(this.height)];
            if (this.isEmpty(pos[0], pos[1])) {
                return pos;
            }
        }
    }

    addEntityAtPosition(x, y, entity) {
        entity.x = x;
        entity.y = y;
        this.entities.push(entity);
    }

    static buildTile(type = 0, edge = 0, blueprint = null) {
        return {
            type: type,
            edge: edge,
            blueprint: blueprint
        };
    }

    static buildEntity(blueprint, x = 0, y = 0) {
        return {
            x: x,
            y: y,
            blueprint: blueprint
        }
    }

    static TILE_NONE = 0;
    static TILE_WALL = 1;
    static TILE_FLOOR = 2;
}

function createEmptyMap(width, height, defaultValue = {
    type: 0,
    edge: 0,
    blueprint: ''
}) {
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

function randomNumber(min = 0, max = -1) {

    if (max < min) {
        max = min;
        min = 0;
    }

    return Math.floor(Math.random() * max) + min;
}
