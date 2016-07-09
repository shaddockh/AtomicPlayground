'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TargetCameraController = (function (_super) {
    __extends(TargetCameraController, _super);
    function TargetCameraController() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: false,
            zoom: 1.5,
            autoFollow: true
        };
        /** amount to zoom the camera in */
        this.zoom = 1.5;
        /** automatically follow the target? */
        this.autoFollow = false;
        this.cameraTargetNode = null;
        this.camera = null;
        this.cameraNode = null;
    }
    TargetCameraController.prototype.onSetCameraTarget = function (target) {
        this.cameraTargetNode = target;
        if (target) {
            this.camera = this.node.scene.getMainCamera();
            this.cameraNode = this.camera.node;
        }
        else {
            this.cameraNode = null;
            this.camera = null;
        }
    };
    TargetCameraController.prototype.oldupdate = function () {
        if (this.cameraTargetNode) {
            this.camera.zoom = this.zoom;
            var _a = this.cameraTargetNode.position, x = _a[0], y = _a[1], z = _a[2];
            // Reverse the aspect ratio to get the vertical and horizontal size
            var camVertExtent = this.camera.orthoSize;
            var camHorzExtent = this.camera.aspectRatio * camVertExtent;
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
    };
    TargetCameraController.prototype.update = function () {
        if (this.cameraTargetNode) {
            this.camera.zoom = this.zoom;
            // Set the camera to the world position of the target since the target may be a child of another node
            this.cameraNode.worldPosition = this.cameraTargetNode.worldPosition;
            if (!this.autoFollow) {
                this.cameraTargetNode = null;
            }
        }
    };
    return TargetCameraController;
}(Atomic.JSComponent));
module.exports = TargetCameraController;
