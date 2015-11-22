'use strict';
'atomic component';
import ROT = require('rot-js');
import { nodeBuilder } from 'atomic-blueprintLib';
import MapData from '../../Modules/MapData';
import * as triggerEvent from 'atomicTriggerEvent';
import CustomJSComponent from 'CustomJSComponent';
import gameState from '../../Modules/gameState';
import Entity = require('../common/Entity'); // Need to use 'require' when pulling in a component because they are exported differently
import Tile = require('../common/Tile'); // Need to use 'require' when pulling in a component because they are exported differently

class LevelRenderer2D extends CustomJSComponent {

    inspectorFields = {
        debug: false,
        cellPixelSize: 16,
        theme: 'tile_floor'
    };

    cellUnitSize: number;
    cellPixelSize: number = 16;
    mapData:MapData = null;
    theme: string = 'tile_floor';

    private children = [];
    private fov;

    start() {
        gameState.setCurrentLevelRenderer(this);
        this.cellUnitSize = this.cellPixelSize * Atomic.PIXEL_SIZE;
    }

    renderMap(mapData:MapData) {
        this.mapData = mapData;
        let scale = this.cellPixelSize * Atomic.PIXEL_SIZE,
            offsetX = mapData.width / 2 * scale * -1,
            offsetY = mapData.height / 2 * scale * -1;

        // TODO: this theming system needs to take into account
        // rooms, walls, and other features.  This means that
        // a specific list of features needs to be created.
        // possible algorithm:  {theme}_{tileType}_{cornerId}
        const tilexref = {
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

        let blueprint = '';

        mapData.iterateMap((x, y, tile) => {
            if (tile.terrainType !== MapData.TILE_NONE) {
                blueprint = tile.blueprint || tilexref[tile.edge] || tilexref.defaultTile;
                this.DEBUG(`Construction cell [${x},${y}] - ${blueprint}`);
                let tileNode = nodeBuilder.createChildAtPosition(this.node, blueprint, [x * scale, y * scale]);
                let tileComponent = tileNode.getJSComponent<Tile>('Tile');
                if (tileComponent) {
                    tileComponent.setMapReference(tile);
                }
                this.children.push(tileNode);
            }
        });

        mapData.iterateEntities((entity) => {
            if (entity.blueprint) {
                blueprint = entity.blueprint;
                this.DEBUG(`Constructing entity [${entity.x},${entity.y}] - ${blueprint}`);
                let entityNode = nodeBuilder.createChildAtPosition(this.node, blueprint, [entity.x * scale, entity.y * scale]);
                let entityComponent = entityNode.getJSComponent<Entity>('Entity');
                if (entityComponent) {
                    entityComponent.setMapReference(entity);
                }
                this.children.push(entityNode);
            }
        });

        this.node.position2D = [offsetX, offsetY];
    }

    /**
     * add a visual effect at world position (not grid position).
     * Note that this doesn't get added to a particular cells entity list..it's a visual effect only
     */
    addVisualEffect(blueprint, worldPos) {
        this.DEBUG(`Constructing effect [${worldPos[0]},${worldPos[1]}] - ${blueprint}`);
        let entityNode = nodeBuilder.createChildAtPosition(this.node, blueprint, [worldPos[0], worldPos[1]]);
        this.children.push(entityNode);
    }

    onLevelGenerated(mapData) {
        this.renderMap(mapData);
    }

    onRender(mapData) {
        this.DEBUG('LevelRenderer2D: onRender called');
        this.renderMap(mapData);
    }

    updateFov(viewerPos, radius, mapData) {

        // First time
        if (!this.fov) {
            // run through and set everything to out of view
            mapData.iterateMap((x, y, tile) => {
                if (tile.terrainType !== MapData.TILE_NONE) {
                    triggerEvent.trigger(tile.node, 'onUpdateFov', false);
                }
            });

            const blockLightEntities = {};
            mapData.iterateEntities(entity => {
                triggerEvent.trigger(entity.node, 'onUpdateFov', false);
                if (entity.entityComponent.blocksLight) {
                    blockLightEntities[entity.x + ',' + entity.y] = true;
                }
            });

            // TODO: PreciseShadowcasting is really too slow for web.  Probably need to switch based upon platform
            // this.fov = new ROT.FOV.PreciseShadowcasting((x, y) => {
            this.fov = new ROT.FOV.RecursiveShadowcasting((x, y) => {
                // returns whether the point at x,y blocks light
                if (mapData.inBounds(x, y)) {
                    if (mapData.getTile(x, y).blocksLight) {
                        return false;
                    } else {
                        if (blockLightEntities[x + ',' + y]) {
                            return false;
                        } else {
                            return true;
                        }
                    }
                } else {
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
        const cache = [];
        this.fov.compute(viewerPos[0], viewerPos[1], radius, (x, y, distFromCenter, visibility) => {
            if (mapData.inBounds(x, y)) {
                let tile = mapData.getTile(x, y);
                if (tile.terrainType !== MapData.TILE_NONE) {
                    triggerEvent.trigger(tile.node, 'onUpdateFov', visibility);
                    cache[x + ',' + y] = visibility;
                }
            }
        });

        let visibility;
        mapData.iterateEntities(entity => {
            visibility = cache[entity.x + ',' + entity.y];
            if (typeof (visibility) !== 'undefined') {
                triggerEvent.trigger(entity.node, 'onUpdateFov', visibility);
            }
        });
    }

    onUpdateFov(heroPos, radius, mapData) {
        this.updateFov(heroPos, radius, mapData);
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
export = LevelRenderer2D;
