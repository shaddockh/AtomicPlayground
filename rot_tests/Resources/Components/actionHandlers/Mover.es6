'use strict';
"atomic component";

//export default class SpriteSheet extends Atomic.JSComponent {
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

    update(timeStep) {
        if (this.moving) {
            // if we are greater than 1 tile away, we went too far...reset
            var pos = this.node.position2D;
            var speed = (this.TILE_SIZE * Atomic.PIXEL_SIZE);
            let dist = [Math.abs(this.targetPos[0] - pos[0]), Math.abs(this.targetPos[1] - pos[1])];
            if (this.usePhysics) {
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
            } else {
                // TODO: This is hacky..need to rework speed multiplier
                let speedMult = 3;
                pos[0] += this.movementVector[0] * (speed * timeStep * speedMult);
                pos[1] += this.movementVector[1] * (speed * timeStep * speedMult);
                this.node.setPosition2D(pos);
                if (dist[0] > speed || dist[1] > speed || (dist[0] < 0.01 && dist[1] < 0.01)) {
                    this.DEBUG('At position.  Stopping');
                    this.node.setPosition2D(this.targetPos);
                    //this.node.position2D = this.targetPos;
                    this.moving = false;
                    if (this.nextVector) {
                        this.onTryMove(this.nextVector);
                    }
                }
            }
        }
    }

    onTryMove(vector2D) {

        // implement a way of queuing up actions
        if (this.moving) {
            this.nextVector = vector2D;
            return;
        }
        this.nextVector = null;

        var speed = this.TILE_SIZE * Atomic.PIXEL_SIZE;
        var pos = this.node.position2D;
        this.targetPos = [pos[0] + vector2D[0] * speed, pos[1] + vector2D[1] * speed];
        this.movementVector = vector2D;
        this.startPos = this.node.position2D;
        this.DEBUG(`Moving to ${this.targetPos} from ${this.startPos}, speed = ${speed}, vector = ${vector2D}`);

        if (!this.usePhysics) {
            this.moving = true;
            //pos[0] += vector2D[0] * speed; // use translate?
            //pos[1] += vector2D[1] * speed; // use translate?
            //this.node.position2D = pos;
        } else {
            this.body.setLinearVelocity(vector2D);
            this.moving = true;
        }

        //if (left && vel[0] > -MAX_VELOCITY) {
        //body.applyLinearImpulse([-2, 0], pos, true);
        //} else if (right && vel[0] < MAX_VELOCITY) {
        //body.applyLinearImpulse([2, 0], pos, true);
        //}

        //if (!left && !right) {
        //vel[0] *= 0.9;
        //body.linearVelocity = vel;
        //circle.friction = 1000.0;
        //} else {
        //circle.friction = .2;
        //}
    }

    DEBUG(msg) {
        if (this.debug) {
            console.log(`Mover: ${msg}`);
        }
    }
}
