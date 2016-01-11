'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CustomJSComponent_1 = require('CustomJSComponent');
var triggerEvent = require('atomicTriggerEvent');
var Health = (function (_super) {
    __extends(Health, _super);
    function Health() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: false,
            life: 1
        };
        this.life = 1;
    }
    Health.prototype.onHit = function (attackerComponent, attackerNode) {
        this.life--;
        // send a notification that health has changed
        triggerEvent.trigger(this.node, 'onHealthChanged', this, this.node);
        this.DEBUG("Bumped by: " + attackerComponent.node.name + " ");
        this.DEBUG("Life reduced.  Current Life: " + this.life + " ");
        if (this.life <= 0) {
            // send an onDie message as if it came from the bumper
            triggerEvent.trigger(this.node, 'onDie', attackerComponent, attackerNode);
        }
    };
    Health.prototype.onAdjustHealth = function (health) {
        this.life += health;
        triggerEvent.trigger(this.node, 'onHealthChanged', this, this.node);
    };
    return Health;
})(CustomJSComponent_1.default);
module.exports = Health;
