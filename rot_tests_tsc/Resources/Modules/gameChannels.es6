/*
 * This file exposes all of the channels that can be subscribed to / sent messages on
 */
import channel from './messageChannel';

/** channel for communicating with the ui and the camera and subscribing to their events */
export const uiChannel = channel('ui');

/** channel for communicating with the current level handler and subscribing to level events */
export const levelChannel = channel('level');

/** channel for communicating with the game handler and subscribing to game events */
export const gameChannel = channel('game');
