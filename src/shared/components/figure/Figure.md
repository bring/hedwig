

> Can contain images or video.



### Markup
```code
[Base]              .hw-figure

Elements:
[Container]         .hw-figure__container
[Figcaption]        .hw-figure__figcaption
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




# Design guidelines

> Figures can contain images or video, and be with or without a caption. 



### {title} formats
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-formats-1.png"
title: "16:9"
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-formats-2.png"
title: "4:3"
```





## Best practices

#### Do

```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-do-1.png"
description: "Images should have 64 px padding at the top and the bottom. If an image is related to a specific paragraph, padding can be reduced to 32 px."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-do-2.png"
description: "Images should be full-width within it’s parent container."
```

#### Don't
  
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-1.png"
description: "Don’t use images in custom proportions."
```
```image
plain: true
span: 3
src: "{assets}/img/{postenbring}/{component}-dont-2.png"
description: "Don’t use images in custom proportions."
```