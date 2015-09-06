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
        this.targetPosition = [0, 0];
        if (this.usePhysics) {
            this.body = this.node.getComponent('RigidBody2D');
        }
    }

    update() {

        if (this.usePhysics) {
            if (this.body.linearVelocity[0] == 0 && this.body.linearVelocity[1] == 0) {
                this.node.position2D = this.targetPos;
            }
            var pos = this.node.position2D;
            if (Math.abs(this.targetPos[0] - pos[0]) < 0.1 && Math.abs(this.targetPos[1] - pos[1]) < 0.1) {
                this.body.linearVelocity = [0, 0];
            }
        }
    }
    onTryMove(vector2D) {

        var speed = this.TILE_SIZE * Atomic.PIXEL_SIZE;
        this.DEBUG(`speed = ${speed}`);
        this.DEBUG(`vector = ${vector2D}`);
        var pos = this.node.position2D;
        this.targetPos = [pos[0] + vector2D[0] * speed, pos[1] + vector2D[1] * speed];
        if (!this.usePhysics) {
            pos[0] += vector2D[0] * speed; // use translate?
            pos[1] += vector2D[1] * speed; // use translate?

            this.node.position2D = pos;
        } else {

            this.body.linearVelocity = [0, 0];
            let newVec = [vector2D[0] * speed / 2, vector2D[1] * speed / 2];
            this.DEBUG(`new vector = ${newVec}`);
            this.DEBUG(`linear vel = ${this.body.linearVelocity}`);
            this.body.applyLinearImpulse(newVec, pos, true);
            //this.body.applyLinearImpulse(vector2D, pos, true);
            this.DEBUG(`linear vel = ${this.body.linearVelocity}`);
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
