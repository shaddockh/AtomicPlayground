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
var CustomJSComponent_1 = require("../../Modules/CustomJSComponent");
var gameState_1 = require("../../Modules/gameState");
var Entity = (function (_super) {
    __extends(Entity, _super);
    function Entity() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inspectorFields = {
            debug: false,
            blocksPath: false,
            blocksLight: false,
            bumpable: false,
            attackable: false,
            fovRemember: false,
            screenName: 'entity'
        };
        _this.blocksPath = false;
        _this.blocksLight = false;
        _this.bumpable = false;
        _this.attackable = false;
        /** The displayable name of this entity */
        _this.screenName = 'entity';
        /** once seen, don't hide when leaving field of view */
        _this.fovRemember = false;
        _this.mapEntity = null;
        /** has this entity been seen by the player yet? */
        _this.seen = false;
        return _this;
    }
    Entity.prototype.getPosition = function () {
        return [this.mapEntity.x, this.mapEntity.y];
    };
    Entity.prototype.setPosition = function (pos) {
        this.mapEntity.x = pos[0];
        this.mapEntity.y = pos[1];
    };
    Entity.prototype.setMapReference = function (mapEntity) {
        mapEntity.node = this.node;
        mapEntity.entityComponent = this;
        this.mapEntity = mapEntity;
    };
    /**
     * Updates whether this entity is in the field of view of the player
     */
    Entity.prototype.onUpdateFov = function (visibility) {
        this.DEBUG("Setting visibility of entity at " + this.mapEntity.x + "," + this.mapEntity.y + " to " + visibility);
        if (visibility === 1 || (this.fovRemember && this.seen)) {
            this.node.getComponent('StaticSprite2D').setAlpha(1);
            this.seen = true;
        }
        else {
            this.node.getComponent('StaticSprite2D').setAlpha(visibility);
        }
    };
    Entity.prototype.onDestroy = function () {
        this.mapEntity.entityComponent = null;
        this.mapEntity.node = null;
        gameState_1.default.getCurrentLevel().mapData.removeEntity(this.mapEntity);
    };
    return Entity;
}(CustomJSComponent_1.default));
exports.default = Entity;
