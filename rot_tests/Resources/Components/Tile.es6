'use strict';
'atomic component';
import CustomJSComponent from 'CustomJSComponent';

export default class Tile extends CustomJSComponent {
    inspectorFields = {
        debug: false
    };

    mapEntity = null;

    /**
     * Updates whether this tile is in the field of view of the player
     * @param {float} visibility the amount the tile is visible. from 0 - 1.  Full visibility is 1.0
     */
    onUpdateFov(visibility) {
        this.DEBUG(`Setting visibility of tile at ${this.mapEntity.x},${this.mapEntity.y} to ${visibility}`);
        if (visibility == 1) {
            this.mapEntity.seen = true;
        }
        this.node.getComponent('StaticSprite2D').setAlpha( this.mapEntity.seen ? 1.0 : visibility);
    }

    setMapReference(mapEntity) {
        mapEntity.node = this.node;
        mapEntity.tileComponent = this;
        this.mapEntity = mapEntity;
    }

    onDestroy() {
        this.mapEntity.node = null;
        this.mapEntity.tileComponent = null;
    }
}