# Variables in JavaScript
Variables are essential part of JavaScript.
Variables can store many different types of value.

## Variable types

### `let` Standard variables
The `let` variables can be accessed from the current block.
They are not global, so for example you cannot access a function's variable from outside of the function.

```js
let somevariable = "my value";
```

### `const`
The `const` variables are like `let` variables, but they cannot be edited, redeclared.
It is something like read-only variable.

```js
const somevariable = "my value";
```

### `var` Global variables
The `var`s are global variables accessible from whole document.

```js
var somevariable = "my value";
```