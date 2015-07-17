2015-07-16
---
* modified to use the atomic-blueprintlib for blueprint handling
* updated code appropriately
* no longer need position component for just spawning an entity at a position.  The atomic-blueprintlib sets the position on the node object
* forked the rot.js repo and made regex changes so that it loads into atomic game engine.  Updated package.js to reference that specific branch: shaddockh/rot.js#atomic-game-engine
* removed vendor_overrides (not longer needed)
