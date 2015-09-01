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

        let currentCell = 0;
        for (let x = 0; x < mapData.width; x++) {
            for (let y = 0; y < mapData.height; y++) {
                currentCell = mapData.tiles[x][y];
                if (currentCell.type !== MapData.TILE_NONE) {
                    if (this.debug) {
                        console.log(`Construction cell [${x},${y}] - ${currentCell}`);
                    }
                    this.children.push(nodeBuilder.createChildAtPosition(this.node, currentCell.blueprint, [x * scale, y * scale]));
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

