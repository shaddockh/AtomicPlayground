# ROT Test

Testing out using the ROguelike Toolkit (http://ondras.github.io/rot.js/hp/) for JavaScript with the Atomic Game Engine

# Features (In Progress)
* Level generation explorer - interactively generate maps of different types.  The idea is that you should be able to configure a level generator from a blueprint and provide options to the level generator component.

# Features (future planned)
* Walking around a map
* FOV (Field of View)
* Dynamic lighting tests
* Monsters / Combat (Melee)
* Treasure/Inventory
* win/lose scenario
* Combat (Ranged)
* Linked maps

# Notes:
* the Duktape javascript parser doesn't like some of the regex in ROT.js, so I needed to clone and fix those elements in order for it to load.  Modifications were put into vendor_overrides and the vendor.js require statement updated.  I may fork the rot.js repo and add fixes for AtomicEngine if I got far enough along on this.
* Discovered that babel will hoist all of the imports to the top of the file.  This was causing havok in main.js where I was trying to import ROT before vendor.js had been loaded
```
import 'Atomic';
Atomic.script('vendor');
import ROT from 'rot-js'
```
became
```
require('Atomic');
var ROT = require('rot-js');
Atomic.script(vendor);
```
which caused ROT to be undefined.

* When generating the map, I'm adding nodes to the parent map node.  It looks like AtomicNode.remove() and .removeAllChildren() don't actually destroy the nodes, they just remove them) don't actually destroy the nodes, they just remove them.  To get around it, I have the parent node keep track of it's children and then respond to an 'onClear' event to destroy the children.  TODO: need to determine a better way
* Playing around with splitting out multiple blueprint files and then just requiring them in at runtime and assembling the blueprint library.  This blueprint library was only ever supposed to be a temporary cherry picking of the main JS blueprint library I've been developing. It may be time to start pulling in the main library because it has some additional features. (Or just fork it for Atomic use)

