## Lightbox

Lightbox component

```code
[Normal]           .hw-modal
```

### Default Hero

```html

  <button class="hw-button hw-button--primary" data-hw-modal-trigger="Modal1">Mer info</button>

  <div class="hw-modal" data-hw-modal="Modal1">
    <div class="hw-modal__window">
      <div class="hw-block
                  hw-block--mt
                  hw-block--mb">
        <button class="hw-modal__close" data-hw-modal-trigger="Modal1">
          <svg class="hw-icon">
             <use xlink:href="#binders"></use>
          </svg>
        </button>
        <div class="hw-modal__title">
          <h1>Hei</h1>
        </div>
        <div class="hw-modal__content">
          Her står det masse rart.
        </div>
        <div class="hw-modal__actions">
          <div class="hw-block--full hw-block--mb hw-block--mt">
            <button
              class="hw-button hw-button--secondary" data-hw-modal-trigger="Modal1">Avbryt</button>
            <button class="hw-button hw-button--primary">Lagre</button>
          </div>
        </div>
      </div>
    </div>
  </div>
```
