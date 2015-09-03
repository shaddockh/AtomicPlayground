'use strict';
'atomic component';
import * as triggerEvent from 'atomicTriggerEvent';

export default class LevelRunner extends Atomic.JSComponent {

    inspectorFields = {
        debug: false
    };

    onSetMapData(mapData) {
        // let's just defer to the renderer for now
        //
        if (this.debug) {
            console.log(`LevelRunner: onSetMapData called.`);
            console.log(`LevelRunner: dimensions - ${mapData.width} x ${mapData.height}`);
        }
        this.mapData = mapData;
        triggerEvent.trigger(this.node, 'onRender', mapData);
    }

}
