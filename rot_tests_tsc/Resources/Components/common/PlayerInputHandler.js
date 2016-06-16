'use strict';
'atomic component';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var triggerEvent = require('atomicTriggerEvent');
var metrics = require('metricsGatherer');
var gameState_1 = require('../../Modules/gameState');
var CustomJSComponent_1 = require('CustomJSComponent');
var PlayerActions = (function () {
    function PlayerActions() {
    }
    PlayerActions.NO_ACTION = 0;
    PlayerActions.MOVE_LEFT = 1;
    PlayerActions.MOVE_RIGHT = 2;
    PlayerActions.MOVE_UP = 3;
    PlayerActions.MOVE_DOWN = 4;
    PlayerActions.SKIP_TURN = 5;
    PlayerActions.DUMP_METRICS = 6;
    return PlayerActions;
}());
var PlayerInputHandler = (function (_super) {
    __extends(PlayerInputHandler, _super);
    function PlayerInputHandler() {
        _super.apply(this, arguments);
        this.inspectorFields = {
            debug: false
        };
        /**
         * Are we idle, waiting for an action?
         */
        this.idle = false;
        this.keymap = (_a = {},
            _a[PlayerActions.MOVE_LEFT] = [Atomic.KEY_LEFT, Atomic.KEY_H, Atomic.KEY_A],
            _a[PlayerActions.MOVE_RIGHT] = [Atomic.KEY_RIGHT, Atomic.KEY_L, Atomic.KEY_D],
            _a[PlayerActions.MOVE_UP] = [Atomic.KEY_UP, Atomic.KEY_K, Atomic.KEY_W],
            _a[PlayerActions.MOVE_DOWN] = [Atomic.KEY_DOWN, Atomic.KEY_J, Atomic.KEY_S],
            _a[PlayerActions.SKIP_TURN] = [Atomic.KEY_SPACE],
            _a[PlayerActions.DUMP_METRICS] = [Atomic.KEY_0],
            _a
        );
        var _a;
    }
    PlayerInputHandler.prototype.getCurrentAction = function () {
        var input = Atomic.input, keymap = this.keymap;
        for (var action in keymap) {
            var keys = keymap[action];
            if (keys && keys.length) {
                for (var i = 0; i < keys.length; i++) {
                    if (gameState_1.default.getCurrentLevel().turnBased) {
                        if (input.getKeyPress(keys[i])) {
                            return parseInt(action);
                        }
                    }
                    else {
                        if (input.getKeyDown(keys[i])) {
                            return parseInt(action);
                        }
                    }
                }
            }
        }
        return PlayerActions.NO_ACTION;
    };
    /**
     * On the start of our turn, we want to start listening for player commands
     */
    PlayerInputHandler.prototype.onActionBegin = function () {
        this.idle = true;
    };
    PlayerInputHandler.prototype.update = function () {
        if (!gameState_1.default.getCurrentLevel().isGameOver && this.idle) {
            var action = this.getCurrentAction();
            if (action !== PlayerActions.NO_ACTION) {
                this.idle = false;
                switch (action) {
                    case PlayerActions.MOVE_LEFT:
                        this.DEBUG('Processing Action: move left');
                        triggerEvent.trigger(this.node, 'onTryMove', [-1, 0]);
                        break;
                    case PlayerActions.MOVE_RIGHT:
                        this.DEBUG('Processing Action: move right');
                        triggerEvent.trigger(this.node, 'onTryMove', [1, 0]);
                        break;
                    case PlayerActions.MOVE_UP:
                        this.DEBUG('Processing Action: move up');
                        triggerEvent.trigger(this.node, 'onTryMove', [0, 1]);
                        break;
                    case PlayerActions.MOVE_DOWN:
                        this.DEBUG('Processing Action: move down');
                        triggerEvent.trigger(this.node, 'onTryMove', [0, -1]);
                        break;
                    case PlayerActions.SKIP_TURN:
                        this.DEBUG('Processing Action: skip turn');
                        triggerEvent.trigger(this.node, 'onSkipTurn');
                        break;
                    case PlayerActions.DUMP_METRICS:
                        this.DEBUG('Processing Action: dump metrics');
                        metrics.dumpMetrics();
                        this.idle = true;
                        break;
                    default:
                        this.idle = true;
                        break;
                }
            }
        }
    };
    PlayerInputHandler.prototype.DEBUG = function (msg) {
        if (this.debug) {
            console.log("PlayerInputHandler: " + msg);
        }
    };
    return PlayerInputHandler;
}(CustomJSComponent_1.default));
module.exports = PlayerInputHandler;
