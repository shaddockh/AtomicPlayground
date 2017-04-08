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
var CustomJSComponent_1 = require("CustomJSComponent");
var gameState_1 = require("../../Modules/gameState");
//import * as triggerEvent from 'atomicTriggerEvent';
var GraphicEffect = (function (_super) {
    __extends(GraphicEffect, _super);
    function GraphicEffect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inspectorFields = {
            debug: false,
            duration: 1,
            speed: 1,
            zoom: true,
            zoomTo: 1,
            fadeOut: true
        };
        _this.t = 0;
        _this.duration = 1;
        _this.zoom = true;
        _this.zoomTo = 1;
        _this.fadeOut = true;
        _this.speed = 1;
        return _this;
    }
    GraphicEffect.prototype.start = function () {
        this.t = 0;
    };
    GraphicEffect.prototype.lerp = function (start, end, time) {
        return (start + time * (end - start));
    };
    GraphicEffect.prototype.update = function (timeStep) {
        var unitSize = gameState_1.default.getCurrentLevelRenderer().cellUnitSize;
        if (this.t < this.duration) {
            this.t = Math.min(this.t + timeStep / (this.speed * .1), this.duration); // Sweeps from 0 to duration in time seconds
            if (this.zoom) {
                var curScale = this.lerp(unitSize, this.zoomTo * unitSize, this.t);
                this.node.scale2D = [curScale, curScale];
            }
            if (this.fadeOut) {
                var alpha = this.lerp(0.0, 1.0, this.t / this.duration);
                this.node.getComponent('StaticSprite2D').setAlpha(1 - alpha);
            }
        }
        else {
            Atomic.destroy(this.node);
        }
    };
    return GraphicEffect;
}(CustomJSComponent_1.default));
exports.default = GraphicEffect;
