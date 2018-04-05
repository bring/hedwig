
## Stickynav

The stickynav component.

Uses the `sticky` helper to create a sticky nav

```code
[Base]            [data-hw-sticky-nav]
[Autocenter]      [data-hw-sticky-nav="autocenter"]      Centers the selected item
```

### Default behavior

```html
<section class="hw-stickynav" data-hw-sticky-nav data-hw-stickynav="autocenter">
  <div class="hw-stickynav__inner" data-hw-sticky>
    <nav class="hw-stickynav__nav">
      <a class="hw-stickynav__link" href="#anchor-1">Section 1</a><!--
   --><a class="hw-stickynav__link" href="#anchor-2">Section 2</a><!--
   --><a class="hw-stickynav__link" href="#anchor-3">Section 3</a><!--
   --><a class="hw-stickynav__link" href="#anchor-4">Section 4</a><!--
   --><a class="hw-stickynav__link" href="#anchor-5">Section 5</a><!--
   --><a class="hw-stickynav__link" href="#anchor-6">Section 6</a><!--
   --><a class="hw-stickynav__link" href="#anchor-7">Section 7</a><!--
   --><a class="hw-stickynav__link" href="#anchor-8">Section 8</a><!--
   --><a class="hw-stickynav__link" href="#anchor-9">Section 9</a><!--
   --><a class="hw-stickynav__link" href="#anchor-10">Section 10</a>
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
<section id="anchor-6" style="height: 100vh; background: #4caf50">
  <h2>Anchor 6 section</h2>
</section>
<section id="anchor-7" style="height: 100vh; background: #8bc34a">
  <h2>Anchor 7 section</h2>
</section>
<section id="anchor-8" style="height: 100vh; background: #00bcd4">
  <h2>Anchor 8 section</h2>
</section>
<section id="anchor-9" style="height: 100vh; background: #9c27b0">
  <h2>Anchor 9 section</h2>
</section>
<section id="anchor-10" style="height: 100vh; background: #3f51b5">
  <h2>Anchor 10 section</h2>
</section>
```
