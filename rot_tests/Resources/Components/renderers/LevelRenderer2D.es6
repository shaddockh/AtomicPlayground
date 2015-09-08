'use strict';
'atomic component';
import { nodeBuilder } from 'atomic-blueprintLib';
import MapData from 'MapData';

export default class LevelRenderer2D extends Atomic.JSComponent {

    inspectorFields = {
        debug: false,
        cellPixelSize: 16,
        theme: 'tile_floor'
    };

    children = [];

    start() {
        this.node.scene.LevelRenderer = this;
        this.cellUnitSize = this.cellPixelSize * Atomic.PIXEL_SIZE;
    }

    renderMap(mapData) {
        let scale = this.cellPixelSize * Atomic.PIXEL_SIZE,
            offsetX = mapData.width / 2 * scale * -1,
            offsetY = mapData.height / 2 * scale * -1;

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

        let blueprint = '';

        mapData.iterateMap((x, y, tile) => {
            if (tile.terrainType !== MapData.TILE_NONE) {
                blueprint = tile.blueprint || tilexref[tile.edge] || tilexref.defaultTile;
                this.DEBUG(`Construction cell [${x},${y}] - ${blueprint}`);
                this.children.push(nodeBuilder.createChildAtPosition(this.node, blueprint, [x * scale, y * scale]));
            }
        });

        for (let x = 0, xEnd = mapData.entities.length; x < xEnd; x++) {
            let entity = mapData.entities[x];
            if (entity.blueprint) {
                blueprint = entity.blueprint;
                this.DEBUG(`Constructing entity [${entity.x},${entity.y}] - ${blueprint}`);
                let entityNode = nodeBuilder.createChildAtPosition(this.node, blueprint, [entity.x * scale, entity.y * scale]);
                let entityComponent = entityNode.getJSComponent('Entity');
                if (entityComponent) {
                    entityComponent.setMapEntityReference(entity);
                }
                this.children.push(entityNode);
            }
        }
        this.node.position2D = [offsetX, offsetY];
    }
    onLevelGenerated(mapData) {
        this.renderMap(mapData);
    }

    onRender(mapData) {
        this.DEBUG('LevelRenderer2D: onRender called');
        this.renderMap(mapData);
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

    DEBUG(msg) {
        if (this.debug) {
            console.log(`LevelRenderer2D: ${msg}`);
        }
    }
}
