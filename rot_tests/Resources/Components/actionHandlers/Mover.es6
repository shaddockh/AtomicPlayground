'use strict';
"atomic component";

import MapData from 'MapData';
import * as triggerEvent from 'atomicTriggerEvent';
export default class Mover extends Atomic.JSComponent {

    inspectorFields = {
        usePhysics: true,
        speed: 1,
        debug: true
    };

    start() {
        this.targetPos = this.node.position2D;
        this.startPos = this.node.position2D;
        this.moving = false;
        if (this.usePhysics) {
            this.body = this.node.getComponent('RigidBody2D');
        }
    }

    updatePhysics( /*timeStep*/ ) {
        let pos = this.node.position2D;
        let speed = (this.scene.LevelRenderer.cellPixelSize * Atomic.PIXEL_SIZE);
        let dist = [Math.abs(this.targetPos[0] - pos[0]), Math.abs(this.targetPos[1] - pos[1])];
        // this may not work, but what I'm trying to do is if the actor has stopped and
        // we aren't at our target position, then something may have happened, so let's go
        // back to our start position
        let linearVel = this.body.linearVelocity;
        if (linearVel[0] == 0 && linearVel[1] == 0) {
            if (Math.abs(this.targetPos[0] - pos[0]) > 0 || Math.abs(this.targetPos[1] - pos[1]) > 0) {
                this.DEBUG(`Could not get to position.  Resetting to ${this.startPos}`);

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

    lerp(from, to, time) {
        return [from[0] + time * (to[0] - from[0]), from[1] + time * (to[1] - from[1])];
    }

    constSpeed(from, to, time) {
        // TODO: this is a lerp, needs to be a constant motion
        return [from[0] + time * (to[0] - from[0]), from[1] + time * (to[1] - from[1])];
    }

    updateManual(timeStep) {
        const limit = this.scene.LevelRenderer.cellUnitSize;
        let pos = this.node.position2D;

        if (this.scene.Level.turnBased) {
            this.node.position2D = this.lerp(pos, this.targetPos, timeStep * this.adjustedSpeed);
        } else {
            this.node.position2D = this.constSpeed(pos, this.targetPos, timeStep * this.adjustedSpeed);
        }

        pos = this.node.position2D;

        const distVec = [this.targetPos[0] - pos[0], this.targetPos[1] - pos[1]];
        const dist = Math.sqrt(distVec[0] * distVec[0] + distVec[1] * distVec[1]);
        if (dist > limit || dist < 0.0001){
            this.DEBUG('At position.  Stopping');
            this.position2D = this.targetPos;
            this.moving = false;
        }

        if (!this.moving && this.queuedVector) {
            this.onTryMove(this.queuedVector);
        }
    }

    update(timeStep) {
        if (this.moving) {
            this.ticks += timeStep;
            // if we are greater than 1 tile away, we went too far...reset
            if (this.usePhysics) {
                this.updatePhysics(timeStep);
            } else {
                this.updateManual(timeStep);
            }
        }
    }

    getMapPosition() {
        return this.node.getJSComponent("Entity").getPosition();
    }

    setMapPosition(pos) {
        this.node.getJSComponent("Entity").setPosition(pos);
    }

    onTryMove(vector2D) {

        // implement a way of queuing up actions
        if (this.moving) {
            if (this.scene.Level.turnBased) {
                this.queuedVector = vector2D;
            }
            return;
        }
        this.queuedVector = null;

        this.adjustedSpeed = this.speed * this.scene.LevelRenderer.cellPixelSize;

        let unitSize = this.scene.LevelRenderer.cellUnitSize;
        let pos = this.node.position2D;
        this.startPos = pos;
        this.targetPos = [pos[0] + vector2D[0] * unitSize, pos[1] + vector2D[1] * unitSize];
        this.ticks = 0;

        // see if we can move into the next space
        let mapPos = this.getMapPosition();
        let newMapPos = this.scene.Level.calculateOffsetPosition(mapPos, vector2D);
        this.DEBUG(`Current position: ${mapPos}`);
        this.DEBUG(`Moving to: ${newMapPos}`);

        if (this.scene.Level.getTileAt(newMapPos).terrainType !== MapData.TILE_FLOOR) {
            this.DEBUG('Blocked by terrain');
            return;
        }

        let blocked = false;
        this.scene.Level.iterateEntitiesAt(newMapPos, (entity) => {
            if (entity.entityComponent) {
                if (entity.entityComponent.blocksPath) {
                    blocked = true;
                }

                if (entity.entityComponent.bumpable) {
                    triggerEvent.trigger(entity.node, 'onBump', this, this.node);
                }
            }
        });

        if (blocked) {
            this.DEBUG('Blocked by entity');
            return;
        }
        this.setMapPosition(newMapPos);

        this.movementVector = vector2D;
        this.startPos = this.node.position2D;
        this.DEBUG(`Moving to ${this.targetPos} from ${this.startPos}, vector = ${vector2D}`);

        if (!this.usePhysics) {
            this.moving = true;
        } else {
            this.body.setLinearVelocity(vector2D);
            this.moving = true;
        }
    }

    DEBUG(msg) {
        if (this.debug) {
            console.log(`Mover: ${msg}`);
        }
    }
}
