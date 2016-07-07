"use strict";
var gameChannels_1 = require('../Modules/gameChannels');
var hud_ui_1 = require('./hud.ui');
var levelgen_selector_ui_1 = require('./levelgen_selector.ui');
var endgame_ui_1 = require('./endgame.ui');
var log_ui_1 = require('./log.ui');
var instructions_ui_1 = require('./instructions.ui');
var baseUi = new Atomic.UIView();
var windowRefs = {};
var channelId = gameChannels_1.uiChannel.subscribe(handleChannelMessages);
gameChannels_1.gameChannel.subscribe(function (topic) {
    if (topic === 'shutdown:game') {
        gameChannels_1.uiChannel.unsubscribe(channelId);
    }
});
function launchWindow(name, windowInstance, messageParms) {
    windowRefs[name] = windowInstance;
    windowInstance.openWindow.apply(windowInstance, messageParms);
}
function handleChannelMessages(topic) {
    var messageParms = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        messageParms[_i - 1] = arguments[_i];
    }
    switch (topic) {
        case 'show:hud':
            launchWindow('hud', new hud_ui_1.default(baseUi), messageParms);
            break;
        case 'show:levelgen':
            launchWindow('levelgen', new levelgen_selector_ui_1.default(baseUi), messageParms);
            break;
        case 'show:endgame':
            launchWindow('endgame', new endgame_ui_1.default(baseUi), messageParms);
            break;
        case 'show:instructions':
            launchWindow('instructions', new instructions_ui_1.default(baseUi), messageParms);
            break;
        case 'show:log':
            launchWindow('log', new log_ui_1.default(baseUi), messageParms);
            break;
    }
}
