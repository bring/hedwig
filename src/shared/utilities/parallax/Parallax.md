
## Parallax

Adds parallax-effects to elements

```code
[Base]            [data-hw-parallax]

[Amount]          [data-hw-parallax-amount="2"]   (optional, defaults to 1)
[Start]           [data-hw-parallax-start="1000"] (optional, defaults to 0)
```

The amount decides how much the element "sticks". A value of `1` will keep the element in the same place as you scroll, while a value of `2` will make it move up slightly as you scroll.

### Default behavior

```html
<div>
  <div class="
    hw-block
    hw-block--pt
    hw-block--pb
    hw-block--bg-primary
  ">
    <p data-hw-parallax data-hw-parallax-amount="5">Howdy!</p>
  </div>
</div>
```

### Elements starts moving after 500px (from the top of the page)

```html
<div>
  <div class="
    hw-block
    hw-block--pt
    hw-block--pb
    hw-block--bg-primary
  ">
    <p data-hw-parallax data-hw-parallax-amount="5" data-hw-parallax-start="500">Howdy to you too!</p>
  </div>
</div>
```

Extra text to force page scrolling

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.

.
