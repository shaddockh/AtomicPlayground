'use strict';
export default class MapData {

    constructor(width, height, defaultValue = 0) {
        this.width = width;
        this.height = height;
        this.tiles = createEmptyMap(width, height, defaultValue);
    }

    /**
     * Check if x and y are within bounds of the map
     */
    inBounds(x, y) {
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
    }

    setTile(x,y,value) {
        if (this.inBounds(x,y)) {
            this.tiles[x][y] = value;
        } else {
            throw new Error(`Position out of bounds: ${x},${y}`);
        }
    }

    getTile(x,y) {
        if (this.inBounds(x,y)) {
            return this.tiles[x][y];
        } else {
            throw new Error(`Position out of bounds: ${x},${y}`);
        }
    }

    static TILE_NONE = 0;
    static TILE_WALL = 1;
    static TILE_FLOOR = 2;
}


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
