# Editing a element using JavaScript

## Editing the element's content

### `element.innerHTML()`
The `element.innerHTML` method allows you to change content of an element, or put more HTML elements into it.
We do not suggest using this method for user generated content, because users would be able to modify the inner HTML and place their own code there.
```js
someelement.innerHTML = 'You can edit my text';
someelement.innerHTML = '<h1>But also, this will be rendered as h1</h1>';
```

### `element.innerText()`
The `element.innerText` method is able to change text inside a element, but HTML tags will not be rendered.
HTML code will be displayed as plain text.
```js
someelement.innerText = 'Hello, world! <h1>HTML code will not be rendered, so you will see the h1 thing as code </h1>';
```

## Editing the element's attributes

### `element.setAttribute()`

```js
// Changing a organized list's style type to roman numbers
somelist.setAttribute('type', 'I')
// Changing a image
someimage.setAttribute('src', 'image.png');
/* You are also able to edit element's classes, but we do not suggest doing it.
Rather use methods listed below */
```
### `element.classList`
The `element.classList` is a set of methods that will allow you to manipulate with classes.

```js
element.classList.add('someclass'); // Will add class
element.classList.remove('someclass'); // Will remove class
element.classList.toggle('someclass'); // Will add or remove class, depends if the element already has the class
```