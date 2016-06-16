'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ROT = require('rot-js');
var MapData_1 = require('../../Modules/MapData');
var BaseLevelGenerator_1 = require('./BaseLevelGenerator');
var ROTRogue = (function (_super) {
    __extends(ROTRogue, _super);
    function ROTRogue() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: false,
            width: 80,
            height: 25,
            // options
            cellWidth: 3,
            cellHeight: 3
        };
        this.cellWidth = 3;
        this.cellHeight = 3;
    }
    /** @override */
    ROTRogue.prototype.buildMapData = function () {
        var _this = this;
        this.mapData = new MapData_1.default(this.width, this.height);
        if (this.debug) {
            console.log("Generating Terrain: ROT Rogue (" + this.width + " x " + this.height + ")");
            console.log('Options:');
            console.log('Cell Width: ' + this.cellWidth);
            console.log('Cell Height: ' + this.cellHeight);
        }
        var builder = new ROT.Map.Rogue(this.width, this.height, this);
        builder.create(function (x, y, value) {
            if (value) {
                return;
            } /* do not store walls */
            _this.mapData.setTile(x, y, MapData_1.default.buildTile(MapData_1.default.TILE_FLOOR));
        });
        this.processEdges();
        // TODO figure out doors for ROTRogue
        // this.placeDoors(builder.getRooms());
        this.placeCreatures(null);
        this.placeItems();
    };
    return ROTRogue;
}(BaseLevelGenerator_1.default));
module.exports = ROTRogue;
