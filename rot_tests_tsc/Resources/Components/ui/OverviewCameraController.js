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
var OverviewCameraController = (function (_super) {
    __extends(OverviewCameraController, _super);
    function OverviewCameraController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inspectorFields = {
            debug: false,
            allowZoom: true,
            zoomIncrement: 0.05,
            allowPan: true
        };
        /** allow the mouse wheel to control the zoom */
        _this.allowZoom = true;
        /** amount to zoom at each tick of the mouse wheel */
        _this.zoomIncrement = 0.05;
        return _this;
    }
    OverviewCameraController.prototype.onRun = function () {
        this.enabled = false;
    };
    OverviewCameraController.prototype.onChoose = function () {
        this.enabled = true;
    };
    OverviewCameraController.prototype.update = function () {
        if (this.allowZoom) {
            var wheel = Atomic.input.getMouseMoveWheel();
            if (wheel) {
                this.node.scene.getMainCamera().zoom += this.zoomIncrement * wheel;
            }
        }
        //if (blueprint.pan) {
        //TODO: panning
        //}
    };
    return OverviewCameraController;
}(Atomic.JSComponent));
exports.default = OverviewCameraController;
