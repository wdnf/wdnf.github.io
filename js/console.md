# JavaScript console
Console is very useful, not only because it can help you find errors, but 
it allows you to execute scripts without inserting them permanently into the code.

## Accessing the console
1. Open your webpage in the browser and press F12 or CTRL + SHIFT + I to access the DevTools.
2. Select the "Console" tab in the DevTools, if it isn't selected yet.

## Injecting functions or editing variables
You can inject new functions, classes or variables through the console.
It may be problematic to access / edit variable defined by `let`.

## Logging
Major use of the console is logging.
You can log plain text, or different data structures.

### Logging plain text

`Input`
```js
console.log("Hello, world!");
```
`Output`
```js
"Hello, world"
```

#### Tip: Use `console.warn()` or `console.error()` instead of `console.log`.

### Logging objects or arrays

`Input`
```js
let myarray = ["web", "developers", "and", "friends"];
let myobject = {"name": "Oliver"};
console.log(myarray);
console.log(myobject);
```
`Output`
```js
["web", "developers", "and", "friends"]
{"name": "Oliver"}
```
### Logging HTML elements (element nodes)

`Input`
```js
let myelement = document.querySelector(".body > .main > .section:first-child > h2");
console.log(myelement);
```
`Output`
```js
<h2> Accessing the console </h2>
```

### Styling
You can use css to achieve different styles for the data.