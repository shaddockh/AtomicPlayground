/*
 * This file exposes all of the channels that can be subscribed to / sent messages on
 */
import MessageChannel from './messageChannel';

/** channel for communicating with the ui and the camera and subscribing to their events */
export const uiChannel = new MessageChannel('ui');

/** channel for communicating with the current level handler and subscribing to level events */
export const levelChannel = new MessageChannel('level');

/** channel for communicating with the game handler and subscribing to game events */
export const gameChannel = new MessageChannel('game');
