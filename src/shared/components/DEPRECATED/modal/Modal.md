## Modal (Deprecated)

Modal component

```code
[Normal]           .hw-modal
```

### Default modal

```html|span-6

  <button class="hw-button hw-button--primary" data-hw-modal-trigger="Modal1">Default modal</button>

  <div class="hw-modal" data-hw-modal="Modal1">
    <div class="hw-modal__overlay hw-animate hw-animate--fade-in-overlay" data-hw-modal-trigger="Modal1"></div>
    <div class="hw-modal__content hw-animate hw-animate--slide-in-bottom">
      <div class="hw-modal__header">
        <button class="hw-modal__close" data-hw-modal-trigger="Modal1">
          <i class="fal fa-times fa-2x" title="Close modal"></i>
        </button>
        <div class="hw-modal__title">
          <h1>Lorem ipsum dolor sit ameter</h1>
        </div>
      </div>
      <div class="hw-modal__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      </div>
    </div>
  </div>
```

### Modal with action buttons

```html

  <button class="hw-button hw-button--primary" data-hw-modal-trigger="Modal2">Modal with action buttons</button>

  <div class="hw-modal" data-hw-modal="Modal2">
    <div class="hw-modal__overlay hw-animate hw-animate--fade-in-overlay" data-hw-modal-trigger="Modal2"></div>
    <div class="hw-modal__content hw-animate hw-animate--slide-in-bottom">
      <div class="hw-modal__header">
        <button class="hw-modal__close" data-hw-modal-trigger="Modal2">
          <i class="fal fa-times fa-2x" title="Close modal"></i>
        </button>
        <div class="hw-modal__title">
          <h1>Lorem ipsum dolor sit ameter</h1>
        </div>
      </div>
      <div class="hw-modal__body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      </div>
      <div class="hw-modal__actions">
          <button
            class="hw-button hw-button--secondary" data-hw-modal-trigger="Modal2">Avbryt</button>
          <button class="hw-button hw-button--primary">Lagre</button>
      </div>
    </div>
  </div>
```
