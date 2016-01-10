'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CustomJSComponent_1 = require('CustomJSComponent');
var MapData_1 = require('../../Modules/MapData');
var triggerEvent = require('atomicTriggerEvent');
var gl_matrix_1 = require('gl-matrix');
var gameState_1 = require('../../Modules/gameState');
/* NOTE! THIS IS BROKEN! -- just here for reference */
var PhysicsMover = (function (_super) {
    __extends(PhysicsMover, _super);
    function PhysicsMover() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            speed: 1,
            debug: false
        };
        this.speed = 1;
    }
    PhysicsMover.prototype.start = function () {
        this.targetPos = this.node.position2D;
        this.startPos = this.node.position2D;
        this.moving = false;
        this.body = this.node.getComponent('RigidBody2D');
    };
    PhysicsMover.prototype.update = function () {
        if (this.moving) {
            var pos = this.node.position2D;
            var speed = (gameState_1.default.getCurrentLevelRenderer().cellPixelSize * Atomic.PIXEL_SIZE);
            var dist = [Math.abs(this.targetPos[0] - pos[0]), Math.abs(this.targetPos[1] - pos[1])];
            // this may not work, but what I'm trying to do is if the actor has stopped and
            // we aren't at our target position, then something may have happened, so let's go
            // back to our start position
            var linearVel = this.body.linearVelocity;
            if (linearVel[0] === 0 && linearVel[1] === 0) {
                if (Math.abs(this.targetPos[0] - pos[0]) > 0 || Math.abs(this.targetPos[1] - pos[1]) > 0) {
                    this.DEBUG("Could not get to position.  Resetting to " + this.startPos);
                    this.node.setPosition2D(this.startPos);
                    this.targetPos = this.startPos;
                    this.moving = false;
                    return;
                }
            }
            if (dist[0] > speed || dist[1] > speed) {
                //if (Math.abs(this.targetPos[0] - pos[0]) < 0.1 && Math.abs(this.targetPos[1] - pos[1]) < 0.1) {
                this.DEBUG('At position.  Stopping');
                this.body.linearVelocity = [0, 0];
                this.node.setPosition2D(this.targetPos);
                this.moving = false;
            }
        }
    };
    PhysicsMover.prototype.getMapPosition = function () {
        return this.node.getJSComponent('Entity').getPosition();
    };
    PhysicsMover.prototype.setMapPosition = function (pos) {
        this.node.getJSComponent('Entity').setPosition(pos);
    };
    PhysicsMover.prototype.onTryMove = function (vector2D) {
        var _this = this;
        // implement a way of queuing up actions
        if (this.moving) {
            if (gameState_1.default.getCurrentLevel().turnBased) {
                this.queuedVector = vector2D;
            }
            return;
        }
        this.queuedVector = null;
        this.adjustedSpeed = this.speed * gameState_1.default.getCurrentLevelRenderer().cellPixelSize;
        var unitSize = gameState_1.default.getCurrentLevelRenderer().cellUnitSize;
        var pos = (this.node.position2D);
        this.startPos = pos;
        this.targetPos = gl_matrix_1.vec2.add(gl_matrix_1.vec2.create(), pos, gl_matrix_1.vec2.scale(gl_matrix_1.vec2.create(), vector2D, unitSize));
        this.t = 0;
        // see if we can move into the next space
        var mapPos = this.getMapPosition();
        var newMapPos = gl_matrix_1.vec2.add(gl_matrix_1.vec2.create(), mapPos, vector2D);
        this.DEBUG("Current position: " + mapPos);
        this.DEBUG("Moving to: " + newMapPos);
        if (gameState_1.default.getCurrentLevel().getTileAt(newMapPos).terrainType !== MapData_1.default.TILE_FLOOR) {
            this.DEBUG('Blocked by terrain');
            return;
        }
        var blocked = false;
        gameState_1.default.getCurrentLevel().iterateEntitiesAt(newMapPos, function (entity) {
            if (entity.entityComponent) {
                if (entity.entityComponent.blocksPath) {
                    blocked = true;
                }
                if (entity.entityComponent.bumpable) {
                    triggerEvent.trigger(entity.node, 'onBump', _this, _this.node);
                }
            }
        });
        if (blocked) {
            this.DEBUG('Blocked by entity');
            return;
        }
        this.setMapPosition(newMapPos);
        triggerEvent.trigger(this.node, 'onMove');
        this.movementVector = vector2D;
        this.startPos = this.node.position2D;
        this.DEBUG("Moving to " + this.targetPos + " from " + this.startPos + ", vector = " + vector2D);
        this.moving = true;
        triggerEvent.trigger(this.node, 'onTurnTaken', this, this.node);
    };
    return PhysicsMover;
}(CustomJSComponent_1.default));
module.exports = PhysicsMover;
