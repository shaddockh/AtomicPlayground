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
var gameChannels_1 = require("../Modules/gameChannels");
var Hud = (function (_super) {
    __extends(Hud, _super);
    function Hud(uiView) {
        var _this = _super.call(this, uiView, 'Ui/hud.ui.tb') || this;
        _this.channelTopics = {
            'hide:hud': _this.closeWindow,
            'bind:hud': _this.bindModel
        };
        return _this;
    }
    Hud.prototype.openWindow = function () {
        _super.prototype.openWindow.call(this, {
            windowSettings: Atomic.UI_WINDOW_SETTINGS.UI_WINDOW_SETTINGS_NONE
        });
        var wnd = this.window;
        wnd.setRect([0, Atomic.graphics.height - 50, Atomic.graphics.width, Atomic.graphics.height]);
        this.health = wnd.getWidget('txtHealth');
        this.enemies = wnd.getWidget('txtRemaining');
        this.turnCount = wnd.getWidget('txtTurnCount');
        gameChannels_1.uiChannel.sendMessage('show:log');
        gameChannels_1.uiChannel.sendMessage('show:instructions');
    };
    Hud.prototype.bindModel = function (model) {
        this.health.setText(model.health);
        this.enemies.setText(model.enemiesRemaining);
        this.turnCount.setText(model.turnCount);
    };
    Hud.prototype.closeWindow = function () {
        _super.prototype.closeWindow.call(this);
        gameChannels_1.uiChannel.sendMessage('hide:log');
    };
    return Hud;
}(CustomUIWindow_1.default));
exports.default = Hud;
