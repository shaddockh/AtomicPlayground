'use strict';
'atomic component';

export default class OverviewCameraController extends Atomic.JSComponent {
    inspectorFields = {
        allowZoom: true,
        zoomIncrement: 0.05,
        allowPan: true
    };

    update(timeStep) {
        if (this.allowZoom) {
            var wheel = Atomic.input.getMouseMoveWheel();
            if (wheel) {
                this.scene.camera.zoom += this.zoomIncrement * wheel;
            }
        }

        //if (blueprint.pan) {
        //TODO: panning
        //}
    }
}
