'use strict';
'atomic component';

import CustomJSComponent from 'CustomJSComponent';
import MapData from 'MapData';
import * as triggerEvent from 'atomicTriggerEvent';
import ROT from 'rot-js';
import { vec2 } from 'gl-matrix';
import * as metrics from 'metricsGatherer';

export default class MonsterAi extends CustomJSComponent {

    inspectorFields = {
        debug: false,
        chaseEnemy: true,
        deathEffect: 'death_effect',
        sightRadius: 4,
        trackingRadius: 8,
        isHunting: false
    };

    start() {
        if (this.scene.Level) {
            this.DEBUG('Registering self with scheduler');
            this.scene.Level.registerActor(this);
        }
    }

    canWalk(point) {
        let pos = this.node.getJSComponent("Entity").getPosition();

        // See if we are trying to get to ourselves
        if (vec2.dist(point, pos) === 0) {
            return true;
        }

        if (!this.scene.Level.isValidPos(point) || this.scene.Level.getTileAt(point).terrainType !== MapData.TILE_FLOOR) {
            return false;
        }

        let canWalk = true;
        this.scene.Level.iterateEntitiesAt(point, (entity) => {
            if (entity.entityComponent) {
                if (entity.entityComponent.blocksPath) {
                    canWalk = false;
                    return false;
                }
            }
        });

        return canWalk;
    }

    setTurnResolver(resolver) {
        this.resolveTurn = resolver;
    }

    onActionComplete() {
        // call the callback, notifying the scheduler that we are done
        if (this.resolveTurn) {
            this.resolveTurn();
        }
    }

    act() {
        metrics.start('MonsterAi');
        try {
            this.DEBUG('contemplating action.');
            if (!this.chaseEnemy) {
                return;
            }

            var position = this.node.getJSComponent('Entity').getPosition();
            let nearbyEntities = this.scene.Level.getEntitiesInRadius(position, this.trackingRadius);
            let hero = nearbyEntities.filter((entity) => {
                return entity.blueprint === 'hero';
            }).pop();

            // no hero in radius..go back to sleep
            if (!hero) {
                return;
            }

            let playerPos = hero.entityComponent.getPosition();

            const astar = new ROT.Path.AStar(playerPos[0], playerPos[1], (x, y) => this.canWalk([x, y]), {
                topology: 4
            });

            let path = [];
            let pos = this.node.getJSComponent("Entity").getPosition();
            astar.compute(pos[0], pos[1], (x, y) => {
                path.push([x, y]);
            });

            path.shift(); // remove current position

            // TODO ideally we would want to scan the sight radius, but for now we are just going to see if 
            // we are in range of the hero

            // get a direction vector
            if (!this.isHunting && path.length < this.sightRadius && path.length > 0) {
                this.isHunting = true;
                this.DEBUG('enemy seen.  switching to hunting.');
            }

            if (this.isHunting && path.length < this.trackingRadius && path.length > 0) {
                this.DEBUG(`hunting enemy located ${path.length} steps away.`);
                let target = path.shift();
                let dir = vec2.sub(vec2.create(), target, pos);
                vec2.normalize(dir, dir);

                triggerEvent.trigger(this.node, "onTryMove", dir);

                // we are returning a 'thenable' which tells the scheduler to not move on to the next actor
                // until this actor has completed.  This is overriding the onTurnTaken event on this class with
                // the callback passed to the then method, which means that when this class gets an onTurnTaken
                // event, it will resolve the then.
                // See: http://ondras.github.io/rot.js/manual/#timing/engine for some more information.
                return {
                    then: (resolve) => {
                        this.DEBUG('starting action.');
                        this.setTurnResolver(resolve);
                    }
                };
                //return {
                //then: (resolve) => {
                //this.DEBUG('starting action');
                //this.onActionComplete = (() => {
                //this.DEBUG('action complete.');
                //// Unhook the onActionComplete event
                //this.onActionComplete = null;
                //// Call the callback, notifying the scheduler that we are done
                //resolve();
                //});
                //}
                //};
            }
        } finally {
            metrics.stop('MonsterAi');
        }
    }

    onDie(killerComponent, killerNode) {
        this.DEBUG('Killed!');
        this.scene.Level.deregisterActor(this);
        if (this.deathEffect) {
            this.scene.LevelRenderer.addVisualEffect(this.deathEffect, this.node.position2D);
        }

        const entityComponent = this.node.getJSComponent('Entity');
        triggerEvent.trigger(killerNode, 'onLogAction', `${entityComponent.screenName} dies.`);
        this.scene.Level.killEnemy();
        triggerEvent.trigger(this.node, 'onDestroy');
        Atomic.destroy(this.node);
    }

    onAttack(targetNode) {
        this.DEBUG(`Attacked ${targetNode.name}`);
        triggerEvent.trigger(targetNode, 'onHit', this, this.node);
        // handled in onMoveComplete -- note that this won't work for actors that attack without moving.
        //triggerEvent.trigger(this.node, 'onActionComplete', this, this.node);
    }

    onHandleBump(targetNode) {
        const entityComponent = targetNode.getJSComponent('Entity');
        // just attack, don't allow for picking up items or other bump actions
        if (entityComponent.attackable) {
            triggerEvent.trigger(this.node, 'onAttack', targetNode);
        }
    }

    onMoveComplete() {
        triggerEvent.trigger(this.node, 'onActionComplete', this, this.node);
    }

}
