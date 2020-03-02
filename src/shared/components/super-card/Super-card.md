## Card

Styling for cards.

```code
[Base]           .hw-super-card
```

### Regular card

```html|span-3
 <div class="hw-super-card hw-background-color-white">
  <a href="#" >
    <div class="hw-super-card__header">
        <div class="hw-super-card__header__icon">
        
        </div>
        <div class="hw-super-card__header__sub-header">
            <h3 class="hw-super-card__title">Card Title</h3>
            <div class="hw-super-card__text-primary">
                  Lorem ipsum dolor.
            </div>
        </div>
        
    </div>
    <div class="hw-super-card__media">
      <div class="hw-super-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
    <div class="hw-super-card__body">    
      <div class="hw-super-card__text-secondary">
              Lorem ipsum dolor sit amet.
      </div>
    </div>
  </a>
  <div class="hw-super-card__actions">
    <button class="hw-button hw-button--outline hw-button--small">
        CTA1
    </button>
    <button class="hw-button hw-button--outline hw-button--small">
        CTA2
    </button>
  </div>
```


```html|span-5
  <a href="#" class="hw-super-card">
    <div class="hw-super-card__media">
      <div class="hw-super-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
    </div>
    <div class="hw-super-card__body">
      <h3 class="hw-super-card__title">Card Title</h3>
       <div class="hw-super-card__text-primary">
              Lorem ipsum dolor.
       </div>
      <div class="hw-super-card__text-secondary">
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
        <a href="#" class="hw-super-card">
            <div class="hw-super-card__media">
              <div class="hw-super-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
            </div>
            <div class="hw-super-card__body">
              <h3 class="hw-super-card__title">Card Title</h3>
               <div class="hw-super-card__text-primary">
                      Lorem ipsum dolor.
               </div>
              <div class="hw-super-card__text-secondary">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
          </a>
      </div>
    </div><!--
 --><div class="hw-grid__item hw-large--one-third">
      <div class="hw-block hw-block--mb">
        <a href="#" class="hw-super-card">
            <div class="hw-super-card__media">
              <div class="hw-super-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
            </div>
            <div class="hw-super-card__body">
              <h3 class="hw-super-card__title">Card Title</h3>
               <div class="hw-super-card__text-primary">
                      Lorem ipsum dolor.
               </div>
              <div class="hw-super-card__text-secondary">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
          </a>
      </div>
    </div><!--
 --><div class="hw-grid__item hw-large--one-third">
      <div class="hw-block hw-block--mb">
        <a href="#" class="hw-super-card">
            <div class="hw-super-card__media">
              <div class="hw-super-card__media-inner" style="background-image: url('https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/demo-image-1.png');"></div>
            </div>
            <div class="hw-super-card__body">
              <h3 class="hw-super-card__title">Card Title</h3>
               <div class="hw-super-card__text-primary">
                      Lorem ipsum dolor.
               </div>
              <div class="hw-super-card__text-secondary">
                Lorem ipsum dolor sit amet.
              </div>
            </div>
          </a>
      </div>
    </div>
  </div>
```
