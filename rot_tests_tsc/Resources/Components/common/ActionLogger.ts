'use strict';
'atomic component';
import CustomJSComponent from 'CustomJSComponent';
import { uiChannel } from '../../Modules/gameChannels';

export default class ActionLogger extends CustomJSComponent {
    inspectorFields = {
        debug: false
    };

    onLogAction(message, color) {
        uiChannel.sendMessage('log:addmessage', message, color);
    }
}
