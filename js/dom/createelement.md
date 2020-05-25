# Creating a element using JS

Firstly, create a variable that will contain our new element.
```js
let newelement = document.createElement("div");
```

We can add some content to the new element, let's add some text.
```js
newelement.innerText = "Hello, world!";
```

Now the element is created, but you cannot see it.
JS don't know where to put the element right now, so you will need to specify a parent element that will contain our new element.

```js
let parentelement = document.getElementById("myparentelement");
```

Once the parent element is specified we can append the new element to it.

```js
parentelement.appendChild(newelement);
```

Before:
```html
<div id="parentelement"> </div>
```

After:
```html
<div id="parentelement">
    <div>Hello, world!</div>
</div>
```