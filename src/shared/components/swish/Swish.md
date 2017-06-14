## Swish

Creates carousel from `<ul>` with left/right triggers and animations

```code
Required:

[data-hw-swish="name"]            name of swish (must be unique, used for aria-roles)

Triggers:

[data-hw-swish-next]              moves to next slide
[data-hw-swish-previous]          moves to previous slide

```

### Example swish (with contents)

```html|span-6
  <section class="hw-swish" data-hw-swish="example1">
    <ul class="hw-swish__inner">
      <li class="hw-swish__item">
        <div class="
          hw-block  
          hw-block--bg-primary
          hw-block--pt
          hw-block--pb
        ">
          <button class="hw-button hw-button--secondary" data-hw-swish-next>Next</button>
        </div>
      </li>
      <li class="hw-swish__item">
        <div class="
          hw-block  
          hw-block--bg-gray
          hw-block--pt
          hw-block--pb
        ">
          <button class="hw-button hw-button--outline-white" data-hw-swish-previous>Previous</button>
          <button class="hw-button hw-button--outline-white" data-hw-swish-next>Next</button>
        </div>
      </li>
      <li class="hw-swish__item">
        <div class="
          hw-block  
          hw-block--bg-gray-light
          hw-block--pt
          hw-block--pb
        ">
          <button class="hw-button hw-button--secondary" data-hw-swish-previous>Previous</button>
        </div>
      </li>
    </ul>
  </section>
```

### Example swish (barebones)

```html|span-6
  <section class="hw-swish" data-hw-swish="example1">
    <ul class="hw-swish__inner">
      <li class="hw-swish__item">
        <button class="hw-button" data-hw-swish-next>Next</button>
      </li>
      <li class="hw-swish__item">
        <button class="hw-button" data-hw-swish-next>Next</button>
        <button class="hw-button" data-hw-swish-previous>Previous</button>
      </li>
      <li class="hw-swish__item">
        <button class="hw-button" data-hw-swish-previous>Previous</button>
      </li>
    </ul>
  </section>
```
