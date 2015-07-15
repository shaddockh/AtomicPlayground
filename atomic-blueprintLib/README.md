# atomic-blueprintLib

This library is an effort to make the blueprint framework reusable with atomic game engine projects.  It contains routines for constructing
atomic game objects from blueprints that are defined as JavaScript object literals.  The blueprint library management is handled by a more generic
blueprint sytstem pulled in from https://github.com/shaddockh/entity-blueprint-manager.

# Usage
## Access to the blueprint catalog
```
var blueprintCatalog = require('atomic-blueprintLib').blueprintCatalog;
```
or ES6
```
import {blueprintCatalog} from 'atomic-blueprintLib';
```

## Access to the Game object builder
```
var goBuilder = require('atomic-blueprintLib').builder;
```
or ES6
```
import {goBuilder} from ('atomic-blueprintLib');
```

## Simple example
```
var blueprintCatalog = require('atomic-blueprintLib').blueprintCatalog,
    goBuilder = require('atomic-blueprintLib').builder;

// Define some blueprints
var blueprints = {
    testBlueprint: {
        Component: {
            options: 'opts'
        }
    },
    testSubBlueprint: {
        inherits: 'testBlueprint',
    }
}

// Load up the blueprints and log the progress via a callback function
blueprintCatalog.loadBlueprints(blueprints, function(bpName) { print('Loading ' + bpName); });

// Hydrate the blueprints.  This needs to be done to build out all of the heirarchy and ensure that child blueprints extend parents properly.
// You want to do this at initialization so you aren't hydrating during construction of the game objects.
blueprintCatalog.hydrateAllBlueprints();

// Construct a game object
goBuilder.createChildAtLocation(game.scend, 'testBlueprint', [1,1]);



```
# Api

## builder.createChild(parent, blueprintName)
## builder.createChild(parent, blueprintObject)
Creates a child node attached to specific parent.  That parent could be the scene or another Atomic Game Engine node.  Passing in
blueprint name will cause a lookup of that name in the blueprint catalog.  Passing in an object will just instantiate that object
without a lookup.

## builder.createChildAtLocation(parent, blueprintName, location)
## builder.createChildAtLocation(parent, blueprintObject, location)
Creates a child node attached to specific parent.  That parent could be the scene or another Atomic Game Engine node.  Passing in
blueprint name will cause a lookup of that name in the blueprint catalog.  Passing in an object will just instantiate that object
without a lookup.  Once created, it will have it's initial spawn point set to the location.  Note! The blueprint must contain a
Position component.


## builder.setDebugMode(val)
turns on or off debug output.

# BlueprintCatalog api (copied from the entity-blueprint-manager)
* clear
* loadSingleBlueprint
* loadBlueprints
* getBlueprint
* getBlueprintFromInstance
* getBlueprintsDescendingFrom
* hydrateAllBlueprints
* find: find
* getAllBlueprintNames
* getOriginalBlueprint
* hasBlueprint
