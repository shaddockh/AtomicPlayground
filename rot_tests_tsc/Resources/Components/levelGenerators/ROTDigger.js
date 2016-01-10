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
var ROTDigger = (function (_super) {
    __extends(ROTDigger, _super);
    function ROTDigger() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: false,
            width: 80,
            height: 25,
            // Digger options
            roomWidth: [Atomic.VAR_VECTOR2, [3, 9]],
            /* room minimum and maximum width */
            roomHeight: [Atomic.VAR_VECTOR2, [3, 5]],
            /* room minimum and maximum height */
            corridorLength: [Atomic.VAR_VECTOR2, [3, 10]],
            /* corridor minimum and maximum length */
            dugPercentage: 0.2,
            /* we stop after this percentage of level area has been dug out */
            timeLimit: 1000 /* we stop after this much time has passed (msec) */
        };
        this.roomWidth = [3, 9];
        this.roomHeight = [3, 5];
        this.corridorLength = [3, 10];
        this.dugPercentage = 0.2;
        this.timeLimit = 1000;
    }
    /** @override */
    ROTDigger.prototype.buildMapData = function () {
        var _this = this;
        this.mapData = new MapData_1.default(this.width, this.height);
        if (this.debug) {
            console.log("Generating Terrain: ROT Digger (" + this.width + " x " + this.height + ")");
            console.log('Options:');
            console.log(this.roomWidth);
            console.log(this.roomHeight);
            console.log(this.corridorLength);
            console.log(this.dugPercentage);
            console.log(this.timeLimit);
        }
        var builder = new ROT.Map.Digger(this.width, this.height, this);
        builder.create(function (x, y, value) {
            if (value) {
                return;
            } /* do not store walls */
            _this.mapData.setTile(x, y, MapData_1.default.buildTile(MapData_1.default.TILE_FLOOR));
        });
        this.processEdges();
        this.placeDoors(builder.getRooms());
        this.placeCreatures(builder.getRooms());
        this.placeItems(builder.getRooms());
    };
    return ROTDigger;
}(BaseLevelGenerator_1.default));
module.exports = ROTDigger;
