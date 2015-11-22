# ROT Test

Testing out using the ROT.js - ROguelike Toolkit (http://ondras.github.io/rot.js/hp/) for JavaScript with the Atomic Game Engine

***New***: This version has been converted to TypeScript.

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

## Features not included in this example, but should be (maybe in the future)
* Combat (Ranged)
* Linked maps
* Inventory
* Treasure

## Notes:

* run ```npm install``` in the root of this project to pull in the necessary dependencies
* run ```npm install -g gulp``` for the global library dependencies
* run ```gulp``` from the root of this project to generate the build folder


When running the build, you can select the different map types to generate.  If you want to play one of the generated maps, press the RUN button and you can walk around.

## Keys
* supports (WASD, VI, Arrows)
* move up - W or K or Up Arrow
* move left - A or H or Left Arrow
* move down - S or J or Down arrow
* move right - D or L or Right Arrow
* skip turn - SPACE
* 0 - display some metrics to the console
