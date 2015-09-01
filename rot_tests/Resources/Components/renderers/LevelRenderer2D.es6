'use strict';
'atomic component';
import { nodeBuilder } from 'atomic-blueprintLib';
import MapData from 'MapData';

export default class ROTDigger extends Atomic.JSComponent {

    inspectorFields = {
        debug: [Atomic.VAR_BOOL, false],
        cellPixelSize: 16
    };

    children = [];

    renderMap(mapData) {
        let scale = this.cellPixelSize * Atomic.PIXEL_SIZE,
            offsetX = mapData.width / 2 * scale * -1,
            offsetY = mapData.height / 2 * scale * -1;

        var tilexref = {
            0: 'tile_floor_c',
            1: 'tile_floor_cl',
            2: 'tile_floor_cr',
            3: 'tile_floor_vcorridor_c',
            4: 'tile_floor_bc',
            5: 'tile_floor_bl',
            6: 'tile_floor_br',

            8: 'tile_floor_tc',
            9: 'tile_floor_tl',
            10: 'tile_floor_tr',

            12: 'tile_floor_hcorridor_c',

            defaultTile: 'tile_floor_c'
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
