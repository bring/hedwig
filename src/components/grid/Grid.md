## Grid

We use the [Csswizandry grids](https://github.com/csswizardry/csswizardry-grids).

```code
<div class="hw-grid [grid-modifiers]">
  <div class="hw-grid__item [size modifiers]">...</div>
  <div class="hw-grid__item [size modifiers]">...</div>
  <div class="hw-grid__item [size modifiers]">...</div>
</div>
```

### Example grids

```html|span-6,plain,light
  <div class="hw-grid">
    <div class="hw-grid__item one-half">
      <p class="hw-helpers-highlight">one-half</p>
    </div><!--
    --><div class="hw-grid__item one-half">
      <p class="hw-helpers-highlight">one-half</p>
    </div>
  </div>
```

```html|span-6,plain,light
  <div class="hw-grid">
    <div class="hw-grid__item one-quarter">
      <p class="hw-helpers-highlight">one-quarter</p>
    </div><!--
    --><div class="hw-grid__item three-quarters">
      <p class="hw-helpers-highlight">three-quarters</p>
    </div>
  </div>
```

```html|span-6,plain,light
  <div class="hw-grid">
    <div class="hw-grid__item one-sixth">
      <p class="hw-helpers-highlight">one-sixth</p>
    </div><!--
    --><div class="hw-grid__item one-sixth">
      <p class="hw-helpers-highlight">one-sixth</p>
    </div><!--
    --><div class="hw-grid__item one-sixth">
      <p class="hw-helpers-highlight">one-sixth</p>
    </div><!--
    --><div class="hw-grid__item one-sixth">
      <p class="hw-helpers-highlight">one-sixth</p>
    </div><!--
    --><div class="hw-grid__item one-sixth">
      <p class="hw-helpers-highlight">one-sixth</p>
    </div><!--
    --><div class="hw-grid__item one-sixth">
      <p class="hw-helpers-highlight">one-sixth</p>
    </div>
  </div>
```

### Responsive example

```html|span-6,plain,light,responsive
  <div class="hw-grid">
    <div class="hw-grid__item medium--one-quarter">
      <p class="hw-helpers-highlight">Default: one-whole, medium: one-quarter</p>
    </div><!--
    --><div class="hw-grid__item medium--three-quarters">
      <p class="hw-helpers-highlight">Default: one-whole, medium: three-quarters</p>
    </div>
  </div>
```

