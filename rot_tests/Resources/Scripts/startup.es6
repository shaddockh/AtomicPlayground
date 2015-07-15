'use strict';

import 'blueprints';
import {nodeBuilder} from 'atomic-blueprintLib';

// Add the vendor scripts to the global namespace

Atomic.game.init(start, update);
Atomic.totalTime = 0;

// called at the start of play
function start() {

    const game = Atomic.game;

    // create a 2D scene
    game.createScene2D();

    nodeBuilder.createChild(game.scene, 'uiLevelGenerationChooser');
}

// called per frame
function update(timeStep) {
    Atomic.totalTime += timeStep;
}

