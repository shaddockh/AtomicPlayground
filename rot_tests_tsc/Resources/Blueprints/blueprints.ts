import {blueprintCatalog} from 'atomic-blueprintLib';
import {tiles} from './tiles';
import {ui} from './ui';
import {levelGenerators} from './levelGenerators';
import {entities} from './entities';


blueprintCatalog.loadBlueprints(tiles, loader);
blueprintCatalog.loadBlueprints(ui, loader);
blueprintCatalog.loadBlueprints(levelGenerators, loader);
blueprintCatalog.loadBlueprints(entities, loader);

function loader(blueprint) {
    console.log(`Loading blueprint: ${blueprint}`);
}

blueprintCatalog.hydrateAllBlueprints();
