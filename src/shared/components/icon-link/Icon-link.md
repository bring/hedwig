Icon Link

```
[Base]  .hw-icon-link
```

Modifiers
```
[Border]        .hw-icon-link--border
[Border under]  .hw-icon-link--border-under
```


### Example
```html|span-2
<a class="hw-icon-link" href="#">
  <svg class="hw-icon">
    <use xlink:href="#bud"></use>
  </svg>
  <h4>Here is the link text</h4>
</a>
```

### Example with border
```html|span-2
<a class="hw-icon-link hw-icon-link--border" href="#">
  <svg class="hw-icon">
    <use xlink:href="#bud"></use>
  </svg>
  <h4>Here is the link text</h4>
</a>
```

### Example with border under, in a white hw-block
```html|span-2
<div class="hw-block hw-block--bg-white">
  <a class="hw-icon-link hw-icon-link--border-under" href="#">
    <svg class="hw-icon">
      <use xlink:href="#bud"></use>
    </svg>
    <h4>Here is the link text</h4>
  </a>
</div>
```

### Example in flex
```html
<div class="hw-flex">
  <div class="hw-block">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#adresseendringogoppbevaring"></use>
      </svg>
      <h4>Adresseendring og oppbevaring</h4>
    </a>
  </div>
  <div class="hw-block">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#brev"></use>
      </svg>
      <h4>Pakker og brev</h4>
    </a>
  </div>
  <div class="hw-block">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#godstransport"></use>
      </svg>
      <h4>Sporing</h4>
    </a>
  </div>
  <div class="hw-block">
    <a class="hw-icon-link" href="#">
      <svg class="hw-icon">
        <use xlink:href="#toll"></use>
      </svg>
      <h4>Toll</h4>
    </a>
  </div>
</div>
```

### Example in flex with border
```html
<div class="hw-flex">
  <div class="hw-block">
    <a class="hw-icon-link hw-icon-link--border" href="#">
      <svg class="hw-icon">
        <use xlink:href="#adresseendringogoppbevaring"></use>
      </svg>
      <h4>Adresseendring og oppbevaring</h4>
    </a>
  </div>
  <div class="hw-block">
    <a class="hw-icon-link hw-icon-link--border" href="#">
      <svg class="hw-icon">
        <use xlink:href="#brev"></use>
      </svg>
      <h4>Pakker og brev</h4>
    </a>
  </div>
  <div class="hw-block">
    <a class="hw-icon-link hw-icon-link--border" href="#">
      <svg class="hw-icon">
        <use xlink:href="#sporing"></use>
      </svg>
      <h4>Sporing</h4>
    </a>
  </div>
  <div class="hw-block">
    <a class="hw-icon-link hw-icon-link--border" href="#">
      <svg class="hw-icon">
        <use xlink:href="#toll"></use>
      </svg>
      <h4>Toll</h4>
    </a>
  </div>
</div>
```

### Example with more than one line of text
```html|span-2
<a class="hw-icon-link" href="#">
  <svg class="hw-icon">
    <use xlink:href="#bud"></use>
  </svg>
  <div class="hw-block hw-block--mb-smallest">
    <h4>Here is the link text</h4>
  </div>
  <h4 class="hw-text-light">Second line of text</h4>
</a>
```
