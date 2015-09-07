'use strict';
"atomic component";

import MapData from 'MapData';
import * as triggerEvent from 'atomicTriggerEvent';
export default class Mover extends Atomic.JSComponent {

    inspectorFields = {
        TILE_SIZE: 16,
        usePhysics: true,
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

    updatePhysics(/*timeStep*/) {
        var pos = this.node.position2D;
        var speed = (this.TILE_SIZE * Atomic.PIXEL_SIZE);
        let dist = [Math.abs(this.targetPos[0] - pos[0]), Math.abs(this.targetPos[1] - pos[1])];
        // this may not work, but what I'm trying to do is if the actor has stopped and
        // we aren't at our target position, then something may have happened, so let's go
        // back to our start position
        var linearVel = this.body.linearVelocity;
        if (linearVel[0] == 0 && linearVel[1] == 0) {
            if (Math.abs(this.targetPos[0] - pos[0]) > 0 || Math.abs(this.targetPos[1] - pos[1]) > 0) {
                this.DEBUG(`Could not get to position.  Resetting to ${this.startPos}`);
                //this.node.position2D = this.startPos;

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
            //this.node.position2D = this.targetPos;
            this.moving = false;
        }

    }

    updateManual(timeStep) {
        let pos = this.node.position2D;
        let speed = (this.TILE_SIZE * Atomic.PIXEL_SIZE);
        // TODO: This is hacky..need to rework speed multiplier
        let speedMult = 3;
        pos[0] += this.movementVector[0] * (speed * timeStep * speedMult);
        pos[1] += this.movementVector[1] * (speed * timeStep * speedMult);
        let dist = [Math.abs(this.targetPos[0] - pos[0]), Math.abs(this.targetPos[1] - pos[1])];
        // TODO: this could use some work...sometimes this calc will cause the actor to overshoot the dest.
        if (dist[0] > speed || dist[1] > speed || (dist[0] < 0.01 && dist[1] < 0.01)) {
            this.DEBUG('At position.  Stopping');
            pos = this.targetPos;
            this.node.position2D = pos;
            this.moving = false;
        }

        this.node.position2D = pos;

        if (!this.moving && this.queuedVector) {
            this.onTryMove(this.queuedVector);
        }
    }

    update(timeStep) {
        if (this.moving) {
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

        var speed = this.TILE_SIZE * Atomic.PIXEL_SIZE;
        var pos = this.node.position2D;
        this.targetPos = [pos[0] + vector2D[0] * speed, pos[1] + vector2D[1] * speed];

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
        this.DEBUG(`Moving to ${this.targetPos} from ${this.startPos}, speed = ${speed}, vector = ${vector2D}`);

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
