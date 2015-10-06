2015-10-04
---
* Cleaning up the code in order to wrap up this example

2015-09-19
---
* integrated the ROT visibility calcs

2015-09-17
---
* integrated the ROT turn based scheduler.
  * Now all actors will register with the scheduler and have their 'act' method called in the proper sequence
  * The HeroAi component will control pausing the scheduler when it is the player's turn and re-enable it once the player makes a move
* started work on a basic attack / health system.  Basically, each entity has a [Health] component and when it gets an onBump message, it will reduce life
  * if life reaches 0, then an onDie message will be sent and handled by the ai component.
* bound [space] to skip turn

2015-09-16
---
* Lots of work on the core blueprint library to support blueprints working in a build
* updated textures to be POT compliant (web-gl build was complaining)
* begin work on integrating gl-matrix and the vector library in the map so we use vector calcs for movement, etc.
* lots of tuning of the movement component to support smooth movement...think it should be solved now
* added a rat with a very simple Astar ai component.  It basically tries to find the player and then paths to it as soon as all the doors between it and the player are open.
  * should be more of a awareness-radius so that if the player comes within it's zone of awareness, it wakes up and heads toward the player
* iniital thoughts about supporting real time and turn based, but until the scheduler is in place, it's not going to work right.


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

