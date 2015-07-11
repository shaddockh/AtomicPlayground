This project contains an example of using a more declaritive way of generating your entities.  Instead of configuring each entity manually during 
creation, attaching the correct components, etc, a blueprint is created that defines the entity.

The blueprint system allows you to define a simple JSON structure that defines which components should be attached to the entity of that name and also if that component
has any configurable parameters, what those should be.  

for example:

#### Manual Creation
```
    // Add the star component
    var spaceNode = game.scene.createChild("Star");
    node.createJSComponent("Star");
```

Turns into the following with the blueprint system:
#### Blueprint Creation
```
    var spaceNode = blueprintLib.createChild(game.scene, 'star1');
```

#### Blueprint definition
```
    var blueprints = {
        star1: {
            inherits: 'star',
            Star: {
                speed: -50
            },
            Position: {
                spawnPosition: [-3, 0]
            }
        }
    };
```

In addition to being able to spawn an entity from a blueprint, blueprints can also inherit from each other.  This allows you to define some base parameters in say a *base_weapon* template and then
fine tune additional parameters with child blueprints.  Use the *iherits* key to define the relationship.  Any blueprint properties that are not overridden in a child blueprint will still be available.


Take a look at the following files for how they are configured
* Modules/blueprints.js - this is where all the blueprints reside
* main.js - this instantiates two different star blueprints that descend from a base star
* Components/Star.js - a very simple blueprint aware component
* Components/core/Aspect.js - a more complex blueprint that handles assigning the appropriate sprite to the entity

    
    
