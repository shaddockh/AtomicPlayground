'use strict';
'atomic component';
import ROT from 'rot-js';
import { nodeBuilder } from 'atomic-blueprintLib';
import MapData from 'MapData';
import * as triggerEvent from 'atomicTriggerEvent';
import CustomJSComponent from 'CustomJSComponent';

export default class LevelRenderer2D extends CustomJSComponent {

    inspectorFields = {
        debug: false,
        cellPixelSize: 16,
        theme: 'tile_floor'
    };

    mapData = null;

    children = [];

    start() {
        this.node.scene.LevelRenderer = this;
        this.cellUnitSize = this.cellPixelSize * Atomic.PIXEL_SIZE;
    }

    renderMap(mapData) {
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
                let tileComponent = tileNode.getJSComponent('Tile');
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
                let entityComponent = entityNode.getJSComponent('Entity');
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
            this.fov = new ROT.FOV.PreciseShadowcasting((x, y) => {
            //this.fov = new ROT.FOV.RecursiveShadowcasting((x, y) => {
                // returns whether the point at x,y blocks light
                if (mapData.inBounds(x, y)) {
                    if (mapData.getTile(x, y).blocksLight) {
                        return false;
                    } else {
                        let canSee = true;
                        mapData.iterateEntitiesAt(x, y, (entity) => {
                            if (entity.entityComponent.blocksLight) {
                                canSee = false;
                                return false; //break out
                            }
                        });
                        return canSee;
                    }
                } else {
                    return false;
                }
            });

            // run through and set everything to out of view
            mapData.iterateMap((x,y,tile) => {
                if (tile.terrainType !== MapData.TILE_NONE) {
                    triggerEvent.trigger(tile.node, 'onUpdateFov', false );
                    mapData.iterateEntitiesAt(x, y, (entity) => {
                        triggerEvent.trigger(entity.node, 'onUpdateFov', false );
                    });
                }
            });

        }

        this.DEBUG('Calculating FOV');
        this.fov.compute(viewerPos[0], viewerPos[1], radius, (x, y, distFromCenter, visibility) => {
            if (mapData.inBounds(x, y)) {
                let tile = mapData.getTile(x, y);
                if (tile.terrainType !== MapData.TILE_NONE) {
                    triggerEvent.trigger(tile.node, 'onUpdateFov', visibility);
                    mapData.iterateEntitiesAt(x, y, (entity) => {
                        triggerEvent.trigger(entity.node, 'onUpdateFov', visibility);
                    });
                } 
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
