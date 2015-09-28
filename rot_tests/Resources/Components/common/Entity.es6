'use strict';
'atomic component';
import CustomJSComponent from 'CustomJSComponent';

export default class Entity extends CustomJSComponent {
    inspectorFields = {
        debug: false,
        blocksPath: false,
        blocksLight: false,
        bumpable: false,
        attackable: false,
        fovRemember: false,
        screenName: 'entity'
    };

    /** once seen, don't hide when leaving field of view */
    fovRemember = false;

    mapEntity = null;

    /** has this entity been seen by the player yet? */
    seen = false;

    getPosition() {
        return [this.mapEntity.x, this.mapEntity.y];
    }

    setPosition(pos) {
        this.mapEntity.x = pos[0];
        this.mapEntity.y = pos[1];
    }

    setMapReference(mapEntity) {
        mapEntity.node = this.node;
        mapEntity.entityComponent = this;
        this.mapEntity = mapEntity;
    }

    /**
     * Updates whether this entity is in the field of view of the player
     */
    onUpdateFov(visibility) {
        this.DEBUG(`Setting visibility of entity at ${this.mapEntity.x},${this.mapEntity.y} to ${visibility}`);
        if (visibility === 1 || (this.fovRemember && this.seen)) {
            this.node.getComponent('StaticSprite2D').setAlpha(1);
            this.seen = true;
        } else {
            this.node.getComponent('StaticSprite2D').setAlpha(visibility);
        }
    }

    onDestroy() {
        this.mapEntity.entityComponent= null;
        this.mapEntity.node = null;
        this.scene.Level.mapData.removeEntity(this.mapEntity);
    }
}
