# Images

TODO: Image sizes

```code
[Base]      .hw-image
[Large]     .hw-image--large
[Full]      .hw-image--full
```

### Default image

```html|span-3
<figure class="hw-image">
  <img
    alt="Picture of happy people"
    src="https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/article-image-1.jpg"
  />
</figure>
```

```html|span-3
<figure class="hw-image">
  <img
    alt="Picture of happy people"
    src="https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/article-image-1.jpg"
  />
  <figcaption>
    <svg class="hw-image__caption-icon">
      <use xlink:href="#arrow-up"></use>
    </svg>
    Can I help you? Yeah, can I have a dozen red roses, please? Oh, hi, Johnny. I didn't know it was you. 
  </figcaption>
</figure>
```

### Large image

The large image pokes outside of it's container.

```html|span-4
<figure class="hw-image hw-image--large">
  <img
    alt="Picture of happy people"
    src="https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/article-image-1.jpg"
  />
  <figcaption>
    With caption
  </figcaption>
</figure>
```

### Full image

The full version always takes up all it's space.

```html|span-6
<figure class="hw-image hw-image--full">
  <img
    alt="Picture of happy people"
    src="https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/article-image-1.jpg"
  />
  <figcaption>
    With caption
  </figcaption>
</figure>
```
