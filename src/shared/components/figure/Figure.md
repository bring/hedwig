# Figure

Can contain images or video.

```code
[Base]        .hw-figure

Sub elements
[Container]   .hw-figure__container
[Figcaption]  .hw-figure__figcaption
```

### Default figure

```html|span-3
<figure class="hw-figure">
  <div class="hw-figure__container">
    <img
      alt="Picture of happy people"
      src="https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/article-image-1.jpg"
    />
  </div>
</figure>
```

### With figcaption
```html|span-3
<figure class="hw-figure">
  <div class="hw-figure__container">
    <img
      alt="Picture of happy people"
      src="https://bring-hedwig.s3.amazonaws.com/hedwig/assets/images/article-image-1.jpg"
    />
  </div>
  <figcaption class="hw-figure__figcaption">
    Can I help you? Yeah, can I have a dozen red roses, please? Oh, hi, Johnny. I didn't know it was you. 
  </figcaption>
</figure>
```
