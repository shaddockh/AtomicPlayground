import {blueprintCatalog} from 'atomic-blueprintLib';
import {tiles} from 'blueprints/tiles';
import {ui} from 'blueprints/ui';
import {levelGenerators} from 'blueprints/levelGenerators';


blueprintCatalog.loadBlueprints(tiles, blueprint => print(`Loading blueprint: ${blueprint}`));
blueprintCatalog.loadBlueprints(ui, blueprint => print(`Loading blueprint: ${blueprint}`));
blueprintCatalog.loadBlueprints(levelGenerators, blueprint => print(`Loading blueprint: ${blueprint}`));

blueprintCatalog.hydrateAllBlueprints();

