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
var ROT = require("rot-js");
var MapData_1 = require("../../Modules/MapData");
var BaseLevelGenerator_1 = require("./BaseLevelGenerator");
var ROTUniform = (function (_super) {
    __extends(ROTUniform, _super);
    function ROTUniform() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inspectorFields = {
            debug: false,
            width: 80,
            height: 25,
            // options
            roomWidth: [Atomic.VariantType.VAR_VECTOR2, [3, 9]],
            /* room minimum and maximum width */
            roomHeight: [Atomic.VariantType.VAR_VECTOR2, [3, 5]],
            /* we stop after this percentage of level area has been dug out */
            roomDugPercentage: 0.1,
            /* we stop after this much time has passed (msec) */
            timeLimit: 1000
        };
        _this.roomWidth = [3, 9];
        _this.roomHeight = [3, 5];
        _this.roomDugPercentage = 0.1;
        _this.timeLimit = 1000;
        return _this;
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
}(BaseLevelGenerator_1.default));
exports.default = ROTUniform;
