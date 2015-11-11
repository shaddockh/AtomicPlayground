'use strict';
'atomic component';
/// <reference path="../../../typings/rot-js/rot-js.d.ts"/>
import CustomJSComponent from '../../Modules/CustomJSComponent';
import * as triggerEvent from 'atomicTriggerEvent';
//import { nodeBuilder } from 'atomic-blueprintLib';
import MapData from '../../Modules/MapData';
import ROT = require('rot-js');
import { uiChannel, levelChannel } from '../../Modules/gameChannels';
import gameState from '../../Modules/gameState';

/**
 * Level runner component. This component is in charge of running a particular
 * level and making sure actors act, etc.  It is also the interface that entities
 * can use to get to the map data.
 *
 * This component, on startup, will register itself as scene.Level
 */
class LevelRunner extends CustomJSComponent {

    inspectorFields = {
        debug: false,
        mapData: null,
        turnBased: true,
        useFov: true,
        fovRadius: 15
    };

    /** The hero node */
    hero = null;

    /** ROT scheduler */
    scheduler = null;

    /** ROT engine */
    engine = null;

    /** # of turns elapsed */
    turns = 0;

    /** The map data for this level */
    mapData = null;

    /** use field of view calcs */
    useFov = true;

    /** radius to run field of view calcs on.  You may want to tweak this if you have more or less tiles on the screen at once. */
    fovRadius = 50;

    /** # of enemies remaining in level */
    enemiesRemaining = 99;

    /** Indicates whether the game is over or not */
    isGameOver = false;

    constructor() {
        super();
        this.scheduler = new ROT.Scheduler.Simple();
        this.engine = new ROT.Engine(this.scheduler);
    }

    start() {
        gameState.setCurrentLevel(this);

        uiChannel.sendMessage('show:hud');
        uiChannel.sendMessage('log:addmessage', 'Welcome to the dungeon.');

        this.createHero(this.mapData.getRandomEmptyPosition());

        triggerEvent.trigger(this.node, 'onRender', this.mapData);

        this.enemiesRemaining = 0;
        this.mapData.iterateEntities((entity) => {
            // TODO this is a naive way of determining monsters, but is good enough for this example
            if (entity.node.getJSComponent('MonsterAi') !== null) {
                this.enemiesRemaining++;
            }
        });
        this.updateUi();

        this.engine.start();
        this.setCameraTarget(this.hero.node);
    }

    // update( /* timestep */ ) {
    // }

    getTileAt(pos) {
        // yes...this looks strange, but we are getting a Float32Array in here, not an array, so destructuring doesn't work
        let [x, y] = [pos[0], pos[1]];
        return this.mapData.getTile(x, y);
    }

    isValidPos(pos) {
        // yes...this looks strange, but we are getting a Float32Array in here, not an array, so destructuring doesn't work
        let [x, y] = [pos[0], pos[1]];
        return this.mapData.inBounds(x, y);
    }

    getEntitiesAt(pos) {
        // yes...this looks strange, but we are getting a Float32Array in here, not an array, so destructuring doesn't work
        let [x, y] = [pos[0], pos[1]];
        return this.mapData.getEntitiesAt(x, y);
    }

    getEntitiesInRadius(pos, radius) {
        // yes...this looks strange, but we are getting a Float32Array in here, not an array, so destructuring doesn't work
        let [x, y] = [pos[0], pos[1]];
        let boundsX = [x - radius, x + radius];
        let boundsY = [y - radius, y + radius];
        return this.mapData.filterEntities((entity) => {
            return entity.x >= boundsX[0] && entity.x <= boundsX[1]
                && entity.y >= boundsY[0] && entity.y <= boundsY[1];
        });
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

    }

    createHero(pos) {
        // yes...this looks strange, but we are getting a Float32Array in here, not an array, so destructuring doesn't work
        let [x, y] = [pos[0], pos[1]];
        this.DEBUG(`Create actor at: ${x},${y}`);
        this.hero = MapData.buildEntity('hero');
        this.mapData.addEntityAtPosition(x, y, this.hero);
    }

    registerActor(ai) {
        this.scheduler.add(ai, true);
    }

    deregisterActor(ai) {
        this.scheduler.remove(ai);
    }

    updateFov(position) {
        if (this.useFov) {
            triggerEvent.trigger(this.node, 'onUpdateFov', position, this.fovRadius, this.mapData);
        }
    }

    incTurn() {
        this.turns++;
        this.updateUi();
    }

    killEnemy() {
        this.enemiesRemaining--;
        this.updateUi();
        if (this.enemiesRemaining === 0) {
            this.gameWon();
        }
    }

    updateUi() {
        uiChannel.sendMessage('bind:hud', {
            enemiesRemaining: this.enemiesRemaining,
            health: this.hero.node.getJSComponent('Health').life,
            turnCount: this.turns
        });
    }

    gameWon() {
        this.isGameOver = true;
        this.engine.lock();
        uiChannel.sendMessage('show:endgame', {
            endGameReason: 'You killed all the enemies!'
        });
    }

    gameOver() {
        this.isGameOver = true;
        this.engine.lock();
        uiChannel.sendMessage('show:endgame', {
            endGameReason: 'You died.'
        });
    }

    setCameraTarget(targetNode) {
        triggerEvent.trigger(this.node, 'onSetCameraTarget', targetNode);
    }

}
export = LevelRunner;
