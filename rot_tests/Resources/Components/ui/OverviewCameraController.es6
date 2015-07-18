'use strict';

var game = Atomic.game;
var node = self.node;

var defaultBlueprint = {
    allowZoom: true,
    zoomIncrement: 0.05,
    allowPan: true
};


// Initialize the blueprint here for elements that need to happen prior to start
var blueprint = node.getComponentBlueprint(self, defaultBlueprint);
/**
 * Perform any setup required before the first start iteration
 */
(function () {

}());

function start() {

}

function update(timeStep) {
    if (blueprint.allowZoom) {
        var wheel = game.input.getMouseMoveWheel();
        if (wheel) {
            game.camera.zoom += blueprint.zoomIncrement * wheel;
        }
    } 

    //if (blueprint.pan) {
        //TODO: panning
    //}
}
