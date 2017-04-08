"use strict";
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
var CustomUIWindow_1 = require("./CustomUIWindow");
var InstructionsUi = (function (_super) {
    __extends(InstructionsUi, _super);
    function InstructionsUi(uiView) {
        var _this = _super.call(this, uiView, 'Ui/instructions.ui.tb') || this;
        _this.channelTopics = {
            'hide:instructions': _this.closeWindow
        };
        return _this;
    }
    InstructionsUi.prototype.openWindow = function () {
        var _this = this;
        _super.prototype.openWindow.call(this);
        var wnd = this.window;
        wnd.setRect([0, 0, 400, 300]);
        wnd.text = 'Instructions';
        wnd.getWidget('btnClose').onClick = function () {
            _this.closeWindow();
        };
        wnd.center();
    };
    return InstructionsUi;
}(CustomUIWindow_1.default));
exports.default = InstructionsUi;
