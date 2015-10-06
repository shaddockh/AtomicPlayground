'use strict';
'atomic component';

import CustomJSComponent from 'CustomJSComponent';
import MapData from 'MapData';
import * as triggerEvent from 'atomicTriggerEvent';
import ROT from 'rot-js';
import { vec2 } from 'gl-matrix';

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
            this.scene.Level.registerActor(this);
        }
    }

    canWalk(point) {
        let pos = this.node.getJSComponent("Entity").getPosition();

        // See if we are trying to get to ourselves
        if (vec2.dist(point, pos) === 0) {
            return true;
        }
        if (this.scene.Level.getTileAt(point).terrainType !== MapData.TILE_FLOOR) {
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

    dumpNode(node) {
        console.log('NODE JS COMPONENTS:');
        let components = node.getComponents('JSComponent');
        for (let x = 0; x < components.length; x++) {
            let component = components[x];
            console.log('Component: ' + component.componentName);
        }
    }

    act() {
        if (!this.chaseEnemy) {
            return;
        }
        let hero = this.scene.Level.mapData.filterEntities((entity) => {
            return entity.blueprint === 'hero';
        }).pop();

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
            this.DEBUG('Ai - Act -- sees enemy');
        }

        if (this.isHunting && path.length < this.trackingRadius && path.length > 0) {
            this.DEBUG('Ai - Act -- hunting enemy');
            this.DEBUG(`Path to target has ${path.length} steps.`);
            let target = path.shift();
            let dir = vec2.sub(vec2.create(), target, pos);
            vec2.normalize(dir, dir);

            triggerEvent.trigger(this.node, "onTryMove", dir);
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
        triggerEvent.trigger(this.node, 'onActionComplete', this, this.node);
    }

    onHandleBump(targetNode) {
        const entityComponent = targetNode.getJSComponent('Entity');
        // just attack, don't allow for picking up items or other bump actions
        if (entityComponent.attackable) {
            triggerEvent.trigger(this.node, 'onAttack', targetNode);
        }
    }
}
