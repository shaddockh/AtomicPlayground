'use strict';
"atomic component";
import CustomJSComponent from 'CustomJSComponent';
import MapData from 'MapData';
import * as triggerEvent from 'atomicTriggerEvent';
import { vec2 } from 'gl-matrix';

export default class Mover extends CustomJSComponent {
    inspectorFields = {
        usePhysics: true,
        speed: 1,
        debug: true,
        smoothMovement: true
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

    updateManual(timeStep) {
        if (!this.smoothMovement) {
            this.node.position2D = this.targetPos;
            this.moving = false;
            this.DEBUG('At position.  Stopping');
        } else { 
            if (this.t < 1) {
              this.t = Math.min(this.t + timeStep / (this.speed * .01), 1); // Sweeps from 0 to 1 in time seconds
              this.node.position2D = vec2.lerp(vec2.create(), this.startPos, this.targetPos, this.t);
            } else {
                this.moving = false;
                this.DEBUG('At position.  Stopping');
            }
        }

        if (!this.moving && this.queuedVector) {
            this.onTryMove(this.queuedVector);
        }
    }

    update(timeStep) {
        if (this.moving) {
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
        this.targetPos = vec2.add(vec2.create(), pos, vec2.scale(vec2.create(), vector2D, unitSize));
        this.t = 0;

        // see if we can move into the next space
        let mapPos = this.getMapPosition();
        let newMapPos = vec2.add(vec2.create(), mapPos, vector2D);
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
        triggerEvent.trigger(this.node, 'onTurnTaken', this, this.node);
    }
}
