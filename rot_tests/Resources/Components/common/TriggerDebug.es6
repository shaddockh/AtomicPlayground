'use strict';
'atomic component';
import CustomJSComponent from 'CustomJSComponent';

/**
 * Simple component that will listen for trigger messages and report on them
 */
export default class Entity extends CustomJSComponent {
    constructor() {
        super();
        this.debug = true;
    }

    onAny(msg) {
        this.DEBUG(`Got a message: ${msg}`);
    }
}
