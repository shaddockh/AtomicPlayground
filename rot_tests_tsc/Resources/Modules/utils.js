'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
function randomNumber(min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = -1; }
    var newMax = max, newMin = min;
    if (max < min) {
        newMax = min;
        newMin = 0;
    }
    return Math.floor(Math.random() * newMax) + newMin;
}
exports.randomNumber = randomNumber;
function dumpNode(node) {
    console.log('NODE JS COMPONENTS:');
    var components = node.getComponents('JSComponent');
    for (var x = 0; x < components.length; x++) {
        var component = components[x];
        console.log('Component: ' + component.componentName);
    }
}
exports.dumpNode = dumpNode;
