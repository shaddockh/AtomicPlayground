"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gameChannels_1 = require("../Modules/gameChannels");
/**
 * wrapper to be used for ui windows.  Will handle loading up the layout and
 * setting some properties.
 */
var CustomUIWindow = (function () {
    function CustomUIWindow(uiView, layoutFilename) {
        var _this = this;
        this.window = null;
        this.channelTopics = {};
        this.layoutFilename = null;
        this.uiView = null;
        this.layoutFilename = layoutFilename;
        this.uiView = uiView;
        this.channelId = gameChannels_1.uiChannel.subscribe(function (topic) {
            var messageParms = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                messageParms[_i - 1] = arguments[_i];
            }
            if (topic in _this.channelTopics) {
                _this.channelTopics[topic].apply(_this, messageParms);
            }
        });
    }
    CustomUIWindow.prototype.openWindow = function (options) {
        if (options === void 0) { options = {
            windowSettings: Atomic.UI_WINDOW_SETTINGS.UI_WINDOW_SETTINGS_TITLEBAR
        }; }
        var window = this.window = new Atomic.UIWindow();
        window.settings = options.windowSettings;
        window.load(this.layoutFilename);
        window.resizeToFitContent();
        this.uiView.addChild(window);
    };
    CustomUIWindow.prototype.closeWindow = function () {
        if (this.window) {
            this.window.die();
            this.window = null;
        }
        gameChannels_1.uiChannel.unsubscribe(this.channelId);
    };
    return CustomUIWindow;
}());
exports.default = CustomUIWindow;
