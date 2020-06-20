# EcmaScript 6
I would like to shortly explain some es6 features :ecmascript: lets go over some that you can use in your projects right now :D

`Rest parameter`
*Rest parameter allows you to handle function parameters. You can have unlimited arguments without specifying all of them.*

```
function doSomething(...params) {
  return params
}

doSomething('some', 'arguments', 'here', 'oooo') // returns: ["some", "arguments", "here", "oooo"]
```


`Spread operator`
*With a spread operator you can make a iteratable expand in other variables*

```
const array1 = [1,2,3]
const array2 = [4,5,6]

const array3 = [...array1, ...array2] // returns: [1, 2, 3, 4, 5, 6]
```

*Can also merge objects*
```
const object1 = { name: 'test' }
const object2 = { age: 22 }
const summary = {...object1, ...object2}  // returns: { name: 'test', age: 22}
```

`Generator`
*A generator function can return multiple values from a function call in iterable fashion*

```
function *myGenerator() {
  let i = 0
  for (i = 0; i < 3; i++) {
    yield i
  }
}

const generator = myGenerator()
generator.next() // returns: {value: 0, done: false}
generator.next() // returns: {value: 1, done: false}
generator.next() // returns: {value: 2, done: false}
generator.next() // returns: {value: undefined, done: true}
```


`Arrow Operator`
*Arrow operators play an important role for example in lexically binding the 'this' variable in javascript*

*Here's a example with and without. You can see how useful it is, because this removes the need to do weird things like 'var self = this'
```
const obj = {
  aVariable: 'it works!',
  withoutArrow: function() {
    return function() {
      return this.aVariable
    }()
  },
  withArrow: function() {
    return (() => {
      return this.aVariable
     })()
  }
}
obj.withoutArrow() // returns: undefined
obj.withArrow() // returns: 'it works!'
```