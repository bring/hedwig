## Curtain

Creates interactive curtain rolling up and down 

```code
Required:

.hw-curtain           Contains the trigger and content
.hw-curtain__trigger  Toggles curtain to open and close
.hw-curtain__content  Put your content in here
.hw-curtain__arrow    Show an arrow for indicating whether the curtain is open or closed

```

### Example curtain

```html|span-6
<div class="hw-curtain">
  <button class="hw-curtain__trigger">
    A single curtain
    <div class="hw-curtain__arrow"></div>
  </button>
  <div class="hw-curtain__content">
    <ul class="hw-list">
      <li>Some</li>
      <li>list</li>
      <li>items</li>
    </ul>
  </div>
</div>
```


### Example with H2

```html|span-6
<div class="hw-curtain">
  <button class="hw-curtain__trigger">
    <h2>A single curtain with H2</h2>
    <div class="hw-curtain__arrow"></div>
  </button>
  <div class="hw-curtain__content">
    <ul class="hw-list">
      <li>Some</li>
      <li>list</li>
      <li>items</li>
    </ul>
  </div>
</div>
```


### Example with multiple curtains

```html|span-6
<div class="hw-curtain">
  <button class="hw-curtain__trigger">
    I will open the curtain if clicked
    <div class="hw-curtain__arrow"></div>
  </button>
  <div class="hw-curtain__content">
    <ul class="hw-list">
      <li>Some</li>
      <li>list</li>
      <li>items</li>
    </ul>
  </div>
</div>
<div class="hw-curtain">
  <button class="hw-curtain__trigger">
    I will open the curtain if clicked
    <div class="hw-curtain__arrow"></div>
  </button>
  <div class="hw-curtain__content">
    Here you can put whatever content you need to.
  </div>
</div>
```
