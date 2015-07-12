import {tiles} from 'blueprints/tiles';
import {ui} from 'blueprints/ui';
import {levelGenerators} from 'blueprints/levelGenerators';

/**
 * Constructs the entire blueprint library from individual imports
 * TODO: This seems backwards -- need to expose and addBlueprints to blueprintLib
 */
function buildBlueprints(...libs) {
    var bplib = {};
    for (let i = 0, iLen = libs.length; i < iLen; i++) {
        let lib = libs[i];
        for (let bp in lib) {
            bplib[bp] = lib[bp];
        }
    }
    return bplib;
}

export const blueprints = buildBlueprints(tiles, ui, levelGenerators);
