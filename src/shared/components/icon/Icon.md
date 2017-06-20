## Icon

To use the icons set, add this script in your footer:
```code
https://hedwig-cdn.s3.amazonaws.com/hedwig/icons.js
```
This will add an icon sprite into your document with ajax after page load. The whole icon set is 6 Kb.


**The icons are added like this:**

```code
lang: html
---
<svg class="hw-icon">
   <use xlink:href="#[name]"></use>
</svg>
```

### Icons

```html|span-6,noSource
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#alert"></use>
      </svg>
      alert
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#avatar"></use>
    </svg>
    avatar
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#binders"></use>
    </svg>
    binders
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#burger"></use>
    </svg>
    burger
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#caret-down"></use>
    </svg>
    caret-down
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#caret-left"></use>
    </svg>
    caret-left
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#caret-right"></use>
    </svg>
    caret-right
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#caret-down"></use>
    </svg>
    caret-down
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#caret-up"></use>
    </svg>
    caret-up
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#checkmark"></use>
    </svg>
    checkmark
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#clock"></use>
    </svg>
    clock
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#download"></use>
    </svg>
    download
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#envelope"></use>
    </svg>
    envelope
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#envelope-open"></use>
    </svg>
    envelope-open
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#lock-open"></use>
    </svg>
    lock-open
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#marker"></use>
    </svg>
    marker
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#search"></use>
    </svg>
    search
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#star"></use>
    </svg>
    star
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#close"></use>
    </svg>
    close
  </div>
```

### Variations

```code
[Normal]   .hw-icon
[Small]    .hw-icon--small
[Large]    .hw-icon--large
[Primary]  .hw-icon--primary      
```

```html
<svg class="hw-icon hw-icon--small">
  <use xlink:href="#envelope"></use>
</svg>
<svg class="hw-icon">
  <use xlink:href="#envelope"></use>
</svg>
<svg class="hw-icon hw-icon--primary">
  <use xlink:href="#envelope"></use>
</svg>
<svg class="hw-icon hw-icon--large">
  <use xlink:href="#envelope"></use>
</svg>
```
