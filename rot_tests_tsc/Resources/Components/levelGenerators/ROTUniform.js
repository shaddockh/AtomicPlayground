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
var ROTUniform = (function (_super) {
    __extends(ROTUniform, _super);
    function ROTUniform() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: false,
            width: 80,
            height: 25,
            // options
            roomWidth: [Atomic.VAR_VECTOR2, [3, 9]],
            /* room minimum and maximum width */
            roomHeight: [Atomic.VAR_VECTOR2, [3, 5]],
            /* we stop after this percentage of level area has been dug out */
            roomDugPercentage: 0.1,
            /* we stop after this much time has passed (msec) */
            timeLimit: 1000
        };
        this.roomWidth = [3, 9];
        this.roomHeight = [3, 5];
        this.roomDugPercentage = 0.1;
        this.timeLimit = 1000;
    }
    /** @override */
    ROTUniform.prototype.buildMapData = function () {
        var _this = this;
        this.mapData = new MapData_1.default(this.width, this.height);
        if (this.debug) {
            console.log("Generating Terrain: ROT Uniform (" + this.width + " x " + this.height + ")");
            console.log('Options:');
            console.log(this.roomWidth);
            console.log(this.roomHeight);
            console.log(this.roomDugPercentage);
            console.log(this.timeLimit);
        }
        var builder = new ROT.Map.Uniform(this.width, this.height, this);
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
    return ROTUniform;
})(BaseLevelGenerator_1.default);
module.exports = ROTUniform;
