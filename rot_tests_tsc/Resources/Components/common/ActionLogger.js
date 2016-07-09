'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CustomJSComponent_1 = require('CustomJSComponent');
var gameChannels_1 = require('../../Modules/gameChannels');
var ActionLogger = (function (_super) {
    __extends(ActionLogger, _super);
    function ActionLogger() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: false
        };
    }
    ActionLogger.prototype.onLogAction = function (message, color) {
        gameChannels_1.uiChannel.sendMessage('log:addmessage', message, color);
    };
    return ActionLogger;
}(CustomJSComponent_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ActionLogger;
