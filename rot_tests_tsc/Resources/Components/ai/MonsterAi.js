'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var triggerEvent = require('atomicTriggerEvent');
var CustomJSComponent_1 = require('CustomJSComponent');
var MapData_1 = require('../../Modules/MapData');
var ROT = require('rot-js');
var gl_matrix_1 = require('gl-matrix');
var metrics = require('metricsGatherer');
var gameState_1 = require('../../Modules/gameState');
var MonsterAi = (function (_super) {
    __extends(MonsterAi, _super);
    function MonsterAi() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: false,
            chaseEnemy: true,
            deathEffect: 'death_effect',
            sightRadius: 4,
            trackingRadius: 8,
            isHunting: false
        };
    }
    MonsterAi.prototype.resolveTurn = function () {
        // nothing to do
    };
    ;
    MonsterAi.prototype.start = function () {
        if (gameState_1.default.getCurrentLevel()) {
            this.DEBUG('Registering self with scheduler');
            gameState_1.default.getCurrentLevel().registerActor(this);
        }
    };
    MonsterAi.prototype.canWalk = function (point) {
        var pos = this.node.getJSComponent('Entity').getPosition();
        // See if we are trying to get to ourselves
        if (gl_matrix_1.vec2.dist(point, pos) === 0) {
            return true;
        }
        var level = gameState_1.default.getCurrentLevel();
        if (!level.isValidPos(point) || level.getTileAt(point).terrainType !== MapData_1.default.TILE_FLOOR) {
            return false;
        }
        var canWalk = true;
        level.iterateEntitiesAt(point, function (entity) {
            if (entity.entityComponent) {
                if (entity.entityComponent.blocksPath) {
                    canWalk = false;
                    return false;
                }
            }
        });
        return canWalk;
    };
    MonsterAi.prototype.setTurnResolver = function (resolver) {
        this.resolveTurn = resolver;
    };
    MonsterAi.prototype.onActionComplete = function () {
        // call the callback, notifying the scheduler that we are done
        if (this.resolveTurn) {
            this.resolveTurn();
        }
    };
    MonsterAi.prototype.act = function () {
        var _this = this;
        metrics.start('MonsterAi');
        try {
            this.DEBUG('contemplating action.');
            if (!this.chaseEnemy) {
                return;
            }
            var position = this.node.getJSComponent('Entity').getPosition();
            var nearbyEntities = gameState_1.default.getCurrentLevel().getEntitiesInRadius(position, this.trackingRadius);
            var hero = nearbyEntities.filter(function (entity) {
                return entity.blueprint === 'hero';
            }).pop();
            // no hero in radius..go back to sleep
            if (!hero) {
                return;
            }
            var playerPos = hero.entityComponent.getPosition();
            var astar = new ROT.Path.AStar(playerPos[0], playerPos[1], function (x, y) { return _this.canWalk([x, y]); }, {
                topology: 4
            });
            var path_1 = [];
            var pos = this.node.getJSComponent('Entity').getPosition();
            astar.compute(pos[0], pos[1], function (x, y) {
                path_1.push([x, y]);
            });
            path_1.shift(); // remove current position
            // TODO ideally we would want to scan the sight radius, but for now we are just going to see if
            // we are in range of the hero
            // get a direction vector
            if (!this.isHunting && path_1.length < this.sightRadius && path_1.length > 0) {
                this.isHunting = true;
                this.DEBUG('enemy seen.  switching to hunting.');
            }
            if (this.isHunting && path_1.length < this.trackingRadius && path_1.length > 0) {
                this.DEBUG("hunting enemy located " + path_1.length + " steps away.");
                var target = path_1.shift();
                var dir = gl_matrix_1.vec2.sub(gl_matrix_1.vec2.create(), target, pos);
                gl_matrix_1.vec2.normalize(dir, dir);
                triggerEvent.trigger(this.node, 'onTryMove', dir);
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
            }
        }
        finally {
            metrics.stop('MonsterAi');
        }
    };
    MonsterAi.prototype.onDie = function (killerComponent, killerNode) {
        this.DEBUG('Killed!');
        gameState_1.default.getCurrentLevel().deregisterActor(this);
        if (this.deathEffect) {
            gameState_1.default.getCurrentLevelRenderer().addVisualEffect(this.deathEffect, this.node.position2D);
        }
        var entityComponent = this.node.getJSComponent('Entity');
        triggerEvent.trigger(killerNode, 'onLogAction', entityComponent.screenName + " dies.");
        gameState_1.default.getCurrentLevel().killEnemy();
        triggerEvent.trigger(this.node, 'onDestroy');
        Atomic.destroy(this.node);
    };
    MonsterAi.prototype.onAttack = function (targetNode) {
        this.DEBUG("Attacked " + targetNode.name);
        triggerEvent.trigger(targetNode, 'onHit', this, this.node);
        // handled in onMoveComplete -- note that this won't work for actors that attack without moving.
        //triggerEvent.trigger(this.node, 'onActionComplete', this, this.node);
    };
    MonsterAi.prototype.onHandleBump = function (targetNode) {
        var entityComponent = targetNode.getJSComponent('Entity');
        // just attack, don't allow for picking up items or other bump actions
        if (entityComponent.attackable) {
            triggerEvent.trigger(this.node, 'onAttack', targetNode);
        }
    };
    MonsterAi.prototype.onMoveComplete = function () {
        triggerEvent.trigger(this.node, 'onActionComplete', this, this.node);
    };
    return MonsterAi;
}(CustomJSComponent_1.default));
module.exports = MonsterAi;
