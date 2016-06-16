'use strict';
var utils = require('./utils');
var metrics = require('./metricsGatherer');
var MapData = (function () {
    function MapData(width, height, defaultValue) {
        if (defaultValue === void 0) { defaultValue = {
            terrainType: MapData.TILE_NONE,
            blocksLight: true,
            blocksPath: true,
            edge: 0
        }; }
        this.width = 0;
        this.height = 0;
        this.entities = [];
        this.tiles = [];
        this.width = width;
        this.height = height;
        this.tiles = createEmptyMap(width, height, defaultValue);
        this.entities = [];
    }
    /**
     * Check if x and y are within bounds of the map
     */
    MapData.prototype.inBounds = function (x, y) {
        return x >= 0 && x < this.width && y >= 0 && y < this.height;
    };
    MapData.prototype.setTile = function (x, y, value) {
        if (this.inBounds(x, y)) {
            value.x = x;
            value.y = y;
            this.tiles[x][y] = value;
        }
        else {
            throw new Error("Position out of bounds: " + x + "," + y);
        }
    };
    MapData.prototype.getTile = function (x, y) {
        if (this.inBounds(x, y)) {
            return this.tiles[x][y];
        }
        else {
            throw new Error("Position out of bounds: " + x + "," + y);
        }
    };
    MapData.prototype.getEntitiesAt = function (x, y) {
        if (this.inBounds(x, y)) {
            return this.entities.filter(function (entity) {
                return entity.x === x && entity.y === y;
            });
        }
        else {
            throw new Error("Position out of bounds: " + x + "," + y);
        }
    };
    /**
     * Iterates over a list of entities from the top down
     */
    MapData.prototype.iterateEntitiesAt = function (x, y, callback) {
        metrics.start('mapdata.iterateEntitiesAt');
        try {
            var entities = this.getEntitiesAt(x, y);
            for (var i = entities.length - 1, iEnd = 0; i >= iEnd; i--) {
                var cont = callback(entities[i]);
                if (typeof (cont) !== 'undefined' && !cont) {
                    return;
                }
            }
        }
        finally {
            metrics.stop('mapdata.iterateEntitiesAt');
        }
    };
    MapData.prototype.iterateEntities = function (callback) {
        metrics.start('mapdata.iterateEntities');
        try {
            var entities = this.entities;
            for (var x = 0, xEnd = entities.length; x < xEnd; x++) {
                var cont = callback(entities[x]);
                if (typeof (cont) !== 'undefined' && !cont) {
                    return;
                }
            }
        }
        finally {
            metrics.stop('mapdata.iterateEntities');
        }
    };
    MapData.prototype.filterEntities = function (callback) {
        return this.entities.filter(callback);
    };
    MapData.prototype.isEmpty = function (x, y) {
        var tile = this.getTile(x, y);
        if (tile && tile.terrainType === MapData.TILE_FLOOR) {
            if (this.getEntitiesAt(x, y).length === 0) {
                return true;
            }
        }
        return false;
    };
    MapData.prototype.getRandomEmptyPosition = function () {
        var seek = true;
        while (seek) {
            var pos = [utils.randomNumber(this.width), utils.randomNumber(this.height)];
            if (this.isEmpty(pos[0], pos[1])) {
                return pos;
            }
        }
    };
    MapData.prototype.addEntityAtPosition = function (x, y, entity) {
        if (!entity.blueprint) {
            throw new Error("Cannot add an entity without a blueprint. " + x + "," + y);
        }
        entity.x = x;
        entity.y = y;
        this.entities.push(entity);
    };
    MapData.prototype.removeEntity = function (entity) {
        var idx = this.entities.indexOf(entity);
        if (idx > -1) {
            this.entities.splice(idx, 1);
        }
    };
    /**
     * Iterate over the entire map calling back (x,y,tile) for every entry.
     * return 'falsy' value in the callback to exit.
     */
    MapData.prototype.iterateMap = function (callback) {
        metrics.start('mapData.iterateMap');
        try {
            var tiles = this.tiles;
            var xEnd = this.width, yEnd = this.height;
            for (var x = 0; x < xEnd; x++) {
                for (var y = 0; y < yEnd; y++) {
                    var result = callback(x, y, tiles[x][y]);
                    if (typeof (result) !== 'undefined' && !result) {
                        return;
                    }
                }
            }
        }
        finally {
            metrics.stop('mapData.iterateMap');
        }
    };
    MapData.buildTile = function (terrainType, edge, blueprint) {
        if (terrainType === void 0) { terrainType = 0; }
        if (edge === void 0) { edge = 0; }
        if (blueprint === void 0) { blueprint = null; }
        return {
            terrainType: terrainType,
            edge: edge,
            blueprint: blueprint
        };
    };
    MapData.buildEntity = function (blueprint, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        return {
            x: x,
            y: y,
            blueprint: blueprint
        };
    };
    MapData.buildRandomEntity = function (blueprintArr, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        return {
            x: x,
            y: y,
            blueprint: blueprintArr[utils.randomNumber(blueprintArr.length)]
        };
    };
    MapData.TILE_NONE = 0;
    MapData.TILE_WALL = 1;
    MapData.TILE_FLOOR = 2;
    return MapData;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MapData;
function createEmptyMap(width, height, defaultValue) {
    if (defaultValue === void 0) { defaultValue = {
        terrainType: MapData.TILE_NONE,
        edge: 0,
        blueprint: ''
    }; }
    var arr = [];
    for (var x = 0; x < width; x++) {
        // Create the nested array for the y values
        arr.push([]);
        // Add all the tiles
        for (var y = 0; y < height; y++) {
            //TODO: This should move to buildTile.
            //Note: we have to create a copy of the default value for each cell otherwise
            //changing one cell will update all the other cells
            var newTile = {
                x: x,
                y: y
            };
            for (var p in defaultValue) {
                newTile[p] = defaultValue[p];
            }
            arr[x].push(newTile);
        }
    }
    return arr;
}
