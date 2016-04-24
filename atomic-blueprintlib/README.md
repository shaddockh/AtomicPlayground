# atomic-blueprintlib

This library is an effort to make the blueprint framework reusable with atomic game engine projects.  It contains routines for constructing
atomic game objects from blueprints that are defined as JavaScript object literals.  The blueprint library management is handled by a more generic
blueprint system pulled in from https://github.com/shaddockh/entity-blueprint-manager.

# Usage
## Preparing the library for Usage
* Place ```atomic-bluerpintLib.bundle.js``` in your ```Resources/Modules``` directory.

* in ```scripts/main.js``` you will need to add the following line to the top
```JavaScript
require('atomic-blueprintLib.bundle');
```
or
```typescript
import 'atomic-blueprintLib.bundle';
```

This will bring in the bundled library and allow the components to be required in by the different modules.

## Requiring in the library
```
var blueprintCatalog = require('atomic-blueprintlib').blueprintCatalog;
var nodeBuilder = require('atomic-blueprintlib').nodeBuilder;
```
or ES6/typescript
```
import {blueprintCatalog, nodeBuilder} from 'atomic-blueprintlib';
```

## Simple example
```JavaScript
var blueprintCatalog = require('atomic-blueprintlib').blueprintCatalog,
    nodeBuilder = require('atomic-blueprintlib').nodeBuilder;

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
nodeBuilder.createChildAtLocation(game.scend, 'testBlueprint', [1,1]);



```
# Api

## nodeBuilder.createChild(parent, blueprintName)
## nodeBuilder.createChild(parent, blueprintObject)
Creates a child node attached to specific parent.  That parent could be the scene or another Atomic Game Engine node.  Passing in
blueprint name will cause a lookup of that name in the blueprint catalog.  Passing in an object will just instantiate that object
without a lookup.

## nodeBuilder.createChildAtLocation(parent, blueprintName, location)
## nodeBuilder.createChildAtLocation(parent, blueprintObject, location)
Creates a child node attached to specific parent.  That parent could be the scene or another Atomic Game Engine node.  Passing in
blueprint name will cause a lookup of that name in the blueprint catalog.  Passing in an object will just instantiate that object
without a lookup.  Once created, it will have it's initial spawn point set to the location.  Note! The blueprint must contain a
Position component.

## nodeBuilder.setDebugMode(val)
turns on or off debug output.

# BlueprintCatalog api (copied from the entity-blueprint-manager)
* blueprintCatalog.clear() - Clear the catalog and reset the hydrated blueprint cache
* blueprintCatalog.loadSingleBlueprint(blueprint, blueprintName, [progressCallback]) - Loads a single blueprint with optional callback
* blueprintCatalog.loadBlueprints(block, [progressCallback]) - loads a list of blueprints contained in an object literal with the keys being the names.
* blueprintCatalog.getBlueprint(name, [extendWith]) - returns a hydrated blueprint of 'name' and optionally extends it with extendWith
* blueprintCatalog.getBlueprintFromInstance - WIP
* blueprintCatalog.getBlueprintsDescendingFrom(blueprintName, [recurse]) - returns all blueprints descending from blueprint name (optionally recursing down to all grandchildren)
* blueprintCatalog.hydrateAllBlueprints() - runs through all blueprints and builds up the blueprint cache of complete blueprints (ensuring that children are fleshed out with lineage elements)
* blueprintCatalog.find(filterCallback, [limit]) - searches for a blueprint.  Calls callback for every blueprint.  Optionally set limit to stop at # matches.
* blueprintCatalog.getAllBlueprintNames() - gets an array of blueprint names in the catalog
* blueprintCatalog.getOriginalBlueprint(blueprintName) - gets a copy of the unhydrated blueprint.
* blueprintCatalog.hasBlueprint(blueprintName) - returns whether blueprint exists in the catalog
* blueprintCatalog.extendBlueprint(origBlueprint, extendWith, [inPlaceExtend]) - utility function for extending one blueprint with another and returning the combination.
