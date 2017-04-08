'use strict';
'atomic component';

export default class TargetCameraController extends Atomic.JSComponent {
    inspectorFields = {
        debug: false,
        zoom: 1.5,
        autoFollow: true
    };

    /** amount to zoom the camera in */
    zoom: number = 1.5;

    /** automatically follow the target? */
    autoFollow: boolean = false;

    cameraTargetNode: Atomic.Node = null;
    camera: Atomic.Camera = null;
    cameraNode: Atomic.Node = null;

    onSetCameraTarget(target: Atomic.Node) {
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

            // Set the camera to the world position of the target since the target may be a child of another node
            this.cameraNode.worldPosition = this.cameraTargetNode.worldPosition;
            if (!this.autoFollow) {
                this.cameraTargetNode = null;
            }
        }
    }
}
