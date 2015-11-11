// a flickering light component

'use strict';
'atomic component';

export default class LightFlicker extends Atomic.JSComponent {

    inspectorFields = {
        baseRange: 45,
        // make sure first update catches.  Can also be used to offset different lights
        time: 100,
        flicker: 'mmmaaaammmaaaabcdefgabcdefg',
        speed: 0.05
    };

    light:Atomic.Component = null;
    lightType:number = 0;
    baseRange:number = 45;
    time:number = 100;
    flicker:string;
    speed:number = 0.05;

    private targetValue:number;
    private index:number;


    static POINT_LIGHT_2D = 1;
    static LIGHT = 2;

    start() {
        this.light = this.node.getComponent<Atomic.Light>('Light');
        this.lightType = LightFlicker.LIGHT;
        if (!this.light) {
            this.light = this.node.getComponent<Atomic.PointLight2D>('PointLight2D');
            this.lightType = LightFlicker.POINT_LIGHT_2D;
        }

        this.targetValue = this.baseRange;
        this.index = Math.random() * (this.flicker.length - 1);
    }

    incDecLightRange(range) {
        switch (this.lightType) {
        case LightFlicker.POINT_LIGHT_2D:
            (<Atomic.PointLight2D>this.light).radius += range;
            break;
        case LightFlicker.LIGHT:
            (<Atomic.Light>this.light).range += range;
            break;
        }
    }

    getLightRange() {
        switch (this.lightType) {
        case LightFlicker.POINT_LIGHT_2D:
            return (<Atomic.PointLight2D>this.light).radius;
        case LightFlicker.LIGHT:
            return (<Atomic.Light>this.light).range;
        }
        return -1;
    }

    update(timestep) {
        let time = (this.time += timestep);
        if (time > this.speed) {
            let index = this.index++;
            time = this.time = 0.0;
            if (index >= this.flicker.length) {
                index = this.index = 0;
              }

            let targetValue = this.targetValue = this.baseRange * (this.flicker.charCodeAt(index) / 255);

            if (this.getLightRange() < targetValue) {
                this.incDecLightRange(timestep * 10);
            } else if (this.getLightRange() > targetValue) {
                this.incDecLightRange(timestep * -10);
            }
        }

    }
}
