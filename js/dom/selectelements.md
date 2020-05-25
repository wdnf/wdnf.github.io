# Selecting elements using JS

## Selecting a single element
Methods listed below will return an HTML element's object.
`document.getElementById()` will select only one element because ID must be unique.
`document.querySelector()` will return only first matching element node.

### `document.getElementById()`
```js
let element = document.getElementById('myid');
```
### `document.querySelector()`
```js
let elements = document.querySelector('#myid > .myclass');
```

## Selecting an array of multiple elements
Methods listed below will return array containing all matching elements.
Use `for()` or `foreach()` to loop through the elements and access their individual values.

### `document.getElementsByClassName()`
```js
let elements = document.getElementsByClassName('myclass');
```
### `document.getElementsByTagName()`
```js
let element = document.getElementsByTagName('a');
```
### `document.querySelectorAll()`
```js
let elements = document.querySelectorAll('#myid > .myclass');
```