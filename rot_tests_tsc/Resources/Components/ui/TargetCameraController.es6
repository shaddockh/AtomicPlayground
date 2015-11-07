'use strict';
'atomic component';

export default class TargetCameraController extends Atomic.JSComponent {
    inspectorFields = {
        debug: false,
        zoom: 1.5,
        autoFollow: false
    };

    cameraTargetNode = null;
    camera = null;
    cameraNode = null;

    onSetCameraTarget(target) {
        this.cameraTargetNode = target;
        if (target) {
            this.camera = this.node.scene.getMainCamera();
            this.cameraNode = this.camera.node;
        } else {
            this.cameraNode = null;
            this.camera = null;
        }
    }

    update(/*timestep*/) {
        if (this.cameraTargetNode) {
            this.camera.zoom = this.zoom;

            let [x, y, z] = this.cameraTargetNode.position;
            this.cameraNode.position = [x - (this.camera.halfViewSize * this.camera.aspectRatio), y - this.camera.halfViewSize, z];

            if (!this.autoFollow) {
                this.cameraTargetNode = null;
            }
        }
    }
}
