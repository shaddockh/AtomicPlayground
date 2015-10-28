'use strict';
'atomic component';

export default class OverviewCameraController extends Atomic.JSComponent {
    inspectorFields = {
        debug: false,
        allowZoom: true,
        zoomIncrement: 0.05,
        allowPan: true
    };

    onRun() {
        this.enabled = false;
    }

    onChoose() {
        this.enabled = true;
    }

    update() {
        if (this.allowZoom) {
            const wheel = Atomic.input.getMouseMoveWheel();
            if (wheel) {
                this.node.scene.getMainCamera().zoom += this.zoomIncrement * wheel;
            }
        }

        //if (blueprint.pan) {
        //TODO: panning
        //}
    }
}
