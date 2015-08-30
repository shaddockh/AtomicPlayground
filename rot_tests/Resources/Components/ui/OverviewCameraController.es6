'use strict';
'atomic component';

export default class OverviewCameraController extends Atomic.JSComponent {
    inspectorFields = {
        allowZoom: [Atomic.VAR_BOOL, true],
        zoomIncrement: 0.05,
        allowPan: [Atomic.VAR_BOOL, true]
    };

    update(timeStep) {
        if (this.allowZoom) {
            var wheel = Atomic.input.getMouseMoveWheel();
            if (wheel) {
                this.node.scene.getMainCamera().zoom += this.zoomIncrement * wheel;
            }
        }

        //if (blueprint.pan) {
        //TODO: panning
        //}
    }
}
