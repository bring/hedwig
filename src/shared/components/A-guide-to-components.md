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

Some components can containt `sub elements`, so let's look at [Accordion](/Accordion) that does

```
<ul class="hw-accordion" data-hw-accordion>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Item
        <div class="hw-accordion__icon"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg hw-wysiwyg--small">
          <p>Item text here
          </p>
      </div>
    </div>
    </li>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Item
        <div class="hw-accordion__icon"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg hw-wysiwyg--small">
          <p>Item text here
          </p>
      </div>
    </div>
    </li>
  </ul>
```

```html|span-6,plain,light
<ul class="hw-accordion" data-hw-accordion>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Item
        <div class="hw-accordion__icon"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg hw-wysiwyg--small">
          <p>Item text here
          </p>
      </div>
    </div>
    </li>
    <li class="hw-accordion__item">
      <button class="hw-accordion__trigger">
        Item
        <div class="hw-accordion__icon"></div>
      </button>
      <div class="hw-accordion__contents">
        <div class="hw-wysiwyg hw-wysiwyg--small">
          <p>Item text here
          </p>
      </div>
    </div>
    </li>
  </ul>
```

The component here is `hw-accordion` and it contains one or more `hw-accordion__item` sub elements.


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
