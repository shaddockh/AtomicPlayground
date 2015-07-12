'use strict';

// This script is the main entry point of the game
// Oddly, we have to make sure we bring in the vendor script before we start building up the game.  
// Babel js will always move imports above user code, so it was trying to import ROT before it had been loaded by Atomic.script
import 'AtomicGame';
Atomic.script('vendor');
Atomic.script('startup');
