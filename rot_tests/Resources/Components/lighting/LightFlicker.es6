// a flickering light component

'use strict';
"atomic component";

export default class LightFlicker extends Atomic.JSComponent {

    inspectorFields = {
        baseRange: 45,
        flicker: 'mmmaaaammmaaaabcdefgabcdefg'
    };

    start() {
        this.light = this.node.getComponent('Light');
        if (!this.light) {
            this.light = this.node.getComponent('PointLight2D');
            this.rangeName = 'radius';
        } else {
            this.rangeName = 'range';
        }
        // make sure first update catches
        this.time = 100;
        this.targetValue = this.baseRange;
        this.index = Math.random() * (this.flicker.length - 1);
    }

    update(timestep) {
        this.time += timestep;
        if (this.time > .05) {
            this.index++;
            this.time = 0.0;
            if (this.index >= this.flicker.length) {
                this.index = 0;
            }

            this.targetValue = this.baseRange * (this.flicker.charCodeAt(this.index) / 255);
        }

        if (this.light[this.rangeName] < this.targetValue) {
            this.light[this.rangeName] += timestep * 10;
        }

        if (this.light[this.rangeName] > this.targetValue) {
            this.light[this.rangeName] -= timestep * 10;
        }

    }
}
