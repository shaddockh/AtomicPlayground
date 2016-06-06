### Simple TypeScript example

This contains a bare-bones typescript project example for the Atomic Game Engine.  All it includes is a simple ```tsconfig.json``` file and the required ```Atomic.d.ts``` type definitions.

#### Requirements

**Node.js** needs to be installed

#### Usage

To use, go into the root of this project on the command line and type:
```
npm install
```

This will download the required TypeScript compiler


To start up the compiler service in watch mode which will cause any files that have changed to get compiled once you save them,
type

```tsc -w```

Now, in the editor, you can edit and save and the compiler will create JavaScript in the background.
