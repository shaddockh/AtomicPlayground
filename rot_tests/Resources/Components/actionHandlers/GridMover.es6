'use strict';
"atomic component";
import CustomJSComponent from 'CustomJSComponent';
import MapData from 'MapData';
import * as triggerEvent from 'atomicTriggerEvent';
import {
    vec2
}
from 'gl-matrix';

export default class GridMover extends CustomJSComponent {
    inspectorFields = {
        speed: 1,
        debug: true,
        smoothMovement: true
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
        if (this.usePhysics) {
            this.body = this.node.getComponent('RigidBody2D');
        }
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
                    this.t = Math.min(this.t + timeStep / (this.speed * .1), 1); // Sweeps from 0 to 1 in time seconds
                    this.node.position2D = vec2.lerp(vec2.create(), this.startPos, this.targetPos, this.t);
                } else {
                    this.moving = false;
                    this.DEBUG('At position.  Stopping');
                    triggerEvent.trigger(this.node, 'onMoveComplete');
                }
            }

            if (!this.moving && this.queuedVector) {
                this.onTryMove(this.queuedVector);
            }
        }
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
            triggerEvent.trigger(this.node, 'onMoveBlocked', mapPos, newMapPos);
            return;
        }

        this.setMapPosition(newMapPos);

        this.movementVector = vector2D;
        this.startPos = this.node.position2D;
        this.DEBUG(`Moving to ${this.targetPos} from ${this.startPos}, vector = ${vector2D}`);

        this.moving = true;
        triggerEvent.trigger(this.node, 'onMoveStart', mapPos, newMapPos);
        triggerEvent.trigger(this.node, 'onTurnTaken', this, this.node);
    }
}
