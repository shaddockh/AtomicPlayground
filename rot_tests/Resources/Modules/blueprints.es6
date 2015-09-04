import {blueprintCatalog} from 'atomic-blueprintLib';
import {tiles} from 'blueprints/tiles';
import {ui} from 'blueprints/ui';
import {levelGenerators} from 'blueprints/levelGenerators';
import {entities} from 'blueprints/entities';


blueprintCatalog.loadBlueprints(tiles, loader);
blueprintCatalog.loadBlueprints(ui, loader);
blueprintCatalog.loadBlueprints(levelGenerators, loader);
blueprintCatalog.loadBlueprints(entities, loader);

function loader(blueprint) {
    console.log(`Loading blueprint: ${blueprint}`);
}
blueprintCatalog.hydrateAllBlueprints();

