'use strict';

export function randomNumber(min = 0, max = -1) {

    let newMax = max,
        newMin = min;
    if (max < min) {
        newMax = min;
        newMin = 0;
    }

    return Math.floor(Math.random() * newMax) + newMin;
}
