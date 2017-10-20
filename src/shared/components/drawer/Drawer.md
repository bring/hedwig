## Drawer

Drawer component

```code
[Normal]           .hw-drawer
```

```html

  <button class="hw-button hw-button--primary" data-hw-drawer-trigger="Drawer2">Drawer with action buttons</button>

  <div class="hw-drawer" data-hw-drawer="Drawer2">
    <div class="hw-drawer__overlay hw-animate hw-animate--fade-in-overlay" data-hw-drawer-trigger="Drawer2"></div>
    <div class="hw-drawer__content">
      <div class="hw-drawer__header">
        <div class="hw-drawer__close">
          <button class="hw-drawer__close-button" data-hw-drawer-trigger="Drawer2">
            <svg class="hw-icon" role="img" aria-labelledby="close-drawer">
               <title id="close-drawer">Close drawer</title>
               <use xlink:href="#cross"></use>
            </svg>
          </button>
        </div>
        <div class="hw-drawer__title">
          <h1>Lorem ipsum dolor sit ameter</h1>
        </div>
      </div>
      <div class="hw-drawer__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      </div>
      <div class="hw-drawer__actions">
          <button
            class="hw-button hw-button--secondary" data-hw-drawer-trigger="Drawer2">Avbryt</button>
          <button class="hw-button hw-button--primary">Lagre</button>
      </div>
    </div>
  </div>
```
