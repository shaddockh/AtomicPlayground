
This is an example project using the [Atomic Blueprint Library](https://github.com/shaddockh/AtomicPlayground/tree/master/atomic-blueprintlib), but written in ES6 and transpiled with babelJS

More information about blueprints can be found in the **atomic-blueprintlib** documentation.

Some things to note about this project:

Take a look at the following files for how they are configured
* Modules/blueprints.ts - this is where all the blueprints reside
* main.ts - this instantiates two different star blueprints that descend from a base star
* Components/Star.ts - a very simple blueprint aware component
To Build:
* cd to the simple_es6_blueprint_test root directory
* ```npm install```
* ```npm run build```
*  if you wish to have babel compile your .es6 files while you edit them, use: ```npm run watch```

The major changes include:
* converting it all to es6 and transpiling it with BabelJs

* take a look at ```.babelrc``` for the options that are in effect.  es7 Class Properties are enabled to make the ```inspectorFields``` nicer to look at and to align the code more to how it looks in TypeScript so that it's easier to port between the two languages.  Ideally, any es6 code should be able to be used in Typescript without much, if any, modification.

How to use inspector fields in ES6 code without resorting to Class Properties:
``` javascript
export default class MyClass {
  constructor() {
     this.inspectorFields = {
          myCustomValue: 42
    };
  }
  myFunction() {
     console.log(this.myCustomValue);
  }

}
```

Using them with Class Properties:
``` javascript
export default class MyClass {
  inspectorFields = {
     myCustomValue: 42
  };

  myFunction() {
     console.log(this.myCustomValue);
  }
}
```
