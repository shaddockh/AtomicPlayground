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
var Hud = (function (_super) {
    __extends(Hud, _super);
    function Hud(uiView) {
        var _this = _super.call(this, uiView, 'Ui/log.ui.tb') || this;
        _this.messageWindow = null;
        _this.channelTopics = {
            'hide:log': _this.closeWindow,
            'log:addmessage': _this.addMessage
        };
        return _this;
    }
    Hud.prototype.openWindow = function () {
        _super.prototype.openWindow.call(this, {
            windowSettings: Atomic.UI_WINDOW_SETTINGS.UI_WINDOW_SETTINGS_NONE
        });
        var wnd = this.window;
        wnd.setRect([0, Atomic.graphics.height - 150, 300, Atomic.graphics.height - 50]);
        this.messageWindow = wnd.getWidget('txtMessages');
        this.messageWindow.setWrapping(true);
    };
    Hud.prototype.addMessage = function (message) {
        this.messageWindow.appendText(message + '\n');
        this.messageWindow.scrollTo(0, 0xffffff);
    };
    return Hud;
}(CustomUIWindow_1.default));
exports.default = Hud;
