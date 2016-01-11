'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MapData_1 = require('../../Modules/MapData');
var utils = require('../../Modules/utils');
var CustomJSComponent_1 = require('CustomJSComponent');
var CreatureGenerator = (function (_super) {
    __extends(CreatureGenerator, _super);
    function CreatureGenerator() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: false,
            creatureCount: [Atomic.VAR_INTVECTOR2, [0, 0]],
            creatureList: ['']
        };
        this.creatureCount = [0, 0];
        this.creatureList = [''];
        this.onPlaceCreatures = this.buildCreatures;
    }
    CreatureGenerator.prototype.buildCreatures = function (mapData /*, roomData*/) {
        for (var i = 0; i < utils.randomNumber(this.creatureCount[0], this.creatureCount[1]); i++) {
            // TODO if roomdata, then use that for storing creatures
            // TODO 2 maybe the map generator should place spawn points and then the creature generator can just use those
            var _a = mapData.getRandomEmptyPosition(), x = _a[0], y = _a[1];
            var entity = MapData_1.default.buildRandomEntity(this.creatureList);
            this.DEBUG("Adding " + entity.blueprint + " at " + (x, y));
            mapData.addEntityAtPosition(x, y, entity);
        }
    };
    return CreatureGenerator;
})(CustomJSComponent_1.default);
module.exports = CreatureGenerator;
