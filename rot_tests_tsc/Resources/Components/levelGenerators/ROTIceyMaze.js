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
var ROTIceyMaze = (function (_super) {
    __extends(ROTIceyMaze, _super);
    function ROTIceyMaze() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inspectorFields = {
            debug: false,
            width: 80,
            height: 25,
            regularity: 0
        };
        _this.regularity = 0;
        return _this;
    }
    /** @override */
    ROTIceyMaze.prototype.buildMapData = function () {
        var _this = this;
        this.mapData = new MapData_1.default(this.width, this.height);
        if (this.debug) {
            console.log("Generating Terrain: ROT Icey Maze (" + this.width + " x " + this.height + ")");
            console.log('Options:');
            console.log('Regularity: ' + this.regularity);
        }
        var builder = new ROT.Map.IceyMaze(this.width, this.height, this);
        builder.create(function (x, y, value) {
            if (value) {
                return;
            } /* do not store walls */
            _this.mapData.setTile(x, y, MapData_1.default.buildTile(MapData_1.default.TILE_FLOOR));
        });
        this.processEdges();
        // no rooms
        // this.placeDoors(builder.getRooms());
        this.placeCreatures(null);
        this.placeItems();
    };
    return ROTIceyMaze;
}(BaseLevelGenerator_1.default));
exports.default = ROTIceyMaze;
