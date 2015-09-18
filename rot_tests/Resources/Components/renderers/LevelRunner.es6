'use strict';
'atomic component';
import CustomJSComponent from 'CustomJSComponent';
import * as triggerEvent from 'atomicTriggerEvent';
//import { nodeBuilder } from 'atomic-blueprintLib';
import MapData from 'MapData';
import ROT from 'rot-js';

/**
 * Level runner component. This component is in charge of running a particular
 * level and making sure actors act, etc.  It is also the interface that entities
 * can use to get to the map data.
 *
 * This component, on startup, will register itself as scene.Level
 */
export default class LevelRunner extends CustomJSComponent {

    inspectorFields = {
        debug: false,
        mapData: null,
        turnBased: true
    };

    start() {
        this.scene.Level = this;
        this.scheduler = new ROT.Scheduler.Simple();
        this.engine = new ROT.Engine(this.scheduler);
        this.engine.start();
        this.turns = 0;
    }

    getTileAt(pos) {
        // yes...this looks strange, but we are getting a Float32Array in here, not an array, so destructuring doesn't work
        let [x, y] = [pos[0], pos[1]];
        return this.mapData.getTile(x, y);
    }

    getEntitiesAt(pos) {
        // yes...this looks strange, but we are getting a Float32Array in here, not an array, so destructuring doesn't work
        let [x, y] = [pos[0], pos[1]];
        return this.mapData.getEntitiesAt(x, y);
    }

    iterateEntitiesAt(pos, callback) {
        // yes...this looks strange, but we are getting a Float32Array in here, not an array, so destructuring doesn't work
        let [x, y] = [pos[0], pos[1]];
        this.mapData.iterateEntitiesAt(x, y, callback);
    }

    onSetMapData(mapData) {
        // let's just defer to the renderer for now
        //
        this.DEBUG(`LevelRunner: onSetMapData called Dimensions - ${mapData.width} x ${mapData.height}`);
        this.mapData = mapData;

        this.createHero(mapData.getRandomEmptyPosition());

        triggerEvent.trigger(this.node, 'onRender', mapData);
    }

    createHero(pos) {
        // yes...this looks strange, but we are getting a Float32Array in here, not an array, so destructuring doesn't work
        let [x, y] = [pos[0], pos[1]];
        this.DEBUG(`Create actor at: ${x},${y}`);
        let hero = new MapData.buildEntity('hero');
        this.mapData.addEntityAtPosition(x, y, hero);
    }

    registerActor(ai) {
        this.scheduler.add(ai, true);
        //this.actors.push(ai);
    }

    deregisterActor(ai) {
        this.scheduler.remove(ai);
        //this.actors.push(ai);
    }

    pause(val) {
        if (typeof(val) === 'undefined' || val) {
            this.engine.lock();
        } else {
            this.engine.unlock();
        }
    }

    update( /* timestep */ ) {
        // ROT will handle scheduling movements
        //this.actors.forEach((actor) => {
        //actor.act();
        //});
    }

    incTurn() {
        this.turns++;
    }

    gameOver() {
        this.engine.lock();
        console.log('Game Over!');
    }

}
