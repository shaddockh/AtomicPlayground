'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * This is a custom version of the JSComponent that adds some helper functions.
 * It could also be handled via extending the JSComponent.prototype, but that seems messy
 */
var CustomJSComponent = (function (_super) {
    __extends(CustomJSComponent, _super);
    function CustomJSComponent() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: false
        };
        /**
         * Turn on or off debug for this component
         */
        this.debug = false;
        this._componentName = null;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CustomJSComponent;
