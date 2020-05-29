


{navigation}


> Quote is a text block highlighting a statement, and is most often used on article pages. Keep in mind that the Norwegian and English language use different quotation marks.



```hint
Available in version 6.1.0
```

## Normal quote with citation

```html|plain,light
<blockquote class="hw-quote">
  <p class="hw-quote__content hw-h3">This is a quote said by someone.</p>
  <p class="hw-quote__author">– Someone</p>
</blockquote>
```


## Quote with norwegian quotation marks

```html|plain,light
<blockquote class="hw-quote hw-quote--norwegian">
  <p class="hw-quote__content hw-h3">This is a quote said by someone.</p>
  <p class="hw-quote__author">– Someone</p>
</blockquote>
```

## Example without cite

```html|plain,light
<blockquote class="hw-quote">
  <p class="hw-quote__content hw-h3">Penguins are a group of aquatic flightless birds</p>
</blockquote>
```

## Example in content

```html|plain,light
<div class="hw-container hw-container--small">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus at metus condimentum blandit nec in mi. Nam vitae urna dapibus, tincidunt massa facilisis, tincidunt justo. Mauris et tristique dolor. Nunc mollis neque sed auctor rhoncus. Praesent sagittis ornare mauris, in volutpat diam elementum nec. Donec id posuere mi. Integer ac ipsum ligula. Etiam tempus felis tempus dolor vestibulum, vel aliquam sem placerat. Donec eget condimentum felis. Fusce sodales velit neque, vitae malesuada libero egestas vitae. Nunc quis posuere risus.
  </p>
  <blockquote class="hw-quote">
    <p class="hw-quote__content hw-h3">I love deadlines. I love the whooshing sound they make as they go by</p>
    <p class="hw-quote__author">Leif</p>
  </blockquote>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tellus at metus condimentum blandit nec in mi. Nam vitae urna dapibus, tincidunt massa facilisis, tincidunt justo. Mauris et tristique dolor. Nunc mollis neque sed auctor rhoncus. Praesent sagittis ornare mauris, in volutpat diam elementum nec. Donec id posuere mi. Integer ac ipsum ligula. Etiam tempus felis tempus dolor vestibulum, vel aliquam sem placerat. Donec eget condimentum felis. Fusce sodales velit neque, vitae malesuada libero egestas vitae. Nunc quis posuere risus.
  </p>
</div>
```








# Design guidelines

> Quote is a text block highlighting a statement, and is most often used on article pages. Keep in mind that the Norwegian and English language use different quotation marks.






### Quotation marks
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-1.png"
title: "English quotation marks"
```
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-2.png"
title: "Norwegian quotation marks"
```






### Styling
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-styling-1.png"
title: "Styling"
description: "Quotes are styled in 32 px size with Posten Sans Light as the font weight. The source text is set in 16 px, the Technical font style."
```







## Best practices

### Do

```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-do-1.png"
description: "Use quotes to break up long articles with an interesting statement that makes users want to keep reading."
```


### Don't
  
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-dont-1.png"
description: "Do not quote complete paragraphs and long texts as it gets hard to read."
```