'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CustomJSComponent_1 = require('CustomJSComponent');
var MapData_1 = require('../../Modules/MapData');
var gameState_1 = require('../../Modules/gameState');
var triggerEvent = require('atomicTriggerEvent');
var gl_matrix_1 = require('gl-matrix');
var MoveTimer = (function () {
    function MoveTimer() {
        this.elapsed = 0;
        this.duration = 0;
    }
    MoveTimer.prototype.init = function (duration) {
        this.duration = duration;
        this.elapsed = 0;
    };
    MoveTimer.prototype.expired = function (timeStep) {
        this.elapsed += timeStep;
        // console.log(`elapsed: ${this.elapsed}, duration: ${this.duration}`);
        return this.elapsed > this.duration;
    };
    return MoveTimer;
}());
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
        this.moveTimer = new MoveTimer();
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
    GridMover.prototype.moveTowards = function (dest, speed) {
        var currentPos = gl_matrix_1.vec2.fromValues(this.node.position2D[0], this.node.position2D[1]);
        if (gl_matrix_1.vec2.equals(currentPos, dest)) {
            return dest;
        }
        try {
            var direction = gl_matrix_1.vec2.normalize(gl_matrix_1.vec2.create(), gl_matrix_1.vec2.subtract(gl_matrix_1.vec2.create(), dest, currentPos));
            // Move in that direction
            //start += vec2.scale( direction, speed); //direction * speed * elapsed;
            currentPos = gl_matrix_1.vec2.scaleAndAdd(gl_matrix_1.vec2.create(), currentPos, direction, speed);
            // If we moved PAST the goal, move it back to the goal
            if (Math.abs(gl_matrix_1.vec2.dot(direction, gl_matrix_1.vec2.normalize(gl_matrix_1.vec2.create(), gl_matrix_1.vec2.subtract(gl_matrix_1.vec2.create(), dest, currentPos))) + 1) < 0.1) {
                currentPos = dest;
            }
            // Return whether we've reached the goal or not
            return (gl_matrix_1.vec2.equals(currentPos, dest));
        }
        finally {
            this.node.position2D = [currentPos[0], currentPos[1]];
        }
    };
    GridMover.prototype.update = function (timeStep) {
        // Let's keep track of our delay
        if (this.moving || this.bumping || this.blocked) {
            if (this.moving) {
                if (this.moveTowards(this.targetPos, this.speed / 30)) {
                    // Reset everything
                    this.moving = false;
                    this.bumping = false;
                    this.blocked = false;
                    this.executePostMoveActions();
                }
            }
            else {
                //TODO: Need to figure out how to delay some time here
                // Reset everything
                if (this.moveTimer.expired(timeStep)) {
                    this.moving = false;
                    this.bumping = false;
                    this.blocked = false;
                    this.executePostMoveActions();
                }
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
                        _this.DEBUG('Bumping by Entity');
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
        else if (this.blocked || this.bumping) {
            this.moveTimer.init(0.25);
        }
    };
    return GridMover;
}(CustomJSComponent_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = GridMover;
