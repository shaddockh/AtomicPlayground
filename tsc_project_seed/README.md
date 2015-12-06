# Typescript Project Seed
This is a project seed for developing Atomic Game Engine projects with Typescript.  It's purpose is to easily provide the plumbing and build workflow to be able to hit the ground running on a new project.

Some features:
* Properly configured `tsconfig.json` to compile the typescript in the `/src` directory into the `/Resources` directory
* Should work with the Atom editor and the `atom-typescript` package
* Linting rules configured in `tslint.json` (will be picked up by `atom-tslint` package)
* importing of a separate TypeScript library via npm (imports `atomic-utils`).  This library will be bundled into vendor.js via browserify.  In order to do this, the stub file `vendor_stub.js` is modified with the name of the library and a require line:

** vendor.js **
```javascript
    . . .
    }(Duktape.modSearch, {
        /* Add NPM modules that you will be "requiring in" to your components here.
           They will get bundled up into a vendor.js file in the Resources/Modules directory
           and you will just need to require that in within your Resources/Scripts/main.js
           */
        'atomic-utils': require('atomic-utils'),
        'other-lib': require('other-lib')
    }));
```
Additionally, the following line needs to be added to `main.ts`

```javascript
    import 'vendor';
```
**Note:** the gulp build needs to be run in order to support this.
* Gulpfile with a default build that will lint all files, bundle up a vendor.js file, and compile the typescript

In progress features:
* clean up the configuration
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
