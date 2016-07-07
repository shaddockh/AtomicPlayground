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
var ROTCellular = (function (_super) {
    __extends(ROTCellular, _super);
    function ROTCellular() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: false,
            width: 80,
            height: 25,
            iterations: 3,
            randomization: 0.9,
            /*List of neighbor counts for a new cell to be born in empty space*/
            // TODO: currently limited to an array of 4 here
            born: [Atomic.VAR_BUFFER, [5, 6, 7, 8]],
            /*List of neighbor counts for an existing  cell to survive*/
            // TODO: currently limited to an array of 4 here
            survive: [Atomic.VAR_BUFFER, [4, 5, 6, 7 /*, 8*/]],
            /*Topology 4 or 6 or 8*/
            topology: 8,
            connected: false
        };
        this.iterations = 3;
        this.born = [5, 6, 7, 8];
        this.randomization = 0.9;
        this.survive = [4, 5, 6, 7];
        this.topology = 8;
        this.connected = false;
    }
    /** @override */
    ROTCellular.prototype.buildMapData = function () {
        var _this = this;
        this.mapData = new MapData_1.default(this.width, this.height);
        if (this.debug) {
            console.log("Generating Terrain: ROT Cellular Automata (" + this.width + " x " + this.height + ")");
            console.log('Options:');
            console.log('Iterations: ' + this.iterations);
            console.log('Randomization: ' + this.randomization);
            console.log('Born: ' + this.born.join(','));
            console.log('Survive: ' + this.survive.join(','));
            console.log('Topology: ' + this.topology);
            console.log('Connected: ' + this.connected);
        }
        var builder = new ROT.Map.Cellular(this.width, this.height, this);
        builder.randomize(this.randomization);
        // run through iterations until we are about to reach the last iteration
        for (var i = 0; i < this.iterations - 1; i++) {
            builder.create(null);
        }
        // Capture the final iteration
        builder.create(function (x, y, value) {
            if (value) {
                return;
            } /* do not store walls */
            _this.mapData.setTile(x, y, MapData_1.default.buildTile(MapData_1.default.TILE_FLOOR));
        });
        this.processEdges();
        // no rooms
        // this.placeDoors(builder.getRooms());
        this.placeCreatures();
        this.placeItems();
    };
    return ROTCellular;
}(BaseLevelGenerator_1.default));
module.exports = ROTCellular;
