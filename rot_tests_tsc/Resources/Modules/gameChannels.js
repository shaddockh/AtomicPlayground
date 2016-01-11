/*
 * This file exposes all of the channels that can be subscribed to / sent messages on
 */
var messageChannel_1 = require('./messageChannel');
/** channel for communicating with the ui and the camera and subscribing to their events */
exports.uiChannel = new messageChannel_1.default('ui');
/** channel for communicating with the current level handler and subscribing to level events */
exports.levelChannel = new messageChannel_1.default('level');
/** channel for communicating with the game handler and subscribing to game events */
exports.gameChannel = new messageChannel_1.default('game');
