2015-09-08
---
Lots of Changes - some highlights:
* Switched to TurboBadger ui
* Updated code to work with source version of Atomic Game Engine
* All different types of ROT.js map types can be rendered
* Each map type can be 'run' which allows for walking around map
* light is attached to hero as you walk around map
* created a Door component that blocks movement and light until opened
* in the ROTDigger map, there are doors that can be opened
* Movement can be set up as either real time or turn based.  (The only difference at this point is that it listens for keypress vs keydown events)
* Starting to set up action handlers that can be attached to creatures.  Only one currently is Movement which allows the input system to send an onMove message that gets intercepted.
  * One main benefit of this is that other systems can send an onMove message so all creature movement uses the same controller
* Integrated ES-Lint for linting of the code and have been tweaking the settings

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

