# AtomicPlayground
Various experiments with the Atomic Game Engine ( http://www.atomicgameengine.com )

* **es6_browserify** - playing with writing scripts and components in es6 and using babelJs to build
* **simple_blueprint_test** - A very basic example that shows how to define a blueprint for an entity and then construct it, instead of hand constructing and attaching components to an entity.
* **simple_es6_blueprint_test** - ES6 version of the simple_blueprint_test
* **space_shooter_es6_blueprint** - A conversion of the space shooter example to es6 transpiled by BabelJs and modified to use the blueprint system for entities.
* **space_shooter_blueprint** - Same as the es6 version with the es6 syntax converted to es5 syntax so that there is no need for a transpiler.
* **rot_tests** - A collection of different scenarios using the ROguelike Toolkit (http://ondras.github.io/rot.js/hp/) with the Atomic Engine (very much WIP!)
* **atomic-blueprintlib** - The blueprint system broken out into it's own module to be able to be re-used.  Once this becomes more finalized it will be broken out into it's own repo.  For now, it's just going to be used by AtomicPlayground examples.
* **promises_example** - an example of queueing a series of actions using Promises.  Pulls in ```es6-promises.js``` 
