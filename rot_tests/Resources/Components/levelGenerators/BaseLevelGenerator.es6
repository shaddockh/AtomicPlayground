'use strict';
// 'noatomic component'; -- don't want to expose to the editor since this is more like an abstract base class
import * as triggerEvent from 'atomicTriggerEvent';
import MapData from 'MapData';
export default class BaseLevelGenerator extends Atomic.JSComponent {
    inspectorFields = {
        width: 80,
        height: 25
    };
    mapData = null;

    start() {
        this.generateLevel();
    }

    generateLevel() {
        this.buildMapData();
        triggerEvent.trigger(this.node, 'onLevelGenerated', this.mapData);
        return this.mapData;
    }

    /** overridable */
    buildMapData() {
        console.log('should not be called');
    }

    getNeighborSignature(x, y) {
        const tiles = this.mapData.tiles;
        let t = 0;
        // left edge
        if (x === 0 || tiles[x - 1][y].type !== MapData.TILE_FLOOR) {
            t += 1;
        }

        // right edge
        if (x === this.width - 1 || tiles[x + 1][y].type !== MapData.TILE_FLOOR) {
            t += 2;
        }

        // top edge
        if (y === 0 || tiles[x][y - 1].type !== MapData.TILE_FLOOR) {
            t += 4;
        }

        // bottom edge
        if (y === this.height - 1 || tiles[x][y + 1].type !== MapData.TILE_FLOOR) {
            t += 8;
        }

        // top left edge -- not right...commenting out
        //if (!inBounds(x-1,y-1) || tiles[x-1][y-1] !== TILE_FLOOR) {
        //t += 16;
        //}

        return t;
    }
}
