# ROT Test

Testing out using the ROT.js - ROguelike Toolkit (http://ondras.github.io/rot.js/hp/) for JavaScript with the Atomic Game Engine

A Web Build is available at: http://atomicplayground.yanksandbrits.net/rot_tests/ . 

Note that currently Firefox is the most optimal to use, but it is still painfully slow.  There is something happening in the web build that is slowing it down that is not
happening in the native build.

## Premise
Walk around a randomly generated dungeon level, pick up some treasure and items, and kill all the nasties to win.

## Features (Functional)
* Level generation explorer - interactively generate maps of different types.  The idea is that you should be able to configure a level generator from a blueprint and provide options to the level generator component.
* Walking around a map
* Dynamic lighting tests
* Message console
* Status UI
* Monsters / Combat (Melee)
* win/lose scenario
* FOV (Field of View)
* Items (Health Potion)

## Features (In Progress)

## Features (future planned)

## Features that may be too advanced to go into this example
* Combat (Ranged)
* Linked maps 
* Inventory
* Treasure

## Notes:

* run ```npm install``` in the root of this project to pull int the necessary dependencies
* run ```npm install -g babel babel-eslint bower gulp``` for the global library dependencies
* run ```gulp``` from the root of this project to generate the build folder


When running the build, you can select the different map types to generate.  If you want to play one of the generated maps, press the RUN button and you can walk around.

## Keys
* supports (WASD, VI, Arrows)
* move up - W or K or Up Arrow
* move left - A or H or Left Arrow
* move down - S or J or Down arrow
* move right - D or L or Right Arrow
* skip turn - SPACE
