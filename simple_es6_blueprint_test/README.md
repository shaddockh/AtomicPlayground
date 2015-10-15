This project mirrors the same project as the ```simple_blueprint_test``` project, however it is done in es6 and transpiled with babelJs.

To Build:
* cd to the simple_es6_blueprint_test root directory
* ```npm install -g babel```
* ```babel -d . **/*.es6```
*  if you wish to have babel compile your .es6 files while you edit them, use: ```babel -d . **/*.es6 -w```

The major changes include:
* converting it all to es6 and transpiling it with BabelJs

* take a look at ```.babelrc``` for the options that are in effect.  es7 Class Properties are enabled to make the ```inspectorFields``` nicer to look at and to align the code more to how it looks in TypeScript so that it's easier to port between the two languages.  Ideally, any es6 code should be able to be used in Typescript without much, if any, modification.

How to use inspector fields in ES6 code without resorting to Class Properties:
```
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
```
export default class MyClass {
  inspectorFields = {
     myCustomValue: 42
  };
  
  myFunction() {
     console.log(this.myCustomValue);
  }
}
```
