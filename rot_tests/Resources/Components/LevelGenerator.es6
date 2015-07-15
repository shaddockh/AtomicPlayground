'use strict';
import ROT from 'rot-js';
import {builder as blueprintBuilder} from 'atomic-blueprintLib';

var game = Atomic.game;
var node = self.node;

var defaultBlueprint = {
    strategy: 'Digger'
};

var children = [];

// Initialize the blueprint here for elements that need to happen prior to start
var blueprint = node.getComponentBlueprint(self, defaultBlueprint);
/**
 * Perform any setup required before the first start iteration
 */
(function () {

}());

function start() {
    var map = {};

    // Taken from the Ananais tutorial.. there is a better way to store maps, but this works for now.
    var builder = new ROT.Map[blueprint.strategy]();

    builder.create((x, y, value) => {
        if (value) {
            return;
        } /* do not store walls */

        var key = x + "," + y;
        map[key] = ".";
    });

    let scale = 8,
        translationX = -5,
        translationY = -1;

    for (let floorCoord in map) {
        let [x, y] = floorCoord.split(',');
        children.push(blueprintBuilder.createChildAtPosition(node, 'tile_floor_overview', [parseInt(x) / scale + translationX, parseInt(y) / scale + translationY]));
    }
}

self.onClear = function() {
    for (let i =0; i < children.length; i++) {
        Atomic.destroy(children[i]);
    }
    children = [];
};
