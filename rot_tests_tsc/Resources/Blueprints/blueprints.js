"use strict";
var atomic_blueprintLib_1 = require('atomic-blueprintLib');
var tiles_1 = require('./tiles');
var ui_1 = require('./ui');
var levelGenerators_1 = require('./levelGenerators');
var entities_1 = require('./entities');
atomic_blueprintLib_1.blueprintCatalog.loadBlueprints(tiles_1.tiles, loader);
atomic_blueprintLib_1.blueprintCatalog.loadBlueprints(ui_1.ui, loader);
atomic_blueprintLib_1.blueprintCatalog.loadBlueprints(levelGenerators_1.levelGenerators, loader);
atomic_blueprintLib_1.blueprintCatalog.loadBlueprints(entities_1.entities, loader);
function loader(blueprint) {
    console.log("Loading blueprint: " + blueprint);
}
atomic_blueprintLib_1.blueprintCatalog.hydrateAllBlueprints();
