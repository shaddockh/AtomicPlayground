"use strict";
var tiles_1 = require('./Blueprints/tiles');
var ui_1 = require('./Blueprints/ui');
var levelGenerators_1 = require('./Blueprints/levelGenerators');
var entities_1 = require('./Blueprints/entities');
// put together all of the combined blueprints
function combine(target) {
    var source = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        source[_i - 1] = arguments[_i];
    }
    source.forEach(function (s) {
        for (var bpName in s) {
            target[bpName] = s[bpName];
        }
    });
}
var combinedBlueprints = {};
combine(combinedBlueprints, tiles_1.tiles, ui_1.ui, levelGenerators_1.levelGenerators, entities_1.entities);
exports.blueprints = combinedBlueprints;
