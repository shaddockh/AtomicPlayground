'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CustomJSComponent_1 = require('../../Modules/CustomJSComponent');
var triggerEvent = require('atomicTriggerEvent');
//import { nodeBuilder } from 'atomic-blueprintLib';
var MapData_1 = require('../../Modules/MapData');
var ROT = require('rot-js');
var gameChannels_1 = require('../../Modules/gameChannels');
var gameState_1 = require('../../Modules/gameState');
/**
 * Level runner component. This component is in charge of running a particular
 * level and making sure actors act, etc.  It is also the interface that entities
 * can use to get to the map data.
 *
 * This component, on startup, will register itself as scene.Level
 */
var LevelRunner = (function (_super) {
    __extends(LevelRunner, _super);
    function LevelRunner() {
        _super.call(this);
        this.inspectorFields = {
            debug: false,
            mapData: null,
            turnBased: true,
            useFov: true,
            fovRadius: 15
        };
        /** The hero node */
        this.hero = null;
        /** ROT scheduler */
        this.scheduler = null;
        /** ROT engine */
        this.engine = null;
        /** # of turns elapsed */
        this.turns = 0;
        /** The map data for this level */
        this.mapData = null;
        /** use field of view calcs */
        this.useFov = true;
        /** radius to run field of view calcs on.  You may want to tweak this if you have more or less tiles on the screen at once. */
        this.fovRadius = 50;
        /** # of enemies remaining in level */
        this.enemiesRemaining = 99;
        /** Indicates whether the game is over or not */
        this.isGameOver = false;
        this.scheduler = new ROT.Scheduler.Simple();
        this.engine = new ROT.Engine(this.scheduler);
    }
    LevelRunner.prototype.start = function () {
        var _this = this;
        gameState_1.default.setCurrentLevel(this);
        gameChannels_1.uiChannel.sendMessage('show:hud');
        gameChannels_1.uiChannel.sendMessage('log:addmessage', 'Welcome to the dungeon.');
        this.createHero(this.mapData.getRandomEmptyPosition());
        triggerEvent.trigger(this.node, 'onRender', this.mapData);
        this.enemiesRemaining = 0;
        this.mapData.iterateEntities(function (entity) {
            // TODO this is a naive way of determining monsters, but is good enough for this example
            if (entity.node.getJSComponent('MonsterAi') !== null) {
                _this.enemiesRemaining++;
            }
        });
        this.updateUi();
        this.engine.start();
        this.setCameraTarget(this.hero.node);
    };
    // update( /* timestep */ ) {
    // }
    LevelRunner.prototype.getTileAt = function (pos) {
        // yes...this looks strange, but we are getting a Float32Array in here, not an array, so destructuring doesn't work
        var _a = [pos[0], pos[1]], x = _a[0], y = _a[1];
        return this.mapData.getTile(x, y);
    };
    LevelRunner.prototype.isValidPos = function (pos) {
        // yes...this looks strange, but we are getting a Float32Array in here, not an array, so destructuring doesn't work
        var _a = [pos[0], pos[1]], x = _a[0], y = _a[1];
        return this.mapData.inBounds(x, y);
    };
    LevelRunner.prototype.getEntitiesAt = function (pos) {
        // yes...this looks strange, but we are getting a Float32Array in here, not an array, so destructuring doesn't work
        var _a = [pos[0], pos[1]], x = _a[0], y = _a[1];
        return this.mapData.getEntitiesAt(x, y);
    };
    LevelRunner.prototype.getEntitiesInRadius = function (pos, radius) {
        // yes...this looks strange, but we are getting a Float32Array in here, not an array, so destructuring doesn't work
        var _a = [pos[0], pos[1]], x = _a[0], y = _a[1];
        var boundsX = [x - radius, x + radius];
        var boundsY = [y - radius, y + radius];
        return this.mapData.filterEntities(function (entity) {
            return entity.x >= boundsX[0] && entity.x <= boundsX[1]
                && entity.y >= boundsY[0] && entity.y <= boundsY[1];
        });
    };
    LevelRunner.prototype.iterateEntitiesAt = function (pos, callback) {
        // yes...this looks strange, but we are getting a Float32Array in here, not an array, so destructuring doesn't work
        var _a = [pos[0], pos[1]], x = _a[0], y = _a[1];
        this.mapData.iterateEntitiesAt(x, y, callback);
    };
    LevelRunner.prototype.onSetMapData = function (mapData) {
        // let's just defer to the renderer for now
        //
        this.DEBUG("LevelRunner: onSetMapData called Dimensions - " + mapData.width + " x " + mapData.height);
        this.mapData = mapData;
    };
    LevelRunner.prototype.createHero = function (pos) {
        // yes...this looks strange, but we are getting a Float32Array in here, not an array, so destructuring doesn't work
        var _a = [pos[0], pos[1]], x = _a[0], y = _a[1];
        this.DEBUG("Create actor at: " + x + "," + y);
        this.hero = MapData_1.default.buildEntity('hero');
        this.mapData.addEntityAtPosition(x, y, this.hero);
    };
    LevelRunner.prototype.registerActor = function (ai) {
        this.scheduler.add(ai, true);
    };
    LevelRunner.prototype.deregisterActor = function (ai) {
        this.scheduler.remove(ai);
    };
    LevelRunner.prototype.updateFov = function (position) {
        if (this.useFov) {
            triggerEvent.trigger(this.node, 'onUpdateFov', position, this.fovRadius, this.mapData);
        }
    };
    LevelRunner.prototype.incTurn = function () {
        this.turns++;
        this.updateUi();
    };
    LevelRunner.prototype.killEnemy = function () {
        this.enemiesRemaining--;
        this.updateUi();
        if (this.enemiesRemaining === 0) {
            this.gameWon();
        }
    };
    LevelRunner.prototype.updateUi = function () {
        gameChannels_1.uiChannel.sendMessage('bind:hud', {
            enemiesRemaining: this.enemiesRemaining,
            health: this.hero.node.getJSComponent('Health').life,
            turnCount: this.turns
        });
    };
    LevelRunner.prototype.gameWon = function () {
        this.isGameOver = true;
        this.engine.lock();
        gameChannels_1.uiChannel.sendMessage('show:endgame', {
            endGameReason: 'You killed all the enemies!'
        });
    };
    LevelRunner.prototype.gameOver = function () {
        this.isGameOver = true;
        this.engine.lock();
        gameChannels_1.uiChannel.sendMessage('show:endgame', {
            endGameReason: 'You died.'
        });
    };
    LevelRunner.prototype.setCameraTarget = function (targetNode) {
        triggerEvent.trigger(this.node, 'onSetCameraTarget', targetNode);
    };
    return LevelRunner;
}(CustomJSComponent_1.default));
module.exports = LevelRunner;
