import {tiles} from './Blueprints/tiles';
import {ui} from './Blueprints/ui';
import {levelGenerators} from './Blueprints/levelGenerators';
import {entities} from './Blueprints/entities';

// put together all of the combined blueprints
function combine(target, ...source) {
    source.forEach(s => {
        for (let bpName in s) {
            target[bpName] = s[bpName];
        }
    });
}

let combinedBlueprints = {};
combine(combinedBlueprints, tiles, ui, levelGenerators, entities);
export const blueprints = combinedBlueprints;
