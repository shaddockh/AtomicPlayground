'use strict';
'atomic component';
import CustomJSComponent from 'CustomJSComponent';
import gameState from '../../Modules/gameState';

/**
 * component that will trigger a message on startup based upon whether the current platform
 * is what is provided in the triggerPlatforms property.  Can also fire a message if the
 * platform does not match.
 */
export default class ShadowTile extends CustomJSComponent {
    inspectorFields = {
        platformDisable: [Atomic.VariantType.VAR_STRINGVECTOR, ['HTML5']],
        debug: false
    };

    platformDisable: Array<string> = ['HTML5'];

    start() {
        if (this.platformDisable.indexOf(Atomic.platform) === -1) {
            this.DEBUG('Enabling shadow tile for current platform.');
            const body = this.node.getOrCreateComponent<Atomic.RigidBody2D>('RigidBody2D');
            body.bodyType = Atomic.BodyType2D.BT_STATIC;
            body.castShadows = true;

            const box = this.node.getOrCreateComponent<Atomic.CollisionBox2D>('CollisionBox2D');
            box.size = [gameState.getCurrentLevelRenderer().cellUnitSize, gameState.getCurrentLevelRenderer().cellUnitSize];
        } else {
            this.DEBUG('Not enabling shadow tile for current platform.');
        }
    }
}
