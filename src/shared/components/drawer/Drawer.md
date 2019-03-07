## Drawer

Drawer component

### Base

```code
[Normal]           .hw-drawer
```

### Required data attributes

```code
[data-hw-drawer]            Specifies a unique name for a drawer. Used to target a drawer with buttons.
[data-hw-drawer-trigger]    Refers to a specific drawer that you want to toggle. Will toggle drawer if a
                            clicked button with this parameter matches data-hw-drawer attribute for a drawer.
[data-hw-drawer-content]    Specifies element for the content of the drawer

The close button needs to be a button for tab-navigation to be able to focus on it.
```

```html
  <button class="hw-button hw-button--primary" data-hw-drawer-trigger="Drawer2">Drawer with action buttons</button>

  <div role="dialog"
    aria-labelledby="dialog1Title"
    class="hw-drawer"
    data-hw-drawer="Drawer2">

    <div class="hw-drawer__overlay hw-animate hw-animate--fade-in-overlay" data-hw-drawer-trigger="Drawer2"></div>
    <div data-hw-drawer-content class="hw-drawer__content">
      <div class="hw-drawer__header">
        <button class="hw-drawer__close-button" data-hw-drawer-trigger="Drawer2">
          <i class="far fa-times fa-2x hw-drawer__close-button-x" title="Close drawer"></i>
        </button>
      </div>
      <div class="hw-drawer__body">
        <div class="hw-wysiwyg">
          <h1 id="dialog1Title">Lorem ipsum dolor sit ameter</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </p>
          <button class="hw-button hw-button--primary">Lagre</button>
          <button class="hw-button hw-button--secondary" data-hw-drawer-trigger="Drawer2">Avbryt</button>
        </div>
      </div>
    </div>
  </div>
```

### Client-side rendering - React / Angular

```hint
Added in version 7.1.2
```

If rendering a drawer is done in the frontend, this component needs to be initialized after rendering.

```code
hedwig.HWDrawer();
```
