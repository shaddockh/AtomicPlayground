'use strict';
"atomic component";
import CustomJSComponent from 'CustomJSComponent';
import channel from 'channels';
const uiChannel = channel('ui');

export default class ActionLogger extends CustomJSComponent {
    inspectorFields = {
        debug: true
    };

    start() {}

    onLogAction(message, color) {
        uiChannel.sendMessage('log:addmessage', message, color);
    }
}
