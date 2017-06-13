
## Stickynav

The stickynav component.

Uses the `sticky` helper to create a sticky nav

```code
[Base]            .data-hw-stickynav
```

### Default behavior

```html
<section class="hw-stickynav" data-hw-sticky-nav>
  <div class="hw-stickynav__inner" data-hw-sticky>
    <nav class="hw-stickynav__nav">
      <a class="hw-stickynav__link" href="#anchor-1">Section 1</a>
      <a class="hw-stickynav__link" href="#anchor-2">Section 2</a>
      <a class="hw-stickynav__link" href="#anchor-3">Section 3</a>
      <a class="hw-stickynav__link" href="#anchor-4">Section 4</a>
      <a class="hw-stickynav__link" href="#anchor-5">Section 5</a>
    </nav>
  </div>
</section>
```

```html|no-source
<section id="anchor-1" style="height: 100vh; background: #4caf50">
  <h2>Anchor 1 section</h2>
</section>
<section id="anchor-2" style="height: 100vh; background: #8bc34a">
  <h2>Anchor 2 section</h2>
</section>
<section id="anchor-3" style="height: 100vh; background: #00bcd4">
  <h2>Anchor 3 section</h2>
</section>
<section id="anchor-4" style="height: 100vh; background: #9c27b0">
  <h2>Anchor 4 section</h2>
</section>
<section id="anchor-5" style="height: 100vh; background: #3f51b5">
  <h2>Anchor 5 section</h2>
</section>
```
