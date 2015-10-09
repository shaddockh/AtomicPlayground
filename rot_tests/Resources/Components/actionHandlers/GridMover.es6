'use strict';
"atomic component";
import CustomJSComponent from 'CustomJSComponent';
import MapData from 'MapData';
import * as triggerEvent from 'atomicTriggerEvent';
import { vec2 } from 'gl-matrix';

export default class GridMover extends CustomJSComponent {
    inspectorFields = {
        debug: false,
        // need speed to be 1 tile per speed per second.
        speed: 1,
        smoothMovement: true // jump from tile to tile or smoothly move between them
    };

    postMoveActions = [];

    queuePostMoveAction(action) {
        this.postMoveActions.push(action);
    }

    executePostMoveActions() {
        while (this.postMoveActions.length) {
            // pull the actions off the queue and run it
            let action = this.postMoveActions.shift();
            action();
        }
    }

    get entity() {
        return this.node.getJSComponent('Entity');
    }

    start() {
        this.targetPos = this.node.position2D;
        this.startPos = this.node.position2D;
        this.moving = false;
    }

    update(timeStep) {

        // Let's keep track of our delay
        if (this.moving || this.bumping || this.blocked) {

            // We don't want to do anything except update our position while we are still inside the delay
            if (this.t < 1) {
                this.t = Math.min(this.t + timeStep / (this.speed * this.scene.LevelRenderer.cellUnitSize), 1); // Sweeps from 0 to 1 in time seconds
                if (this.moving && this.smoothMovement) {
                    this.node.position2D = vec2.lerp(vec2.create(), this.startPos, this.targetPos, this.t);
                }
                // Let's bail until the next cycle
                return;
            }

            // We are now outside of our delay, let's finish up the action
            if (this.t >= 1) {

                if (this.moving) {
                    this.node.position2D = this.targetPos;
                }
                this.executePostMoveActions();

                // Reset everything
                this.moving = false;
                this.bumping = false;
                this.blocked = false;
            }
        }
    }

    onTryMove(vector2D) {
        if (this.moving || this.bumping || this.blocked) {
            return;
        }

        this.DEBUG('Entering Move');
        let unitSize = this.scene.LevelRenderer.cellUnitSize;
        this.startPos = this.node.position2D;
        this.targetPos = vec2.add(vec2.create(), this.startPos, vec2.scale(vec2.create(), vector2D, unitSize));
        this.t = 0;

        // see if we can move into the next space
        let mapPos = this.entity.getPosition();
        let newMapPos = vec2.add(vec2.create(), mapPos, vector2D);
        this.DEBUG(`Current position: ${mapPos[0]},${mapPos[1]}`);
        this.DEBUG(`Moving to: ${newMapPos[0]},${newMapPos[1]}`);

        this.moving = true;
        // check to see if we are blocked

        // First see if we are blocked by terrain
        if (this.scene.Level.getTileAt(newMapPos).terrainType !== MapData.TILE_FLOOR) {
            // Queue up an action to notify the player that the move is blocked
            this.queuePostMoveAction(() => {
                this.DEBUG('Blocked by terrain');
                triggerEvent.trigger(this.node, 'onLogAction', 'Blocked.');
                triggerEvent.trigger(this.node, 'onMoveBlocked', mapPos, newMapPos);
                triggerEvent.trigger(this.node, 'onMoveComplete');
            });

            this.blocked = true;
            this.moving = false;
        } else {
            this.scene.Level.iterateEntitiesAt(newMapPos, (entity) => {
                // We are going to bump the top level entity
                if (entity.entityComponent) {
                    if (entity.entityComponent.blocksPath) {
                        this.blocked = true;
                        this.moving = false;
                        this.queuePostMoveAction(() => {
                            this.DEBUG('Blocked by Entity');
                            triggerEvent.trigger(this.node, 'onMoveBlocked', mapPos, newMapPos);
                            triggerEvent.trigger(this.node, 'onMoveComplete');
                        });
                    }
                    triggerEvent.trigger(this.node, 'onHandleBump', entity.node);
                    return false;
                }
            });
        }

        if (this.moving) {
            this.movementVector = vector2D;
            this.startPos = this.node.position2D;
            this.DEBUG(`Moving to ${this.targetPos} from ${this.startPos}, vector = ${vector2D}`);

            triggerEvent.trigger(this.node, 'onMoveStart', mapPos, newMapPos);
            // Queue up an action to notify that we are done moving.
            this.queuePostMoveAction(() => {
                this.entity.setPosition(newMapPos);
                triggerEvent.trigger(this.node, 'onMoveComplete');
            });
        }
    }
}
