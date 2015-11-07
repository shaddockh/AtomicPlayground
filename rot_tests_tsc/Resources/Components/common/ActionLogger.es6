'use strict';
"atomic component";
import CustomJSComponent from 'CustomJSComponent';
import { uiChannel } from 'gameChannels';

export default class ActionLogger extends CustomJSComponent {
    inspectorFields = {
        debug: false
    };

    start() {}

    onLogAction(message, color) {
        uiChannel.sendMessage('log:addmessage', message, color);
    }
}
