'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../../typings/gl-matrix/gl-matrix.d.ts"/>
var CustomJSComponent_1 = require('CustomJSComponent');
var MapData_1 = require('../../Modules/MapData');
var gameState_1 = require('../../Modules/gameState');
var triggerEvent = require('atomicTriggerEvent');
var gl_matrix_1 = require('gl-matrix');
var GridMover = (function (_super) {
    __extends(GridMover, _super);
    function GridMover() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: false,
            // need speed to be 1 tile per speed per second.
            speed: 1,
            smoothMovement: true // jump from tile to tile or smoothly move between them
        };
        this.speed = 1;
        this.smoothMovement = true;
        this.postMoveActions = [];
        this.moving = false;
        this.blocked = false;
        this.bumping = false;
    }
    GridMover.prototype.queuePostMoveAction = function (action) {
        this.postMoveActions.push(action);
    };
    GridMover.prototype.executePostMoveActions = function () {
        while (this.postMoveActions.length) {
            // pull the actions off the queue and run it
            var action = this.postMoveActions.shift();
            action();
        }
    };
    Object.defineProperty(GridMover.prototype, "entity", {
        get: function () {
            return this.node.getJSComponent('Entity');
        },
        enumerable: true,
        configurable: true
    });
    GridMover.prototype.start = function () {
        this.targetPos = this.node.position2D;
        this.startPos = this.node.position2D;
        this.moving = false;
    };
    GridMover.prototype.update = function (timeStep) {
        // Let's keep track of our delay
        if (this.moving || this.bumping || this.blocked) {
            // We don't want to do anything except update our position while we are still inside the delay
            if (this.t < 1) {
                this.t = Math.min(this.t + timeStep /
                    (this.speed * gameState_1.default.getCurrentLevelRenderer().cellUnitSize), 1); // Sweeps from 0 to 1 in time seconds
                if (this.moving && this.smoothMovement) {
                    this.node.position2D = gl_matrix_1.vec2.lerp(gl_matrix_1.vec2.create(), this.startPos, this.targetPos, this.t);
                }
                // Let's bail until the next cycle
                return;
            }
            // We are now outside of our delay, let's finish up the action
            if (this.t >= 1) {
                if (this.moving) {
                    this.node.position2D = this.targetPos;
                }
                // Reset everything
                this.moving = false;
                this.bumping = false;
                this.blocked = false;
                this.executePostMoveActions();
            }
        }
    };
    GridMover.prototype.onTryMove = function (vector2D) {
        var _this = this;
        if (this.moving || this.bumping || this.blocked) {
            return;
        }
        this.DEBUG('Entering Move');
        var unitSize = gameState_1.default.getCurrentLevelRenderer().cellUnitSize;
        this.startPos = this.node.position2D;
        this.targetPos = gl_matrix_1.vec2.add(gl_matrix_1.vec2.create(), this.startPos, gl_matrix_1.vec2.scale(gl_matrix_1.vec2.create(), vector2D, unitSize));
        this.t = 0;
        // see if we can move into the next space
        var mapPos = this.entity.getPosition();
        var newMapPos = gl_matrix_1.vec2.add(gl_matrix_1.vec2.create(), mapPos, vector2D);
        this.DEBUG("Current position: " + mapPos[0] + "," + mapPos[1]);
        this.DEBUG("Moving to: " + newMapPos[0] + "," + newMapPos[1]);
        this.moving = true;
        // check to see if we are blocked
        // First see if we are blocked by terrain
        if (!gameState_1.default.getCurrentLevel().isValidPos(newMapPos) ||
            gameState_1.default.getCurrentLevel().getTileAt(newMapPos).terrainType !== MapData_1.default.TILE_FLOOR) {
            // Queue up an action to notify the player that the move is blocked
            this.queuePostMoveAction(function () {
                _this.DEBUG('Blocked by terrain');
                triggerEvent.trigger(_this.node, 'onLogAction', 'Blocked.');
                triggerEvent.trigger(_this.node, 'onMoveBlocked', mapPos, newMapPos);
                triggerEvent.trigger(_this.node, 'onMoveComplete');
            });
            this.blocked = true;
            this.moving = false;
        }
        else {
            gameState_1.default.getCurrentLevel().iterateEntitiesAt(newMapPos, function (entity) {
                // We are going to bump the top level entity if it's bumpable
                if (entity.entityComponent) {
                    if (entity.entityComponent.blocksPath) {
                        _this.blocked = true;
                        _this.moving = false;
                        _this.queuePostMoveAction(function () {
                            _this.DEBUG('Blocked by Entity');
                            triggerEvent.trigger(_this.node, 'onMoveBlocked', mapPos, newMapPos);
                            triggerEvent.trigger(_this.node, 'onMoveComplete');
                        });
                    }
                    if (entity.entityComponent.bumpable) {
                        // Let's exit the loop since we only want to deal with the first entity
                        triggerEvent.trigger(_this.node, 'onHandleBump', entity.node);
                        return false;
                    }
                    else {
                        return true;
                    }
                }
            });
        }
        if (this.moving) {
            this.movementVector = vector2D;
            this.startPos = this.node.position2D;
            this.DEBUG("Moving to " + this.targetPos + " from " + this.startPos + ", vector = " + vector2D);
            triggerEvent.trigger(this.node, 'onMoveStart', mapPos, newMapPos);
            // Queue up an action to notify that we are done moving.
            this.queuePostMoveAction(function () {
                _this.entity.setPosition(newMapPos);
                triggerEvent.trigger(_this.node, 'onMoveComplete');
            });
        }
    };
    return GridMover;
})(CustomJSComponent_1.default);
module.exports = GridMover;
