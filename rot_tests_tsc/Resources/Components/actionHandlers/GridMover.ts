'use strict';
'atomic component';
import CustomJSComponent from 'CustomJSComponent';
import Entity from '../common/Entity';
import MapData from '../../Modules/MapData';
import gameState from '../../Modules/gameState';
import * as triggerEvent from 'atomicTriggerEvent';
import { vec2 } from 'gl-matrix';

class MoveTimer {
    elapsed = 0;
    duration = 0;
    init(duration) {
        this.duration = duration;
        this.elapsed = 0;
    }
    expired(timeStep: number) {
        this.elapsed += timeStep;
        // console.log(`elapsed: ${this.elapsed}, duration: ${this.duration}`);
        return this.elapsed > this.duration;
    }
}

export default class GridMover extends CustomJSComponent {
    inspectorFields = {
        debug: false,
        // need speed to be 1 tile per speed per second.
        speed: 1,
        smoothMovement: true // jump from tile to tile or smoothly move between them
    };

    speed: number = 1;
    smoothMovement: boolean = true;
    moveTimer = new MoveTimer();

    private postMoveActions = [];
    private targetPos;
    private startPos;
    private moving: boolean = false;
    private blocked: boolean = false;
    private bumping: boolean = false;
    private t: number;
    private movementVector;

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

    get entity(): Entity {
        return this.node.getJSComponent<Entity>('Entity');
    }

    start() {
        this.targetPos = this.node.position2D;
        this.startPos = this.node.position2D;
        this.moving = false;
    }

    moveTowards(dest, speed: number): any {
        let currentPos = vec2.fromValues(this.node.position2D[0], this.node.position2D[1]);
        if (vec2.equals(currentPos, dest)) {
            return dest;
        }

        try {
            const direction = vec2.normalize(vec2.create(), vec2.subtract(vec2.create(), dest, currentPos));

            // Move in that direction
            //start += vec2.scale( direction, speed); //direction * speed * elapsed;
            currentPos = vec2.scaleAndAdd(vec2.create(), currentPos, direction, speed);

            // If we moved PAST the goal, move it back to the goal
            if (Math.abs(vec2.dot(direction, vec2.normalize(vec2.create(), vec2.subtract(vec2.create(), dest, currentPos))) + 1) < 0.1) {
                currentPos = dest;
            }

            // Return whether we've reached the goal or not
            return (vec2.equals(currentPos, dest));
        } finally {
            this.node.position2D = [currentPos[0], currentPos[1]];
        }
    }

    update(timeStep) {
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
            } else {
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
    }

    onTryMove(vector2D) {
        if (this.moving || this.bumping || this.blocked) {
            return;
        }

        this.DEBUG('Entering Move');
        let unitSize = gameState.getCurrentLevelRenderer().cellUnitSize;
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
        if (!gameState.getCurrentLevel().isValidPos(newMapPos) ||
            gameState.getCurrentLevel().getTileAt(newMapPos).terrainType !== MapData.TILE_FLOOR) {
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
            gameState.getCurrentLevel().iterateEntitiesAt(newMapPos, (entity) => {
                // We are going to bump the top level entity if it's bumpable
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
                    if (entity.entityComponent.bumpable) {
                        this.DEBUG('Bumping by Entity');
                        // Let's exit the loop since we only want to deal with the first entity
                        triggerEvent.trigger(this.node, 'onHandleBump', entity.node);
                        return false;
                    } else {
                        return true;
                    }
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
        } else if (this.blocked || this.bumping) {
            this.moveTimer.init(0.25);
        }
    }
}
