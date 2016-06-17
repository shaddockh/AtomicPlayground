"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var gameChannels_1 = require('../Modules/gameChannels');
var CustomUIWindow_1 = require('./CustomUIWindow');
var LevelGenSelector = (function (_super) {
    __extends(LevelGenSelector, _super);
    function LevelGenSelector(uiView) {
        _super.call(this, uiView, 'Ui/levelgen_selector.ui.tb');
        this.runButton = null;
        this.channelTopics = {
            'hide:levelGen': this.closeWindow
        };
    }
    LevelGenSelector.prototype.openWindow = function (blueprints) {
        var _this = this;
        _super.prototype.openWindow.call(this);
        var wnd = this.window;
        wnd.setRect([0, 0, 300, Atomic.graphics.height]);
        wnd.text = 'Select a Generator to build a level with:';
        var selectList = wnd.getWidget('selGenerators');
        var selectSource = new Atomic.UISelectItemSource();
        for (var i = 0; i < blueprints.length; i++) {
            selectSource.addItem(new Atomic.UISelectItem(blueprints[i].name, blueprints[i].name));
        }
        selectList.setSource(selectSource);
        this.runButton = wnd.getWidget('btnRun');
        this.runButton.subscribeToEvent(this.runButton, 'WidgetEvent', function (eventData) {
            if (eventData.type !== Atomic.UI_EVENT_TYPE_CLICK) {
                return;
            }
            gameChannels_1.levelChannel.sendMessage('run:level', selectList.selectedItemID);
            _this.runButton.setState(Atomic.UI_WIDGET_STATE_DISABLED, true);
            _this.closeWindow();
        });
        var button = wnd.getWidget('btnGenerate');
        button.subscribeToEvent(button, 'WidgetEvent', function (eventData) {
            if (eventData.type !== Atomic.UI_EVENT_TYPE_CLICK) {
                return;
            }
            gameChannels_1.levelChannel.sendMessage('preview:level', selectList.selectedItemID);
            _this.runButton.setState(Atomic.UI_WIDGET_STATE_DISABLED, false);
        });
    };
    return LevelGenSelector;
}(CustomUIWindow_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LevelGenSelector;
