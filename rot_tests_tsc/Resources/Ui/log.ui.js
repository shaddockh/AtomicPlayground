"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CustomUIWindow_1 = require('./CustomUIWindow');
var Hud = (function (_super) {
    __extends(Hud, _super);
    function Hud(uiView) {
        _super.call(this, uiView, 'Ui/log.ui.tb');
        this.messageWindow = null;
        this.channelTopics = {
            'hide:log': this.closeWindow,
            'log:addmessage': this.addMessage
        };
    }
    Hud.prototype.openWindow = function () {
        _super.prototype.openWindow.call(this, {
            windowSettings: Atomic.UI_WINDOW_SETTINGS_NONE
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Hud;
