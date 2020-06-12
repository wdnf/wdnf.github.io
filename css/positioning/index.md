# Positioning elements using Flex or Grid technology in CSS


## `justify-content`

`justify-content` allows you to change position of the items on the main axis.

`justify-content`: `flex-start` / `flex-end` / `center` /
`space-between` / `space-around` / `space-evenly`

```css
.container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}
```

## `justify-items`
`justify-items`

## `justify-self`
`justify-self` allows you to change the position of a child element across the main axis.

## `align-items`

`align-items` allows you to change position of the items on the cross axis.

`align-items`: `flex-start` / `flex-end` / `center` /
`space-between` / `space-around` / `space-evenly`

```css
.container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}
```

## `align-items`
`align-items`

## `align-self`
`align-self` allows you to change the position of a child element across the cross axis.
