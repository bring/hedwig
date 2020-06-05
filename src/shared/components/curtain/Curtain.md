## Curtain (Deprecated)

> Creates interactive curtain rolling up and down 



> Since it is deprecated you should avoid using Curtains.
> Where possible try to use [Accordion](/Accordion) instead.




```code
Required:

.hw-curtain           Contains the trigger and content
.hw-curtain__trigger  Toggles curtain to open and close
.hw-curtain__content  Put your content in here
.hw-curtain__arrow    Show an arrow for indicating whether the curtain is open or closed

```

### Client-side rendering - React / Angular
If rendering a curtain is done in the frontend, this component needs to be initialized after rendering.
```code
hedwig.HWCurtain();
```

### Example curtain

```html|span-4,plain,light
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


### Example with multiple curtains

```html|span-4,plain,light
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
