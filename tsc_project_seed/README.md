# Typescript Project Seed
This is a project seed for developing Atomic Game Engine projects with Typescript.  It's purpose is to easily provide the plumbing and build workflow to be able to hit the ground running on a new project.

Some features:
* Properly configured `tsconfig.json` to compile the typescript in the `/src` directory into the `/Resources` directory
* Should work with the Atom editor and the `atom-typescript` package
* Linting rules configured in `tslint.json` (will be picked up by `atom-tslint` package)
* Gulpfile with a default build that will lint all files and compile the typescript

In progress features:
* clean up the configuration
* work on atomify to browserify 3rd party node modules into the `Resources/Modules` directory properly
* may clone this version to have another version that utilizes the blueprint system
* add to this project seed as more features for building out an Atomic Game Engine project are required


# Usage

```
clone this repository
cd to the root of the Project
>npm install

install Typescript, Gulp,  and Tslint
>npm install -g typescript tslint gulp

build
>gulp

```

At this point, you should be able to develop with the Atomic Game Engine editor to assemble your scenes.  After any coding, make sure you rebuild with either Gulp or Atom.

# Notes
The `typings/Atomic/*.d.ts` files have been modified as follows:
* `tslint:disable` added to the top of them since they didn't pass the lint checks
* some method signatures were added to support generics such as `node.getComponent<T>`

# Credits
The Atomic Game Engine at http://atomicgameengine.com/

The `Gulpfile.js` being used is based upon an article and code by Dan Wahlin at http://weblogs.asp.net/dwahlin/creating-a-typescript-workflow-with-gulp

The Atomify inspiration from https://github.com/atomicnewbie/atomify-examples
