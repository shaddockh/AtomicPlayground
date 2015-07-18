2015-07-18
---
* Made camera zoomable with the mousewheel
* discoverd Atomic.PIXEL_SIZE to help with scaling the tiles appropriately so that they align correctly
* added cellPixelSize to the LevelGenerator blueprint

2015-07-16
---
* modified to use the atomic-blueprintlib for blueprint handling
* updated code appropriately
* no longer need position component for just spawning an entity at a position.  The atomic-blueprintlib sets the position on the node object
* forked the rot.js repo and made regex changes so that it loads into atomic game engine.  Updated package.js to reference that specific branch: shaddockh/rot.js#atomic-game-engine
* removed vendor_overrides (no longer needed)

