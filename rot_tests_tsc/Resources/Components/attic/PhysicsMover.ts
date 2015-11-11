'use strict';
'atomic component';
import CustomJSComponent from 'CustomJSComponent';
import MapData from '../../Modules/MapData';
import * as triggerEvent from 'atomicTriggerEvent';
import { vec2, GLM } from 'gl-matrix';
import gameState from '../../Modules/gameState';
import Entity = require('../common/Entity');

/* NOTE! THIS IS BROKEN! -- just here for reference */
class PhysicsMover extends CustomJSComponent {
    inspectorFields = {
        speed: 1,
        debug: false
    };

    private targetPos;
    private startPos;
    private moving:boolean;
    private body:Atomic.RigidBody2D;
    private queuedVector;
    private t;
    private adjustedSpeed;
    private movementVector;

    speed: number = 1;

    start() {
        this.targetPos = this.node.position2D;
        this.startPos = this.node.position2D;
        this.moving = false;
        this.body = this.node.getComponent<Atomic.RigidBody2D>('RigidBody2D');
    }

    update(/*timeStep*/) {
        if (this.moving) {
            let pos = this.node.position2D;
            let speed = (gameState.getCurrentLevelRenderer().cellPixelSize * Atomic.PIXEL_SIZE);
            let dist = [Math.abs(this.targetPos[0] - pos[0]), Math.abs(this.targetPos[1] - pos[1])];
            // this may not work, but what I'm trying to do is if the actor has stopped and
            // we aren't at our target position, then something may have happened, so let's go
            // back to our start position
            let linearVel = this.body.linearVelocity;
            if (linearVel[0] === 0 && linearVel[1] === 0) {
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
    }

    getMapPosition() {
        return this.node.getJSComponent<Entity>('Entity').getPosition();
    }

    setMapPosition(pos) {
        this.node.getJSComponent<Entity>('Entity').setPosition(pos);
    }

    onTryMove(vector2D) {

        // implement a way of queuing up actions
        if (this.moving) {
            if (gameState.getCurrentLevel().turnBased) {
                this.queuedVector = vector2D;
            }
            return;
        }
        this.queuedVector = null;

        this.adjustedSpeed = this.speed * gameState.getCurrentLevelRenderer().cellPixelSize;

        let unitSize = gameState.getCurrentLevelRenderer().cellUnitSize;
        let pos = <GLM.IArray>(this.node.position2D);
        this.startPos = pos;
        this.targetPos = vec2.add(vec2.create(), pos, vec2.scale(vec2.create(), vector2D, unitSize));
        this.t = 0;

        // see if we can move into the next space
        let mapPos = this.getMapPosition();
        let newMapPos = vec2.add(vec2.create(), mapPos, vector2D);
        this.DEBUG(`Current position: ${mapPos}`);
        this.DEBUG(`Moving to: ${newMapPos}`);

        if (gameState.getCurrentLevel().getTileAt(newMapPos).terrainType !== MapData.TILE_FLOOR) {
            this.DEBUG('Blocked by terrain');
            return;
        }

        let blocked = false;
        gameState.getCurrentLevel().iterateEntitiesAt(newMapPos, (entity) => {
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
        triggerEvent.trigger(this.node, 'onMove');

        this.movementVector = vector2D;
        this.startPos = this.node.position2D;
        this.DEBUG(`Moving to ${this.targetPos} from ${this.startPos}, vector = ${vector2D}`);

        this.moving = true;
        triggerEvent.trigger(this.node, 'onTurnTaken', this, this.node);
    }
}
export = PhysicsMover;
