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
var CustomJSComponent_1 = require("CustomJSComponent");
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inspectorFields = {
            debug: false
        };
        _this.mapEntity = null;
        _this.currentVisibility = null;
        return _this;
    }
    /**
     * Updates whether this tile is in the field of view of the player
     * @param {float} visibility the amount the tile is visible. from 0 - 1.  Full visibility is 1.0
     */
    Tile.prototype.onUpdateFov = function (visibility) {
        this.DEBUG("Setting visibility of tile at " + this.mapEntity.x + "," + this.mapEntity.y + " to " + visibility);
        if (visibility === 1) {
            this.mapEntity.seen = true;
        }
        if (this.mapEntity.seen) {
            visibility = 1;
        }
        // Cache the current visibility so that we don't mess with alpha every update
        if (this.currentVisibility === null || this.currentVisibility !== visibility) {
            this.node.getComponent('StaticSprite2D').setAlpha(this.mapEntity.seen ? 1.0 : visibility);
            this.currentVisibility = visibility;
        }
    };
    Tile.prototype.setMapReference = function (mapEntity) {
        mapEntity.node = this.node;
        mapEntity.tileComponent = this;
        this.mapEntity = mapEntity;
    };
    Tile.prototype.onDestroy = function () {
        this.mapEntity.node = null;
        this.mapEntity.tileComponent = null;
    };
    return Tile;
}(CustomJSComponent_1.default));
exports.default = Tile;
