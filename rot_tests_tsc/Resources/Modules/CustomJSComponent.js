'use strict';
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
/**
 * This is a custom version of the JSComponent that adds some helper functions.
 * It could also be handled via extending the JSComponent.prototype, but that seems messy
 */
var CustomJSComponent = (function (_super) {
    __extends(CustomJSComponent, _super);
    function CustomJSComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inspectorFields = {
            debug: false
        };
        /**
         * Turn on or off debug for this component
         */
        _this.debug = false;
        _this._componentName = null;
        return _this;
    }
    /**
     * Write a debug message to the console prefixed by the component name
     * @param {string} msg Message to write to the console
     */
    CustomJSComponent.prototype.DEBUG = function (msg) {
        if (this.debug) {
            if (!this._componentName) {
                this._componentName = Atomic.splitPath(this.componentFile.name).fileName;
            }
            console.log(this.node.name + "." + this._componentName + ": " + msg);
        }
    };
    return CustomJSComponent;
}(Atomic.JSComponent));
exports.default = CustomJSComponent;
