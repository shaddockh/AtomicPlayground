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
var gameState_1 = require("../../Modules/gameState");
/**
 * component that will trigger a message on startup based upon whether the current platform
 * is what is provided in the triggerPlatforms property.  Can also fire a message if the
 * platform does not match.
 */
var ShadowTile = (function (_super) {
    __extends(ShadowTile, _super);
    function ShadowTile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inspectorFields = {
            platformDisable: [Atomic.VariantType.VAR_STRINGVECTOR, ['HTML5']],
            debug: false
        };
        _this.platformDisable = ['HTML5'];
        return _this;
    }
    ShadowTile.prototype.start = function () {
        if (this.platformDisable.indexOf(Atomic.platform) === -1) {
            this.DEBUG('Enabling shadow tile for current platform.');
            var body = this.node.getOrCreateComponent('RigidBody2D');
            body.bodyType = Atomic.BodyType2D.BT_STATIC;
            body.castShadows = true;
            var box = this.node.getOrCreateComponent('CollisionBox2D');
            box.size = [gameState_1.default.getCurrentLevelRenderer().cellUnitSize, gameState_1.default.getCurrentLevelRenderer().cellUnitSize];
        }
        else {
            this.DEBUG('Not enabling shadow tile for current platform.');
        }
    };
    return ShadowTile;
}(CustomJSComponent_1.default));
exports.default = ShadowTile;
