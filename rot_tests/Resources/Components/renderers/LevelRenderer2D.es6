'use strict';
'atomic component';
import { nodeBuilder } from 'atomic-blueprintLib';
import MapData from 'MapData';

export default class LevelRenderer2D extends Atomic.JSComponent {

    inspectorFields = {
        debug: [Atomic.VAR_BOOL, false],
        cellPixelSize: 16,
        theme: 'tile_floor'
    };

    children = [];

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

        let tile = 0,
            blueprint = '';
        for (let x = 0; x < mapData.width; x++) {
            for (let y = 0; y < mapData.height; y++) {
                tile = mapData.tiles[x][y];
                if (tile.type !== MapData.TILE_NONE) {
                    blueprint = tilexref[tile.edge] || tilexref.defaultTile;
                    if (this.debug) {
                        console.log(`Construction cell [${x},${y}] - ${blueprint}`);
                    }
                    this.children.push(nodeBuilder.createChildAtPosition(this.node, blueprint, [x * scale, y * scale]));
                }
            }
        }
        this.node.position2D = [offsetX, offsetY];
    }
    onLevelGenerated(mapData) {
        this.renderMap(mapData);
    }

    onRender(mapData) {
        if (this.debug) {
            console.log('LevelRenderer2D: onRender called');
        }
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
}
