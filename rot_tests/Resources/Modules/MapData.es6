'use strict';
export default class MapData {

    constructor(width, height, defaultValue = {
        terrainType: MapData.TILE_NONE,
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

    getEntitiesAt(x, y) {
        if (this.inBounds(x, y)) {
            return this.entities.filter((entity) => {
                return entity.x === x && entity.y === y;
            });
        } else {
            throw new Error(`Position out of bounds: ${x},${y}`);
        }
    }

    iterateEntitiesAt(x, y, callback) {
        let entities = this.getEntitiesAt(x, y);
        for (let x = 0, xEnd = entities.length; x < xEnd; x++) {
            callback(entities[x]);
        }
    }

    isEmpty(x, y) {
        let tile = this.getTile(x, y);
        if (tile && tile.terrainType === MapData.TILE_FLOOR) {
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

    /**
     * Iterate over the entire map calling back (x,y,tile) for every entry.
     * return 'falsy' value in the callback to exit.
     */
    iterateMap(callback) {
        let tiles = this.tiles;
        let xEnd = this.width,
            yEnd = this.height;

        for (let x = 0; x < xEnd; x++) {
            for (let y = 0; y < yEnd; y++) {
                let result = callback(x, y, tiles[x][y]);
                if (typeof (result) !== 'undefined' && !result) {
                    return;
                }
            }
        }
    }

    static buildTile(terrainType = 0, edge = 0, blueprint = null) {
        return {
            terrainType: terrainType,
            edge: edge,
            blueprint: blueprint
        };
    }

    static buildEntity(blueprint, x = 0, y = 0) {
        return {
            x: x,
            y: y,
            blueprint: blueprint
        };
    }

    static TILE_NONE = 0;
    static TILE_WALL = 1;
    static TILE_FLOOR = 2;
}

function createEmptyMap(width, height, defaultValue = {
    terrainType: MapData.TILE_NONE,
    edge: 0,
    blueprint: ''
}) {
    let arr = [];
    for (let x = 0; x < width; x++) {
        // Create the nested array for the y values
        arr.push([]);
        // Add all the tiles
        for (let y = 0; y < height; y++) {
            //TODO: This should move to buildTile.
            //Note: we have to create a copy of the default value for each cell otherwise
            //changing one cell will update all the other cells
            let newTile = {};
            for (let p in defaultValue) {
                newTile[p] = defaultValue[p];
            }
            arr[x].push(newTile);
        }
    }
    return arr;
}

function randomNumber(min = 0, max = -1) {

    let newMax = max,
        newMin = min;
    if (max < min) {
        newMax = min;
        newMin = 0;
    }

    return Math.floor(Math.random() * newMax) + newMin;
}
