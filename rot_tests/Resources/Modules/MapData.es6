'use strict';
import * as utils from './utils';

export default class MapData {

    constructor(width, height, defaultValue = {
        terrainType: MapData.TILE_NONE,
        blocksLight: true,
        blocksPath: true,
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
            value.x = x;
            value.y = y;
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
        for (let i = 0, iEnd = entities.length; i < iEnd; i++) {
            let cont = callback(entities[i]);
            if (typeof(cont) !== 'undefined' && !cont) {
                return;
            }
        }
    }

    iterateEntities(callback) {
        let entities = this.entities;
        for (let x = 0, xEnd = entities.length; x < xEnd; x++) {
            let cont = callback(entities[x]);
            if (typeof(cont) !== 'undefined' && !cont) {
                return;
            }
        }
    }

    filterEntities(callback) {
        return this.entities.filter(callback);
    }

    isEmpty(x, y) {
        let tile = this.getTile(x, y);
        if (tile && tile.terrainType === MapData.TILE_FLOOR) {
            if (this.getEntitiesAt(x,y).length === 0) {
                return true;
            }
        }
        return false;
    }

    getRandomEmptyPosition() {
        let seek = true;
        while (seek) {
            let pos = [utils.randomNumber(this.width), utils.randomNumber(this.height)];
            if (this.isEmpty(pos[0], pos[1])) {
                return pos;
            }
        }
    }

    addEntityAtPosition(x, y, entity) {
        if (!entity.blueprint) {
            throw new Error(`Cannot add an entity without a blueprint. ${x},${y}`);
        }
        entity.x = x;
        entity.y = y;
        this.entities.push(entity);

    }

    removeEntity(entity) {
        let idx = this.entities.indexOf(entity);
        if (idx > -1) {
            this.entities.splice(idx, 1);
        }
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

    static buildRandomEntity(blueprintArr, x = 0, y = 0) {
        return {
            x: x,
            y: y,
            blueprint: blueprintArr[utils.randomNumber(blueprintArr.length)]
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
            let newTile = {
                x: x,
                y: y
            };
            for (let p in defaultValue) {
                newTile[p] = defaultValue[p];
            }
            arr[x].push(newTile);
        }
    }
    return arr;
}

