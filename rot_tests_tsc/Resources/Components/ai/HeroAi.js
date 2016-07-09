'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var triggerEvent = require('atomicTriggerEvent');
var CustomJSComponent_1 = require('CustomJSComponent');
var metrics = require('metricsGatherer');
var gameState_1 = require('../../Modules/gameState');
var HeroAi = (function (_super) {
    __extends(HeroAi, _super);
    function HeroAi() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: false,
            sightRadius: 10
        };
        this.sightRadius = 10;
        this.resolveTurn = null;
        this.deferredActions = [];
    }
    HeroAi.prototype.start = function () {
        this.DEBUG('Registering self with scheduler');
        var level = gameState_1.default.getCurrentLevel();
        level.registerActor(this);
        // TODO: we need to unlock the engine here for some reason.  It would be better if there were a less invasive way
        level.engine.unlock();
        level.updateFov(this.getPosition(), this.sightRadius);
    };
    /** Pointer to be called when the action is complete.  The complete promise will overwrite this */
    //onActionComplete = null;
    HeroAi.prototype.act = function () {
        var _this = this;
        this.DEBUG('contemplating action.');
        triggerEvent.trigger(this.node, 'onActionBegin', this, this.node);
        // we are returning a 'thenable' which tells the scheduler to not move on to the next actor
        // until this actor has completed.  This is overriding the onTurnTaken event on this class with
        // the callback passed to the then method, which means that when this class gets an onTurnTaken
        // event, it will resolve the then.
        // See: http://ondras.github.io/rot.js/manual/#timing/engine for some more information.
        return {
            then: function (resolve) {
                _this.DEBUG('starting action.');
                _this.setTurnResolver(resolve);
            }
        };
    };
    HeroAi.prototype.onActionComplete = function () {
        // call the callback, notifying the scheduler that we are done
        if (this.resolveTurn) {
            this.DEBUG('resolving action');
            metrics.start('resolveTurn');
            this.resolveTurn();
            metrics.stop('resolveTurn');
        }
    };
    HeroAi.prototype.setTurnResolver = function (resolver) {
        this.DEBUG('Setting turn resolver');
        this.resolveTurn = resolver;
    };
    HeroAi.prototype.onTurnTaken = function () {
        var _this = this;
        this.deferAction(function () {
            metrics.start('incTurn');
            gameState_1.default.getCurrentLevel().incTurn();
            metrics.stop('incTurn');
            metrics.start('updateFov');
            gameState_1.default.getCurrentLevel().updateFov(_this.getPosition());
            metrics.stop('updateFov');
        });
        triggerEvent.trigger(this.node, 'onActionComplete', this, this.node);
    };
    HeroAi.prototype.getPosition = function () {
        return this.node.getJSComponent('Entity').getPosition();
    };
    HeroAi.prototype.deferAction = function (action) {
        this.deferredActions.push(action);
    };
    HeroAi.prototype.update = function () {
        while (this.deferredActions.length) {
            var action = this.deferredActions.pop();
            action();
        }
    };
    // Action Handlers
    HeroAi.prototype.onMoveComplete = function () {
        triggerEvent.trigger(this.node, 'onTurnTaken', this, this.node);
        gameState_1.default.getCurrentLevel().setCameraTarget(this.node);
    };
    HeroAi.prototype.onSkipTurn = function () {
        triggerEvent.trigger(this.node, 'onLogAction', 'Waiting...');
        triggerEvent.trigger(this.node, 'onTurnTaken', this, this.node);
    };
    HeroAi.prototype.onDie = function () {
        this.DEBUG('Killed!');
        gameState_1.default.getCurrentLevel().deregisterActor(this);
        gameState_1.default.getCurrentLevel().gameOver();
    };
    HeroAi.prototype.onHit = function (hitter, hitterNode) {
        var entityComponent = hitterNode.getJSComponent('Entity');
        triggerEvent.trigger(this.node, 'onLogAction', "You are attacked by " + entityComponent.screenName);
    };
    HeroAi.prototype.onAttack = function (targetNode) {
        var entityComponent = targetNode.getJSComponent('Entity');
        this.DEBUG("Attacked " + targetNode.name);
        triggerEvent.trigger(this.node, 'onLogAction', "You attack " + entityComponent.screenName);
        triggerEvent.trigger(targetNode, 'onHit', this, this.node);
        // move will handle the turn taken
        // TODO: need to clean up the whole turn taking logic somehow, it could get really messy really quickly.
        // triggerEvent.trigger(this.node, 'onTurnTaken', this, this.node);
    };
    HeroAi.prototype.onHandleBump = function (targetNode) {
        var entityComponent = targetNode.getJSComponent('Entity');
        if (entityComponent.attackable) {
            triggerEvent.trigger(this.node, 'onAttack', targetNode);
        }
        else if (entityComponent.bumpable) {
            triggerEvent.trigger(targetNode, 'onBump', this, this.node);
            triggerEvent.trigger(this.node, 'onActionComplete', this, this.node);
        }
    };
    HeroAi.prototype.onHealthChanged = function () {
        gameState_1.default.getCurrentLevel().updateUi();
    };
    return HeroAi;
}(CustomJSComponent_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HeroAi;
