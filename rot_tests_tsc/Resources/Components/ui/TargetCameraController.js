'use strict';
'atomic component';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TargetCameraController = (function (_super) {
    __extends(TargetCameraController, _super);
    function TargetCameraController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inspectorFields = {
            debug: false,
            zoom: 1.5,
            autoFollow: true
        };
        /** amount to zoom the camera in */
        _this.zoom = 1.5;
        /** automatically follow the target? */
        _this.autoFollow = false;
        _this.cameraTargetNode = null;
        _this.camera = null;
        _this.cameraNode = null;
        return _this;
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
            // Set the camera to the world position of the target since the target may be a child of another node
            this.cameraNode.worldPosition = this.cameraTargetNode.worldPosition;
            if (!this.autoFollow) {
                this.cameraTargetNode = null;
            }
        }
    };
    return TargetCameraController;
}(Atomic.JSComponent));
exports.default = TargetCameraController;
