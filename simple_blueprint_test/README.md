This project contains an example of using a more declarative way of generating your entities.  Instead of configuring each entity manually during 
creation, attaching the correct components, etc, a blueprint is created that defines the entity.  This idea is not new, but the inspiration for it came from the way Dungeon Siege by Gas Powered Games constructed their game objects.

The blueprint system allows you to define a simple JSON structure that defines which components should be attached to the entity of that name and also if that component
has any configurable parameters, what those should be.  

for example:

#### Manual Creation
```
    // Add the star component
    var spaceNode = game.scene.createChild("Star");
    spaceNode.createJSComponent("Star");
```

Turns into the following with the blueprint system:
#### Blueprint Creation
```
    var spaceNode = blueprintLib.createChild(game.scene, 'star1');
```

#### Blueprint definition
```
    var blueprints = {
        // This is the base star blueprint that defines the texture, etc.
        star: {
            Star: {},
            Aspect: {
                spriteTexture: 'Sprites/star.png',
                blendMode: Atomic.BLEND_ALPHA,
            }
        },

        // this descends from the base star and overrides the spawn position and speed
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
**Note:** Star, Aspect, and Position are all JSComponents.  Aspect instantiates a native Static2D component and configures it.

In addition to being able to spawn an entity from a blueprint, blueprints can also inherit from each other.  This allows you to define some base parameters in say a **base_weapon** template and then
fine tune additional parameters with child blueprints.  Use the **inherits** key to define the relationship.  Any blueprint properties that are not overridden in a child blueprint will still be available.

For example, if you build out some custom components to handle things like status effects, attack damage, etc, you could create something like the following.
```

var blueprints = {

    // have a base weapon that all weapons descend from
    base_weapon: {
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

### Update
It is possible to either specify the start position in the blueprint, or at runtime.  Some things that can be done at run time would be:

```
    // Specify a start position instead of relying on the blueprint
    var spaceNode3 = blueprintLib.createChildAtPosition(game.scene, 'star2', [2, 2]);

    // override the speed
    var starOverride = blueprintLib.getBlueprint('star2');
    starOverride.Star.speed = 1000;
    var spaceNode4 = blueprintLib.createChildAtPosition(game.scene, starOverride, [1, 1]);
```


Take a look at the following files for how they are configured
* Modules/blueprints.js - this is where all the blueprints reside
* main.js - this instantiates two different star blueprints that descend from a base star
* Components/Star.js - a very simple blueprint aware component
* Components/core/Aspect.js - a more complex blueprint that handles assigning the appropriate sprite to the entity

    
   
### Update - Converting to source version of Atomic
Some things have broken with the new version and I'm currently looking at ways to improve the system and work with the new features.  Some issues that I ran across
* When creating a new JSComponent, previously the path didn't matter.  If the file existed anywhere under Resources/Components, it found it.  Now it needs a proper path
* Due to this, the blueprints need to either specify a full path to the component, or use an entry in Resources/Components/componentCrossref.js which maps a component name to a full path
* Ideally, either I find another way to generate blueprints, or componentCrossref.js will be auto-generated during build.
* Note this is hacked together at this point to work...more work forthcoming.
