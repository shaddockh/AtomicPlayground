import {blueprintCatalog} from 'atomic-blueprintLib';
import {tiles} from 'blueprints/tiles';
import {ui} from 'blueprints/ui';
import {levelGenerators} from 'blueprints/levelGenerators';


blueprintCatalog.loadBlueprints(tiles, blueprint => {
    console.log(`Loading blueprint: ${blueprint}`);
});

blueprintCatalog.loadBlueprints(ui, blueprint => {
    console.log(`Loading blueprint: ${blueprint}`);
});

blueprintCatalog.loadBlueprints(levelGenerators, blueprint => {
    console.log(`Loading blueprint: ${blueprint}`);
});

blueprintCatalog.hydrateAllBlueprints();

