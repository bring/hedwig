## Media

Media object component

```code
[Normal]           .hw-media
[Reversed]         .hw-media--reversed
[Responsive]       .hw-media--responsive
```

### Media object

```html|span-6
  <div class="hw-media">
      <div class="hw-media__img">
        <img src="http://placehold.it/100x100" alt="#">        
      </div>
      <div class="hw-media__body">
        <h3 class="hw-media__title">Subject</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, voluptatibus minus necessitatibus veritatis itaque magnam</p>
      </div>
  </div>
```

### Media object (reversed)

```html|span-6
  <div class="hw-media hw-media--reversed">
      <div class="hw-media__img">
        <img src="http://placehold.it/100x100" alt="#">        
      </div>
      <div class="hw-media__body">
        <h3 class="hw-media__title">Subject</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, voluptatibus minus necessitatibus veritatis itaque magnam</p>
      </div>
  </div>
```

### Media object (responsive)

```html|span-6
  <div class="hw-media hw-media--responsive">
      <div class="hw-media__img">
        <img src="http://placehold.it/100x100" alt="#">        
      </div>
      <div class="hw-media__body">
        <h3 class="hw-media__title">Subject</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, voluptatibus minus necessitatibus veritatis itaque magnam</p>
      </div>
  </div>
```

### Media object with mixed contents

```html|span-6
  <div class="hw-media">
      <div class="hw-media__img">
        <img src="http://placehold.it/300x300" alt="#">        
      </div>
      <div class="hw-media__body">
        <h3 class="hw-media__title">Subject</h3>
        <div class="
          hw-block
          hw-block--full
          hw-block--mt-small
        ">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, voluptatibus minus necessitatibus veritatis itaque magnam</p>
        </div>
        <div class="
          hw-block
          hw-block--full
          hw-block--mt
        ">
          <button class="hw-button hw-button--primary">
            Hello there!
          </button>
        </div>
      </div>
  </div>
```
