import {blueprintCatalog} from 'atomic-blueprintLib';
import {tiles} from 'Blueprints/tiles';
import {ui} from 'Blueprints/ui';
import {levelGenerators} from 'Blueprints/levelGenerators';
import {entities} from 'Blueprints/entities';


blueprintCatalog.loadBlueprints(tiles, loader);
blueprintCatalog.loadBlueprints(ui, loader);
blueprintCatalog.loadBlueprints(levelGenerators, loader);
blueprintCatalog.loadBlueprints(entities, loader);

function loader(blueprint) {
    console.log(`Loading blueprint: ${blueprint}`);
}
blueprintCatalog.hydrateAllBlueprints();

