'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CustomJSComponent_1 = require('CustomJSComponent');
/**
 * Simple component that will listen for trigger messages and report on them
 */
var TriggerDebug = (function (_super) {
    __extends(TriggerDebug, _super);
    function TriggerDebug() {
        _super.call(this);
        this.debug = true;
    }
    TriggerDebug.prototype.onAny = function (msg) {
        this.DEBUG("Got a message: " + msg);
    };
    return TriggerDebug;
})(CustomJSComponent_1.default);
module.exports = TriggerDebug;
