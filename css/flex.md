# Flex
Flex is a awesome technology introduced in CSS3 that will allow you to change positions of elements easily.
Every flex container has a main axis and a perpendicular cross axis.
Child elements of the flex containers are stacked through the main axis.

```css
.container {
    display: flex;
}
```

## `flex-direction`

`flex-direction` allows you to flip the main axis and cross axis of the flex container.
Values marked with `-reverse` will reverse the order of child elements in the flex container.

`flex-direction`: `column` | `column-reverse` | `row` | `row-reverse`

```css
.container {
    display: flex;
    flex-direction: column;
}
```

## `justify-content`

`justify-content` allows you to change position of the items on the main axis.

`justify-content`: `flex-start` | `flex-end` | `center` |
`space-between` | `space-around` | `space-evenly`

```css
.container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
```

## `align-items`

`align-items` allows you to change position of the items on the cross axis.

`align-items`: `flex-start` | `flex-end` | `center` |
`space-between` | `space-around` | `space-evenly`

```css
.container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}
```