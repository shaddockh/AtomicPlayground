'use strict';
'atomic component';
import CustomJSComponent from 'CustomJSComponent';

/**
 * component that will trigger a message on startup based upon whether the current platform
 * is what is provided in the triggerPlatforms property.  Can also fire a message if the 
 * platform does not match.
 */
export default class ShadowTile extends CustomJSComponent {
    inspectorFields = {
        platformDisable: ['HTML5'],
        debug: false
    };

    start() {
        if (this.platformDisable.indexOf(Atomic.platform) === -1) {
            this.DEBUG('Enabling shadow tile for current platform.');
            const body = this.node.getOrCreateComponent('RigidBody2D');
            body.bodyType = Atomic.BT_STATIC;
            body.castShadows = true;

            const box = this.node.getOrCreateComponent('CollisionBox2D');
            box.size = [this.scene.LevelRenderer.cellUnitSize, this.scene.LevelRenderer.cellUnitSize];
        } else {
            this.DEBUG('Not enabling shadow tile for current platform.');
        }
    }
}
