# ROT Test

Testing out using the ROT.js - ROguelike Toolkit (http://ondras.github.io/rot.js/hp/) for JavaScript with the Atomic Game Engine

# Features (In Progress)
* Level generation explorer - interactively generate maps of different types.  The idea is that you should be able to configure a level generator from a blueprint and provide options to the level generator component.
* Walking around a map
* Dynamic lighting tests
* Monsters / Combat (Melee) (in progress)
* win/lose scenario (in progress)

# Features (future planned)
* FOV (Field of View)
* Treasure/Inventory

# Features that may be too advanced to go into this example
* Combat (Ranged)
* Linked maps 

# Notes:

* run ```npm install``` in the root of this project to pull int the necessary dependencies
* run ```npm install -g babel babel-eslint bower gulp``` for the global library dependencies
* run ```gulp``` from the root of this project to generate the build folder


When running the build, you can select the different map types to generate.  If you want to play one of the generated maps, press the RUN button and you can walk around.

# Keys
* supports (WASD, VI, Arrows)
* move up - W or K or Up Arrow
* move left - A or H or Left Arrow
* move down - S or J or Down arrow
* move right - D or L or Right Arrow
* skip turn - SPACE
