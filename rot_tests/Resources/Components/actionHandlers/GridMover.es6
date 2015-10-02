'use strict';
"atomic component";
import CustomJSComponent from 'CustomJSComponent';
import MapData from 'MapData';
import * as triggerEvent from 'atomicTriggerEvent';
import {
    vec2
}
from 'gl-matrix';
// added
vec2.limit = function (out, v, high) {
    let x = v[0],
        y = v[1];

    let len = x * x + y * y;

    if (len > high * high && len > 0) {
        out[0] = x;
        out[1] = y;
        vec2.normalize(out, out);
        vec2.scale(out, out, high);
    }
    return out;
};

export default class GridMover extends CustomJSComponent {
    inspectorFields = {
        debug: false,
        // need speed to be 1 tile per speed per second.
        speed: 1,
        smoothMovement: true // jump from tile to tile or smoothly move between them
    };

    getMapPosition() {
        return this.node.getJSComponent("Entity").getPosition();
    }

    setMapPosition(pos) {
        this.node.getJSComponent("Entity").setPosition(pos);
    }

    start() {
        this.targetPos = this.node.position2D;
        this.startPos = this.node.position2D;
        this.moving = false;
    }

    update(timeStep) {
        if (this.moving) {
            if (!this.smoothMovement) {
                this.node.position2D = this.targetPos;
                this.moving = false;
                this.DEBUG('At position.  Stopping');
                triggerEvent.trigger(this.node, 'onMoveComplete');
            } else {
                if (this.t < 1) {
                    let newT = Math.min(this.t + timeStep / (this.speed * this.scene.LevelRenderer.cellUnitSize), 1); // Sweeps from 0 to 1 in time seconds
                    let newPosition = vec2.lerp(vec2.create(), this.startPos, this.targetPos, newT);
                    this.node.position2D = newPosition;
                    this.t = newT;
                } else {
                    this.moving = false;
                    this.node.position2D = this.targetPos;
                    this.DEBUG('At position.  Stopping');
                    triggerEvent.trigger(this.node, 'onMoveComplete');
                    if (this.incrementTurn) {
                        triggerEvent.trigger(this.node, 'onTurnTaken', this, this.node);
                    }
                }
            }

            if (!this.moving && this.queuedVector) {
                this.onTryMove(this.queuedVector);
            }
        }

        if (this.bumping) {
            if (this.t < 1) {
                this.t = Math.min(this.t + timeStep / (this.speed * .1), 1); // Sweeps from 0 to 1 in time seconds
            } else {
                this.bumping = false;
                this.DEBUG('done bumping');
                triggerEvent.trigger(this.node, 'onTurnTaken', this, this.node);
            }
        }
    }

    onTryMove(vector2D) {

        // implement a way of queuing up actions
        if (this.moving || this.bumping) {
            if (this.scene.Level.turnBased) {
                this.queuedVector = vector2D;
            }
            return;
        }
        this.queuedVector = null;

        let unitSize = this.scene.LevelRenderer.cellUnitSize;
        this.startPos = this.node.position2D;
        this.targetPos = vec2.add(vec2.create(), this.startPos, vec2.scale(vec2.create(), vector2D, unitSize));
        this.t = 0;

        // see if we can move into the next space
        let mapPos = this.getMapPosition();
        let newMapPos = vec2.add(vec2.create(), mapPos, vector2D);
        this.DEBUG(`Current position: ${mapPos[0]},${mapPos[1]}`);
        this.DEBUG(`Moving to: ${newMapPos[0]},${newMapPos[1]}`);

        // check to see if we are blocked
        let blocked = false;
        this.incrementTurn = true;
        if (this.scene.Level.getTileAt(newMapPos).terrainType !== MapData.TILE_FLOOR) {
            this.DEBUG('Blocked by terrain');
            triggerEvent.trigger(this.node, 'onLogAction', 'Blocked.');
            blocked = true;
            this.incrementTurn = false;
        } else {
            this.scene.Level.iterateEntitiesAt(newMapPos, (entity) => {
                if (entity.entityComponent) {
                    if (entity.entityComponent.blocksPath) {
                        blocked = true;
                    }
                    triggerEvent.trigger(this.node, 'onHandleBump', entity.node);
                }
            });
        }

        if (blocked) {
            this.DEBUG('Blocked by entity');
            triggerEvent.trigger(this.node, 'onMoveBlocked', mapPos, newMapPos);
            this.bumping = true;
        } else {
            this.setMapPosition(newMapPos);

            this.movementVector = vector2D;
            this.startPos = this.node.position2D;
            this.DEBUG(`Moving to ${this.targetPos} from ${this.startPos}, vector = ${vector2D}`);

            this.moving = true;
            triggerEvent.trigger(this.node, 'onMoveStart', mapPos, newMapPos);
        }
    }
}
