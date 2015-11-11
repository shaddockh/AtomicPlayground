'use strict';
'atomic component';
import CustomJSComponent from 'CustomJSComponent';
import gameState from '../../Modules/gameState';
//import * as triggerEvent from 'atomicTriggerEvent';

class GraphicEffect extends CustomJSComponent {
    inspectorFields = {
        debug: false,
        duration: 1,
        speed: 1,
        zoom: true,
        zoomTo: 1,
        fadeOut: true
    };

    private t: number = 0;

    duration: number = 1;
    zoom: boolean = true;
    zoomTo: number = 1;
    fadeOut: boolean = true;
    speed:number = 1;

    start() {
        this.t = 0;
    }

    lerp(start, end, time) {
        return (start + time * (end - start));
    }

    update(timeStep) {
        let unitSize = gameState.getCurrentLevelRenderer().cellUnitSize;
        if (this.t < this.duration) {
            this.t = Math.min(this.t + timeStep / (this.speed * .1), this.duration); // Sweeps from 0 to duration in time seconds
            if (this.zoom) {
                let curScale = this.lerp(unitSize, this.zoomTo * unitSize, this.t);
                this.node.scale2D = [curScale, curScale];
            }
            if (this.fadeOut) {
                let alpha = this.lerp(0.0, 1.0, this.t / this.duration);
                this.node.getComponent<Atomic.StaticSprite2D>('StaticSprite2D').setAlpha(1 - alpha);
            }
        } else {
            Atomic.destroy(this.node);
        }
    }
}
export = GraphicEffect;
