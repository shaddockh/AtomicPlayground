'atomic component';
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
var blueprintlib = require("atomic-blueprintlib");
var triggerEvent = require("atomicTriggerEvent");
var gameChannels_1 = require("../../Modules/gameChannels");
var LevelGenerationChooser = (function (_super) {
    __extends(LevelGenerationChooser, _super);
    function LevelGenerationChooser() {
        var _this = _super.call(this) || this;
        _this.generatorNode = null;
        _this.runNode = null;
        _this.runButton = null;
        _this.generatorNode = null;
        _this.runNode = null;
        _this.runButton = null;
        return _this;
    }
    LevelGenerationChooser.prototype.start = function () {
        // NOTE: the fat arrow function doesn't work quite in the same way as babel, so need to capture 'this'
        var that = this;
        this.channelId = gameChannels_1.levelChannel.subscribe(function (topic) {
            var messages = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                messages[_i - 1] = arguments[_i];
            }
            switch (topic) {
                case 'preview:level':
                    that.previewLevel.apply(that, messages);
                    break;
                case 'run:level':
                    that.runLevel.apply(that, messages);
                    break;
                case 'show:levelgen':
                    that.showLevelGen.apply(that, messages);
                    break;
            }
        });
        this.showLevelGen();
    };
    LevelGenerationChooser.prototype.showLevelGen = function () {
        var blueprints = blueprintlib.catalog.find(function (blueprint) { return blueprint.inherits === 'baseLevelGenerator'; });
        gameChannels_1.uiChannel.sendMessage('show:levelgen', blueprints);
        triggerEvent.trigger(this.node, 'onChoose');
    };
    LevelGenerationChooser.prototype.previewLevel = function (builderName) {
        this.clearGeneratedContent();
        this.generatorNode = blueprintlib.createChild(this.node.scene, builderName);
    };
    LevelGenerationChooser.prototype.runLevel = function () {
        var mapData = triggerEvent.trigger(this.generatorNode, 'onGetMapData');
        // we are getting an array back, so grab the first element
        mapData = mapData[0];
        this.clearGeneratedContent();
        this.runNode = blueprintlib.createChild(this.node.scene, 'customLevelRunner');
        triggerEvent.trigger(this.runNode, 'onSetMapData', mapData);
        triggerEvent.trigger(this.node, 'onRun');
    };
    LevelGenerationChooser.prototype.clearGeneratedContent = function () {
        if (this.generatorNode) {
            // Tell the generator node to remove all it's children
            // TODO: think of a better way
            triggerEvent.trigger(this.generatorNode, 'onClear');
            Atomic.destroy(this.generatorNode);
            this.generatorNode = null;
        }
        if (this.runNode) {
            // Tell the generator node to remove all it's children
            // TODO: think of a better way
            triggerEvent.trigger(this.runNode, 'onClear');
            Atomic.destroy(this.runNode);
            this.runNode = null;
        }
    };
    return LevelGenerationChooser;
}(Atomic.JSComponent));
exports.default = LevelGenerationChooser;
