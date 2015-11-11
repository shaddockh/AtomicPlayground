'use strict';
'atomic component';

class TargetCameraController extends Atomic.JSComponent {
    inspectorFields = {
        debug: false,
        zoom: 1.5,
        autoFollow: false
    };

    /** amount to zoom the camera in */
    zoom:number = 1.5;

    /** automatically follow the target? */
    autoFollow:boolean = false;

    cameraTargetNode:Atomic.Node = null;
    camera:Atomic.Camera = null;
    cameraNode:Atomic.Node = null;

    onSetCameraTarget(target:Atomic.Node) {
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

            let [x, y, z] = <Array<number>>this.cameraTargetNode.position;
            this.cameraNode.position = [x - (this.camera.halfViewSize * this.camera.aspectRatio), y - this.camera.halfViewSize, z];

            if (!this.autoFollow) {
                this.cameraTargetNode = null;
            }
        }
    }
}

export = TargetCameraController;
