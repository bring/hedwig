# Using Hedwig components

Let's start with the most basic component Hedwig offers, [block](/Block) 
```
<div class="hw-block">
    I am a block
</div>
```

A component always has a root element, in this case: `hw-block`.

The root element class must always be used, as it forms the basis for the component

The component may also have `modifiers` and `sub elements`.

### Modifiers

A modifier change or add properties to a component.
For example we can add [padding to the top](/Block#block-modifiers-margin-amp-padding)
```
<div class="hw-block hw-block--pt">
    I am a block with padding on the top
</div>
```

The `hw-block` is the basic block component and the `hw-block--pt` adds padding to the top of it.

### Sub elements

Some components can containt `sub elements`, so let's look at [Frame](/Frame) that does

```
<div class="hw-frame">
    <div class="hw-frame__item hw-frame__item--bg-gray">
        Some text in the frame
    </div>
    <div class="hw-frame__item hw-frame__item--ml hw-frame__item--bg-gray">
        Some text in the frame
    </div>
</div>
```

```html
<div class="hw-frame">
    <div class="hw-frame__item hw-frame__item--bg-gray">
        Some text in the frame
    </div>
    <div class="hw-frame__item hw-frame__item--ml hw-frame__item--bg-gray">
        Some text in the frame
    </div>
</div>
```

The component here is `hw-frame` and it contains one or more `hw-frame__item` sub elements.

The `sub elements` here are the `hw-frame__item`s that contains the content of the frame items.
`hw-frame__item--bg-gray` and `hw-frame__item--ml` are `modifiers` and adds background color and margin to the left respectively.


#### Another component, [Icon-link](/Icon-link).

This makes use of another component, [Service Icon](/Icon-service)
```
<a class="hw-icon-link hw-icon-link--border">
    <svg class="hw-icon">
        <use xlink:href="#bud"></use>
    </svg>
    <h4>Link text</h4>
</a>
```

```html|span-2
<a class="hw-icon-link hw-icon-link--border">
    <svg class="hw-icon">
        <use xlink:href="#bud"></use>
    </svg>
    <h4">Link text</h4>
</a>
```

The `modifier` here, `hw-icon-link--border` gives the Icon link a border.
