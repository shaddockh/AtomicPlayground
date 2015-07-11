var blueprintLib = require('blueprintLib');

// This script is the main entry point of the game
require("AtomicGame");

Atomic.game.init(start, update);


// called at the start of play
function start() {

	var game = Atomic.game;

	// create a 2D scene
	game.createScene2D();

    // Use the blueprint system to spawn the blueprints named star1 and star2.  All components that
    // these need are defined in the blueprint and the blueprint system handles attaching the components.
    // Each component, in turn is in charge of initializing itself based upon it's section of the blueprint
    var spaceNode = blueprintLib.createChild(game.scene, 'star1');
    var spaceNode2 = blueprintLib.createChild(game.scene, 'star2');
}

// called per frame
function update(timeStep) {


}
