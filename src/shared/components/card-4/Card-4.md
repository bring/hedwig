## Card

Styling for cards.

```code
[Base]           .hw-card-4
```

### Regular card

```html|span-3
  <a href="#" class="hw-card-4">
    <div class="hw-card-4__header">
        <div class="hw-card-4__header__icon">
        
        </div>
        <div class="hw-card-4__header__sub-header">
            <h3 class="hw-card-4__title">Card Title</h3>
            <div class="hw-card-4__text-primary">
                  Lorem ipsum dolor.
            </div>
        </div>
        
    </div>
    <div class="hw-card-4__media">
      <div class="hw-card-4__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
    <div class="hw-card-4__body">    
      <div class="hw-card-4__text-secondary">
              Lorem ipsum dolor sit amet.
      </div>
      <div class="hw-card-4__actions">
        <button class="hw-button hw-button--primary hw-button--small">
            CTA1
        </button>
        <button class="hw-button hw-button--primary hw-button--small">
            CTA2
        </button>
      </div>
    </div>
  </a>
```


```html|span-5
  <a href="#" class="hw-card-4">
    <div class="hw-card-4__media">
      <div class="hw-card-4__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
    <div class="hw-card-4__body">
      <h3 class="hw-card-4__title">Card Title</h3>
       <div class="hw-card-4__text-primary">
              Lorem ipsum dolor.
       </div>
      <div class="hw-card-4__text-secondary">
        Lorem ipsum dolor sit amet.
      </div>
    </div>
  </a>
```

### Cards in grid

```html|span-8
  <div class="hw-grid">
    <div class="hw-grid__item hw-large--one-third">
      <div class="hw-block hw-block--mb">
        <a href="#" class="hw-card-4">
            <div class="hw-card-4__media">
              <div class="hw-card-4__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
            </div>
            <div class="hw-card-4__body">
              <h3 class="hw-card-4__title">Card Title</h3>
               <div class="hw-card-4__text-primary">
                      Lorem ipsum dolor.
               </div>
              <div class="hw-card-4__text-secondary">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
          </a>
      </div>
    </div><!--
 --><div class="hw-grid__item hw-large--one-third">
      <div class="hw-block hw-block--mb">
        <a href="#" class="hw-card-4">
            <div class="hw-card-4__media">
              <div class="hw-card-4__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
            </div>
            <div class="hw-card-4__body">
              <h3 class="hw-card-4__title">Card Title</h3>
               <div class="hw-card-4__text-primary">
                      Lorem ipsum dolor.
               </div>
              <div class="hw-card-4__text-secondary">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
          </a>
      </div>
    </div><!--
 --><div class="hw-grid__item hw-large--one-third">
      <div class="hw-block hw-block--mb">
        <a href="#" class="hw-card-4">
            <div class="hw-card-4__media">
              <div class="hw-card-4__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
            </div>
            <div class="hw-card-4__body">
              <h3 class="hw-card-4__title">Card Title</h3>
               <div class="hw-card-4__text-primary">
                      Lorem ipsum dolor.
               </div>
              <div class="hw-card-4__text-secondary">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
          </a>
      </div>
    </div>
  </div>
```
