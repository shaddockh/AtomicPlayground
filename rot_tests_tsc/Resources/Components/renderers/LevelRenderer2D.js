'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ROT = require('rot-js');
var blueprintLib = require('atomic-blueprintlib');
var MapData_1 = require('../../Modules/MapData');
var triggerEvent = require('atomicTriggerEvent');
var CustomJSComponent_1 = require('CustomJSComponent');
var gameState_1 = require('../../Modules/gameState');
var LevelRenderer2D = (function (_super) {
    __extends(LevelRenderer2D, _super);
    function LevelRenderer2D() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: true,
            cellPixelSize: 16,
            theme: 'tile_floor'
        };
        this.cellPixelSize = 16;
        this.mapData = null;
        this.theme = 'tile_floor';
        this.children = [];
    }
    LevelRenderer2D.prototype.start = function () {
        gameState_1.default.setCurrentLevelRenderer(this);
        this.cellUnitSize = this.cellPixelSize * Atomic.PIXEL_SIZE;
    };
    LevelRenderer2D.prototype.renderMap = function (mapData) {
        var _this = this;
        this.mapData = mapData;
        var scale = this.cellPixelSize * Atomic.PIXEL_SIZE, offsetX = mapData.width / 2 * scale * -1, offsetY = mapData.height / 2 * scale * -1;
        // TODO: this theming system needs to take into account
        // rooms, walls, and other features.  This means that
        // a specific list of features needs to be created.
        // possible algorithm:  {theme}_{tileType}_{cornerId}
        var tilexref = {
            0: this.theme + '_c',
            1: this.theme + '_cl',
            2: this.theme + '_cr',
            3: this.theme + '_vcorridor_c',
            4: this.theme + '_bc',
            5: this.theme + '_bl',
            6: this.theme + '_br',
            8: this.theme + '_tc',
            9: this.theme + '_tl',
            10: this.theme + '_tr',
            12: this.theme + '_hcorridor_c',
            defaultTile: this.theme + '_c'
        };
        var blueprint = '';
        mapData.iterateMap(function (x, y, tile) {
            if (tile.terrainType !== MapData_1.default.TILE_NONE) {
                blueprint = tile.blueprint || tilexref[tile.edge] || tilexref.defaultTile;
                _this.DEBUG("Construction cell [" + x + "," + y + "] - " + blueprint);
                var tileNode = blueprintLib.createChildAtPosition(_this.node, blueprint, [x * scale, y * scale]);
                var tileComponent = tileNode.getJSComponent('Tile');
                if (tileComponent) {
                    tileComponent.setMapReference(tile);
                }
                _this.children.push(tileNode);
            }
        });
        mapData.iterateEntities(function (entity) {
            if (entity.blueprint) {
                blueprint = entity.blueprint;
                _this.DEBUG("Constructing entity [" + entity.x + "," + entity.y + "] - " + blueprint);
                var entityNode = blueprintLib.createChildAtPosition(_this.node, blueprint, [entity.x * scale, entity.y * scale]);
                var entityComponent = entityNode.getJSComponent('Entity');
                if (entityComponent) {
                    entityComponent.setMapReference(entity);
                }
                _this.children.push(entityNode);
            }
        });
        this.node.position2D = [offsetX, offsetY];
    };
    /**
     * add a visual effect at world position (not grid position).
     * Note that this doesn't get added to a particular cells entity list..it's a visual effect only
     */
    LevelRenderer2D.prototype.addVisualEffect = function (blueprint, worldPos) {
        this.DEBUG("Constructing effect [" + worldPos[0] + "," + worldPos[1] + "] - " + blueprint);
        var entityNode = blueprintLib.createChildAtPosition(this.node, blueprint, [worldPos[0], worldPos[1]]);
        this.children.push(entityNode);
    };
    LevelRenderer2D.prototype.onLevelGenerated = function (mapData) {
        this.renderMap(mapData);
    };
    LevelRenderer2D.prototype.onRender = function (mapData) {
        this.DEBUG('LevelRenderer2D: onRender called');
        this.renderMap(mapData);
    };
    LevelRenderer2D.prototype.updateFov = function (viewerPos, radius, mapData) {
        // First time
        if (!this.fov) {
            // run through and set everything to out of view
            mapData.iterateMap(function (x, y, tile) {
                if (tile.terrainType !== MapData_1.default.TILE_NONE) {
                    triggerEvent.trigger(tile.node, 'onUpdateFov', false);
                }
            });
            var blockLightEntities_1 = {};
            mapData.iterateEntities(function (entity) {
                triggerEvent.trigger(entity.node, 'onUpdateFov', false);
                if (entity.entityComponent.blocksLight) {
                    blockLightEntities_1[entity.x + ',' + entity.y] = true;
                }
            });
            // TODO: PreciseShadowcasting is really too slow for web.  Probably need to switch based upon platform
            // this.fov = new ROT.FOV.PreciseShadowcasting((x, y) => {
            this.fov = new ROT.FOV.RecursiveShadowcasting(function (x, y) {
                // returns whether the point at x,y blocks light
                if (mapData.inBounds(x, y)) {
                    if (mapData.getTile(x, y).blocksLight) {
                        return false;
                    }
                    else {
                        if (blockLightEntities_1[x + ',' + y]) {
                            return false;
                        }
                        else {
                            return true;
                        }
                    }
                }
                else {
                    return false;
                }
            });
        }
        this.DEBUG('Calculating FOV for radius ' + radius);
        // To optimize, create of a cache of all x,y pairs we are iterating over.  Afterwards
        // iterate through all of  the entities on the map and any that are on a space specified
        // by an item in the cache, update the visibility.  This is done instead of iterating
        // all of the entities every time inside the inner loop for just the entities on a particular tile
        //
        // Another way of doing it would be to create a list of entities up front within the radius and
        // use that in the innter loop
        var cache = [];
        this.fov.compute(viewerPos[0], viewerPos[1], radius, function (x, y, distFromCenter, visibility) {
            if (mapData.inBounds(x, y)) {
                var tile = mapData.getTile(x, y);
                if (tile.terrainType !== MapData_1.default.TILE_NONE) {
                    triggerEvent.trigger(tile.node, 'onUpdateFov', visibility);
                    cache[x + ',' + y] = visibility;
                }
            }
        });
        var visibility;
        mapData.iterateEntities(function (entity) {
            visibility = cache[entity.x + ',' + entity.y];
            if (typeof (visibility) !== 'undefined') {
                triggerEvent.trigger(entity.node, 'onUpdateFov', visibility);
            }
        });
    };
    LevelRenderer2D.prototype.onUpdateFov = function (heroPos, radius, mapData) {
        this.updateFov(heroPos, radius, mapData);
    };
    LevelRenderer2D.prototype.onClear = function () {
        for (var i = 0; i < this.children.length; i++) {
            Atomic.destroy(this.children[i]);
        }
        this.children = [];
    };
    LevelRenderer2D.prototype.update = function () {
        //var camera = game.camera;
        //var pos = game.cameraNode.position2D;
        //pos[1] -= 4;
        //node.position2D = pos;
        //var zoom = camera.zoom;
        //node.scale2D = [zoom, zoom];
    };
    return LevelRenderer2D;
}(CustomJSComponent_1.default));
module.exports = LevelRenderer2D;
