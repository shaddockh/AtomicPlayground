"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CustomUIWindow_1 = require('./CustomUIWindow');
var gameChannels_1 = require('../Modules/gameChannels');
var EndGameUi = (function (_super) {
    __extends(EndGameUi, _super);
    function EndGameUi(uiView) {
        _super.call(this, uiView, 'Ui/endgame.ui.tb');
        this.channelTopics = {
            'hide:endgame': this.closeWindow,
            'bind:endgame': this.bindModel
        };
    }
    EndGameUi.prototype.openWindow = function (model) {
        var _this = this;
        _super.prototype.openWindow.call(this);
        var wnd = this.window;
        wnd.text = 'Game Over';
        this.txtEndGameReason = wnd.getWidget('txtEndGameReason');
        wnd.getWidget('btnGenerate').onClick = function () {
            _this.closeWindow();
            gameChannels_1.uiChannel.sendMessage('hide:hud');
            gameChannels_1.levelChannel.sendMessage('show:levelgen');
        };
        wnd.getWidget('btnExit').onClick = function () {
            _this.closeWindow();
            gameChannels_1.gameChannel.sendMessage('shutdown:game');
        };
        if (model) {
            this.bindModel(model);
        }
        wnd.center();
    };
    EndGameUi.prototype.bindModel = function (model) {
        this.txtEndGameReason.setText(model.endGameReason);
    };
    return EndGameUi;
}(CustomUIWindow_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EndGameUi;
