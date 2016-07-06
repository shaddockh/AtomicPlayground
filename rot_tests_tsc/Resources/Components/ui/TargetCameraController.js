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
    TargetCameraController.prototype.update = function () {
        if (this.cameraTargetNode) {
            this.camera.zoom = this.zoom;
            var _a = this.cameraTargetNode.position, x = _a[0], y = _a[1], z = _a[2];
            this.cameraNode.position = [x - (this.camera.halfViewSize * this.camera.aspectRatio), y - this.camera.halfViewSize, z];
            if (!this.autoFollow) {
                this.cameraTargetNode = null;
            }
        }
    };
    return TargetCameraController;
}(Atomic.JSComponent));
module.exports = TargetCameraController;
