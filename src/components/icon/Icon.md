## Icon

The icons are added via xlink, so to use icons in your site, copy and paste the below into your site template (header or footer). The whole icon set is XXKb.

<svg xmlns="http://www.w3.org/2000/svg" style="display: none">
  
  <symbol id="hw-icon-menu" viewBox="0 -4 30 30">
    <title>Menu Icon</title>
      <g fill="currentColor">
        <path d="M0 0.8L0 4.4 29 4.4 29 0.8 0 0.8 0 0.8ZM0 9.1L0 12.6 29 12.6 29 9.1 0 9.1 0 9.1ZM0 17.4L0 21 29 21 29 17.4 0 17.4 0 17.4Z" />
      </g>
  </symbol>
  
  <symbol id="hw-icon-map-marker" viewBox="-3 0 30 30">
    <title>Map marker Icon</title>
      <g fill="currentColor">
        <path d="M11.8 0C5.8 0 0.9 4.8 0.9 10.7 0.9 17.9 11.8 28.6 11.8 28.6 11.8 28.6 22.7 17.9 22.7 10.7 22.7 4.8 17.9 0 11.8 0L11.8 0ZM11.8 3.6C15.9 3.6 19.1 6.8 19.1 10.7 19.1 14.7 15.9 17.9 11.8 17.9 7.8 17.9 4.6 14.7 4.6 10.7 4.6 6.8 7.8 3.6 11.8 3.6L11.8 3.6Z" />
      </g>
  </symbol>
  
  <symbol id="hw-icon-search" viewBox="-1 -2 30 30">
    <title>Search Icon</title>
      <g fill="currentColor">
        <path d="M0.3 11.7C0.3 18.2 5.6 23.4 12 23.4 14 23.4 16 23 17.6 22.1 17.7 22.2 17.9 22.4 18 22.5L22.9 27 27.3 22.5 22.9 17.7C22.7 17.5 22.5 17.4 22.3 17.3 23.2 15.6 23.8 13.7 23.8 11.7 23.8 5.3 18.5 0 12.1 0 5.6 0 0.3 5.3 0.3 11.7ZM20.4 11.7C20.4 13.9 19.6 16 18.2 17.5 18.2 17.5 18.1 17.6 18.1 17.6 17.9 17.7 17.8 17.9 17.7 18 16.2 19.4 14.2 20.1 12 20.1 7.4 20.1 3.7 16.4 3.7 11.8 3.7 7.1 7.4 3.4 12 3.4 16.7 3.4 20.4 7.1 20.4 11.7Z"/>
      </g>
  </symbol>
  
  <symbol id="hw-icon-unlocked" viewBox="-4 -1 30 30">
    <title>Lock Icon (unlocked)</title>
      <g fill="currentColor">
        <path d="M10.9 0C6.9 0 3.6 3.2 3.6 7.2L7.3 7.2C7.3 5.2 8.9 3.6 10.9 3.6 12.9 3.6 14.5 5.2 14.5 7.2L14.5 14.3 0 14.3 0 28.6 21.8 28.6 21.8 14.3 18.2 14.3 18.2 7.2C18.2 3.2 14.9 0 10.9 0L10.9 0Z"/>
      </g>
  </symbol>
  
  <symbol id="hw-icon-locked" viewBox="-3 -2 30 30">
    <title>Lock Icon (locked)</title>
      <g fill="currentColor">
        <path d="M11.8 0.4C7.8 0.4 4.5 3.6 4.5 7.5L4.5 11.1 0.9 11.1 0.9 25.4 22.7 25.4 22.7 11.1 19 11.1 19 7.5C19 3.6 15.8 0.4 11.8 0.4L11.8 0.4ZM11.8 4C13.8 4 15.4 5.5 15.4 7.5L15.4 11.1 8.2 11.1 8.2 7.5C8.2 5.5 9.8 4 11.8 4L11.8 4Z"/>
      </g>
  </symbol>
  
  <symbol id="hw-icon-chevron-up" viewBox="0 -5 30 30">
    <title>chevron up</title>
      <g fill="currentColor">
        <polygon points="0 14.7 4.2 19.1 14.5 8.7 24.8 19.1 29 14.7 14.5 0"/>
      </g>
  </symbol>
  
  <symbol id="hw-icon-chevron-down" viewBox="0 -5 30 30">
    <title>chevron down</title>
      <g fill="currentColor">
        <polygon points="0 14.7 4.2 19.1 14.5 8.7 24.8 19.1 29 14.7 14.5 0"/>
      </g>
  </symbol>

</svg>

### All icons

```html|span-6,plain,light
  <div class="hw-icon">
    <svg><use xlink:href="#hw-icon-menu"></use></svg>
  </div>
  <div class="hw-icon">
    <svg><use xlink:href="#hw-icon-map-marker"></use></svg>
  </div>
  <div class="hw-icon">
    <svg><use xlink:href="#hw-icon-search"></use></svg>
  </div>
  <div class="hw-icon">
    <svg><use xlink:href="#hw-icon-unlocked"></use></svg>
  </div>
  <div class="hw-icon">
    <svg><use xlink:href="#hw-icon-locked"></use></svg>
  </div>
  <div class="hw-icon">
    <svg><use xlink:href="#hw-icon-chevron-up"></use></svg>
  </div>
  <div class="hw-icon">
    <svg><use xlink:href="#hw-icon-chevron-down"></use></svg>
  </div>
```

### Variations
#### Large icons

```html|span-6,plain,light
  <div class="hw-icon hw-icon--large">
    <svg>
      <use xlink:href="#hw-icon-menu"></use>
    </svg>
  </div>
  <div class="hw-icon hw-icon--large">
    <svg>
      <use xlink:href="#hw-icon-map-marker"></use>
    </svg>
  </div>
```

### Full

```html|span-6,plain,light
  <hr class="hw-hr hw-hr--full" />
```
