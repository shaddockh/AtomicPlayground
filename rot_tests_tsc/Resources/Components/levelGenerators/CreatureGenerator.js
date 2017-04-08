'use strict';
'atomic component';
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
var MapData_1 = require("../../Modules/MapData");
var utils = require("../../Modules/utils");
var CustomJSComponent_1 = require("CustomJSComponent");
var CreatureGenerator = (function (_super) {
    __extends(CreatureGenerator, _super);
    function CreatureGenerator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inspectorFields = {
            debug: false,
            creatureCount: [Atomic.VariantType.VAR_VECTOR2, [0, 0]],
            creatureList: [Atomic.VariantType.VAR_STRING, '']
        };
        _this.creatureCount = [0, 0];
        _this.creatureList = '';
        _this.onPlaceCreatures = _this.buildCreatures;
        return _this;
    }
    CreatureGenerator.prototype.buildCreatures = function (mapData /*, roomData*/) {
        var creatures = this.creatureList.split(',');
        for (var i = 0; i < utils.randomNumber(this.creatureCount[0], this.creatureCount[1]); i++) {
            // TODO if roomdata, then use that for storing creatures
            // TODO 2 maybe the map generator should place spawn points and then the creature generator can just use those
            var _a = mapData.getRandomEmptyPosition(), x = _a[0], y = _a[1];
            var entity = MapData_1.default.buildRandomEntity(creatures);
            this.DEBUG("Adding " + entity.blueprint + " at " + x + "," + y);
            mapData.addEntityAtPosition(x, y, entity);
        }
    };
    return CreatureGenerator;
}(CustomJSComponent_1.default));
exports.default = CreatureGenerator;
