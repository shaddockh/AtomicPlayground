'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// 'noatomic component'; -- don't want to expose to the editor since this is more like an abstract base class
var triggerEvent = require('atomicTriggerEvent');
var MapData_1 = require('../../Modules/MapData');
var CustomJSComponent_1 = require('CustomJSComponent');
var BaseLevelGenerator = (function (_super) {
    __extends(BaseLevelGenerator, _super);
    function BaseLevelGenerator() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            width: 80,
            height: 25,
            debug: false
        };
        this.mapData = null;
        this.width = 80;
        this.height = 25;
    }
    BaseLevelGenerator.prototype.start = function () {
        this.generateLevel();
    };
    BaseLevelGenerator.prototype.generateLevel = function () {
        this.buildMapData();
        triggerEvent.trigger(this.node, 'onLevelGenerated', this.mapData);
        return this.mapData;
    };
    /** overridable */
    BaseLevelGenerator.prototype.buildMapData = function () {
        throw new Error('BaseLevelGenerator.buildMapData must be overridden.');
    };
    /**
     * event to listen for someone asking for map data
     * @returns {MapData} the map data that was generated
     */
    BaseLevelGenerator.prototype.onGetMapData = function () {
        return this.mapData;
    };
    BaseLevelGenerator.prototype.getNeighborSignature = function (x, y, ignoreTypes) {
        if (ignoreTypes === void 0) { ignoreTypes = []; }
        var tiles = this.mapData.tiles;
        var t = 0;
        // Determine what kind of tile we are and add it to the list of tiles that we shouldn't calculate edges against
        var ignore = ignoreTypes.concat(tiles[x][y].terrainType);
        // left edge
        if (x === 0 || ignore.indexOf(tiles[x - 1][y].terrainType) === -1) {
            t += 1;
        }
        // right edge
        if (x === this.width - 1 || ignore.indexOf(tiles[x + 1][y].terrainType) === -1) {
            t += 2;
        }
        // top edge
        if (y === 0 || ignore.indexOf(tiles[x][y - 1].terrainType) === -1) {
            t += 4;
        }
        // bottom edge
        if (y === this.height - 1 || ignore.indexOf(tiles[x][y + 1].terrainType) === -1) {
            t += 8;
        }
        /* not sure this is working correctly
        // top left edge
        if (!this.mapData.inBounds(x - 1, y - 1) || ignore.indexOf(tiles[x - 1][y - 1].terrainType) === -1) {
            t += 16;
        }

        // bottom right
        if (!this.mapData.inBounds(x + 1, y + 1) || ignore.indexOf(tiles[x + 1][y + 1].terrainType) === -1) {
            t += 32;
        }

        // bottom left
        if (!this.mapData.inBounds(x - 1, y + 1) || ignore.indexOf(tiles[x - 1][y + 1].terrainType) === -1) {
            t += 64;
        }

        // top right
        if (!this.mapData.inBounds(x + 1, y - 1) || ignore.indexOf(tiles[x + 1][y - 1].terrainType) === -1) {
            t += 128;
        }
        */
        return t;
    };
    /**
     * Run through the map and process edge tiles, making sure that they are set as the proper ege
     */
    BaseLevelGenerator.prototype.processEdges = function () {
        var _this = this;
        // run through the entire map and remap the edge tiles
        this.mapData.iterateMap(function (x, y, tile) {
            if (tile.terrainType === MapData_1.default.TILE_FLOOR) {
                tile.edge = _this.getNeighborSignature(x, y);
            }
        });
        this.mapData.iterateMap(function (x, y, tile) {
            if (tile.terrainType === MapData_1.default.TILE_NONE && _this.getNeighborSignature(x, y, [MapData_1.default.TILE_WALL]) > 0) {
                tile.terrainType = MapData_1.default.TILE_WALL;
                tile.blueprint = 'tile_shadow_wall';
            }
        });
    };
    BaseLevelGenerator.prototype.placeDoors = function (rooms) {
        var _this = this;
        // TOOD: move this out into it's own generator ( a door generator or something )
        for (var rIndex = 0; rIndex < rooms.length; rIndex++) {
            rooms[rIndex].getDoors(function (x, y) {
                var tile = _this.mapData.getTile(x, y);
                var doorbp = null;
                switch (tile.edge) {
                    case 12:
                        doorbp = 'door_ew';
                        break;
                    case 3:
                        doorbp = 'door_ns';
                        break;
                }
                if (_this.mapData.isEmpty(x, y)) {
                    if (doorbp) {
                        var entity = MapData_1.default.buildEntity(doorbp);
                        _this.mapData.addEntityAtPosition(x, y, entity);
                    }
                }
            });
        }
    };
    BaseLevelGenerator.prototype.placeCreatures = function (roomData) {
        triggerEvent.trigger(this.node, 'onPlaceCreatures', this.mapData, roomData);
    };
    BaseLevelGenerator.prototype.placeItems = function (roomData) {
        triggerEvent.trigger(this.node, 'onPlaceItems', this.mapData, roomData);
    };
    return BaseLevelGenerator;
})(CustomJSComponent_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BaseLevelGenerator;
