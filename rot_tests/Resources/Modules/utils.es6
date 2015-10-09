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

export function dumpNode(node) {
    console.log('NODE JS COMPONENTS:');
    let components = node.getComponents('JSComponent');
    for (let x = 0; x < components.length; x++) {
        let component = components[x];
        console.log('Component: ' + component.componentName);
    }
}
