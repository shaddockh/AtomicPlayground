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
var ItemGenerator = (function (_super) {
    __extends(ItemGenerator, _super);
    function ItemGenerator() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: false,
            itemCount: [Atomic.VAR_VECTOR2, [0, 0]],
            itemList: ''
        };
        this.itemCount = [0, 0];
        this.itemList = '';
        this.onPlaceItems = this.buildItems;
    }
    ItemGenerator.prototype.buildItems = function (mapData /*, roomData*/) {
        var items = this.itemList.split(',');
        for (var i = 0; i < utils.randomNumber(this.itemCount[0], this.itemCount[1]); i++) {
            // TODO if roomdata, then use that for storing items
            // TODO 2 maybe the map generator should place spawn points and then the item generator can just use those
            var _a = mapData.getRandomEmptyPosition(), x = _a[0], y = _a[1];
            var entity = MapData_1.default.buildRandomEntity(items);
            this.DEBUG("Adding " + entity.blueprint + " at " + (x, y));
            mapData.addEntityAtPosition(x, y, entity);
        }
    };
    return ItemGenerator;
}(CustomJSComponent_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ItemGenerator;
