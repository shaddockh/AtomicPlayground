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
/**
 * Simple component that will listen for trigger messages and report on them
 */
var TriggerDebug = (function (_super) {
    __extends(TriggerDebug, _super);
    function TriggerDebug() {
        var _this = _super.call(this) || this;
        _this.debug = true;
        return _this;
    }
    TriggerDebug.prototype.onAny = function (msg) {
        this.DEBUG("Got a message: " + msg);
    };
    return TriggerDebug;
}(CustomJSComponent_1.default));
exports.default = TriggerDebug;
