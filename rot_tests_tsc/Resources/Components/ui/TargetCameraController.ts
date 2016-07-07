'use strict';
'atomic component';
class ClampedLog {
    private lastLog: string;
    log(value) {
        if (value != this.lastLog) {
            console.log(value);
            this.lastLog = value;
        }
    }
}

class TargetCameraController extends Atomic.JSComponent {
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

    logger = new ClampedLog();

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

            let [x, y, z] = this.cameraTargetNode.position as number[];

            // Reverse the aspect ratio to get the vertical and horizontal size
            let camVertExtent = this.camera.orthoSize;
            let camHorzExtent = this.camera.aspectRatio * camVertExtent;
            /*
            let o = {
                vertExtent: camVertExtent,
                horzExtend: camHorzExtent,
                aspectRatio: this.camera.aspectRatio,
                orthoSize: this.camera.orthoSize,
                pixelSize: Atomic.PIXEL_SIZE,
                halfWidth: this.camera.halfViewSize,
                x: x - camHorzExtent * .55,
                y: y - camVertExtent * .28
            };
            //console.log(JSON.stringify(o));
            */

            //TODO: THIS IS THE WRONG WAY TO DO THIS, BUT IT SEEMS TO WORK.  NEED TO FIGURE OUT THE CORRECT WAY
            this.cameraNode.position = [x - camHorzExtent * .55, y - camVertExtent * 0.28, z];

            /*
            let screenHeight = 2 * this.camera.orthoSize;
            let screenWidth = screenHeight * this.camera.aspectRatio;
            let halfScreenWidth = screenWidth / 2;
            let halfScreenHeight = screenHeight / 2;

            //console.log(halfScreenWidth + " " +this.camera.halfViewSize );
            //this.cameraNode.position = [x - halfScreenWidth, y - halfScreenHeight, z];
            //this.cameraNode.position = [x - (this.camera.halfViewSize * this.camera.aspectRatio), y - this.camera.halfViewSize, z];
            //this.cameraNode.position = [x - (halfScreenWidth * this.camera.aspectRatio), y - halfScreenHeight, z];
            */


            if (!this.autoFollow) {
                this.cameraTargetNode = null;
            }
        }
    }
}

export = TargetCameraController;
