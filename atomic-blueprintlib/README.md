# atomic-blueprintlib

## Background
This library is an effort to make the blueprint framework reusable with atomic game engine projects.  It contains routines for constructing
atomic game objects from blueprints that are defined as JavaScript object literals.  The blueprint library management is handled by a more generic
blueprint system pulled in from https://github.com/shaddockh/entity-blueprint-manager.

The blueprint library provides the ability to use a more declarative way of generating your entities.  Instead of configuring each entity manually during creation, attaching the correct components, etc, a blueprint is created that defines the entity.  This idea is not new, but the inspiration for it came from the way objects were constructed in Dungeon Siege by Gas Powered Games.

## Blueprint Usage
The blueprint system allows you to define a simple JSON structure that defines which components should be attached to the entity of that name and also if that component has any configurable parameters, what those should be.  

for example:

#### Manual Creation
``` javascript
    // Add the star component
    var spaceNode = game.scene.createChild("Star");
    spaceNode.createJSComponent("Star");
```

Turns into the following with the blueprint system:
#### Blueprint Creation
``` javascript
    var spaceNode = blueprintLib.createChild(game.scene, 'star1');
```

#### Blueprint definition
``` javascript
    var blueprints = {
        // This is the base star blueprint that defines the texture, etc.
        isPrefab: true, // We want to generate a prefab for this blueprint
        star: {
            Star: {
                speed: -50
            },
            StaticSprite2D: {
                sprite: 'Sprites/star.png',
                blendMode: Atomic.BLEND_ALPHA
            },
            position2D: [-3,0]
        }
    };

    // Load the blueprints into the catalog
    blueprintLib.catalog.loadBlueprints(blueprints);

    // Generate prefabs from the blueprints
    blueprintLib.generatePrefabs();

    // Display the blueprint
    var star = bluerpintLib.createChild(scene, 'star');

    // or alternately
    var star2 = bluerpintLib.createChildAtPostion(scene, 'star', [2,2]);
```
**Note:** Star is a JSComponent and StaticSprite2D is a native component.


## Blueprint Inheritance
In addition to being able to spawn an entity from a blueprint, blueprints can also inherit from each other.  This allows you to define some base parameters in say a **base_weapon** template and then fine tune additional parameters with child blueprints.  Use the **inherits** key to define the relationship.  Any blueprint properties that are not overridden in a child blueprint will still be available.

For example, if you build out some custom components to handle things like status effects, attack damage, etc, you could create something like the following.
``` javascript

var blueprints = {

    // have a base weapon that all weapons descend from
    base_weapon: {
        isPrefab: true, // Generate a prefab for this and all descendents
        prefabDir: "Prefabs/autogen/weapons", // All weapon prefabs should be stored in this location
        Attack: {
            damage: 1
        }
    },

    // customize it for the sword
    sword: {
        inherits: 'base_weapon',
        Attack: {
            damage: 5
        }
    },

    // take the base sword, and just add a new StatusEffect component to it
    magic_sword: {
        inherits: 'sword',
        StatusEffect: {
            increaseHealth: 1
        }
    }
};

```

### Dynamic Blueprints
Most of the time you will want to generate prefabs for all of your blueprints as that is more performant, but it is possible to dynamically generate blueprints and display them in-game.  This should be ok for occasional use, but there is a performance penalty associated with this.
``` javascript

    // override the speed
    var starOverride = blueprintLib.getBlueprint('star2');
    starOverride.Star.speed = 1000;
    var spaceNode4 = blueprintLib.createChildAtPosition(scene, starOverride, [1, 1]);
```

# Usage
## Preparing the library for Usage
* Place ```atomic-bluerpintLib.bundle.js``` in your ```Resources/Modules``` directory.

* in ```scripts/main.js``` you will need to add the following line to the top
``` javascript
require('atomic-blueprintLib.bundle');
```
or TypeScript/ES6
``` javascript
import 'atomic-blueprintLib.bundle';
```

This will bring in the bundled library and allow the components to be required in by the different modules.

## Requiring in the library
``` javascript
var blueprintLib = require('atomic-blueprintlib');
```
or ES6/TypeScript
``` javascript
import * as blueprintLib from 'atomic-blueprintlib';
```

## Simple example
**Resources/Modules/blueprints.js**
```javascript
exports.testBlueprint = {
    isPrefab: true,
    Component: {
        options: 'opts'
    }
};

exports.testSubBlueprint = {
    inherits: 'testBlueprint',
};
```
**Resources/scripts/main.js**
```javascript
var blueprintLib = require('atomic-blueprintlib');

// Load up the blueprints and log the progress via a callback function
blueprintLib.catalog.loadBlueprints(require('blueprints'), function(bpName) { print('Loading ' + bpName); });

// Hydrate the blueprints.  This needs to be done to build out all of the hierarchy and ensure that child blueprints extend parents properly.
// You want to do this at initialization so you aren't hydrating during construction of the game objects.
blueprintLib.catalog.hydrateAllBlueprints();

// Generate prefabs (if they haven't been generated yet)
blueprintLib.generatePrefabs();

// Construct a game object
blueprintLib.createChildAtLocation(game.scene, 'testBlueprint', [1,1]);

```

## Full Examples
Full examples can be found in the AtomicPlayground (http://www.github.com/shaddockh/atomicplayground)
* [simple_blueprint_test](https://github.com/shaddockh/AtomicPlayground/tree/master/simple_blueprint_test)
* [simple_ts_blueprint_test](https://github.com/shaddockh/AtomicPlayground/tree/master/simple_ts_blueprint_test)
* [simple_es6_blueprint_test](https://github.com/shaddockh/AtomicPlayground/tree/master/simple_es6_blueprint_test)
* [space_shooter_blueprint](https://github.com/shaddockh/AtomicPlayground/tree/master/space_shooter_blueprint) (in progress)
* [space_shooter_es6_blueprint](https://github.com/shaddockh/AtomicPlayground/tree/master/space_shooter_es6_blueprint) 

# Blueprint Library plugin (Pre-Alpha)
There is an editor plugin that is in the really early stages of development that can be used.  It is located in ```dist/Resources/EditorData``` and can be placed in the ```Resources/EditorData``` folder of your project.  At this point the only thing it does is autogenerate prefabs for any blueprints found in the file:
```
Resources/Modules/blueprints.js
```
with the structure:
```javascript
exports.blueprint1 = {
    isPrefab: true,
    ...
};

exports.blueprint2 = {
    isPrefab: true,
    ...
}
```
Autogeneration can either be selected from the Developer menu or when you hit ```Play``` on the editor.

## Typescript Support
There is a generated ```d.ts``` file located in ```dist/Resources/typings``` for use in typescript projects.


# Api
The API for the **Atomic Blueprint Lib** can be found in the [Atomic Blueprint Library API](http://htmlpreview.github.com/?https://github.com/shaddockh/atomicplayground/blob/master/atomic-blueprintlib/docs/index.html)

This uses some functionality from the Entity Blueprint Manager, which can be found at [Entity Blueprint Manager API]( http://htmlpreview.github.com/?https://github.com/shaddockh/entity-blueprint-manager/blob/master/docs/index.html)
