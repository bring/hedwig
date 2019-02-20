# Fonts

Our font is [Foundry Monoline](https://www.fonts.com/font/the-foundry/foundry-monoline).
The font size on H-tags are responsive on viewports between 300 - 1200px, and static on viewports smaller and bigger viewports

```code
[h1]             h1 font size 28 - 44px
[h2]             h2 font size 25 - 35px
[h3]             h3 font size 22 - 28px
[h4]             h4 font size 20 - 22px
[h5]             h5 font size 18px
[p]              p

[.hw-h1-large]       font size 32 - 54px
[.hw-h1]             font size 28 - 44px
[.hw-h2]             font size 25 - 35px
[.hw-h3]             font size 22 - 28px
[.hw-h4]             font size 20 - 22px
[.hw-h5]             font size 18px


[Lead]             hw-text-lead
[Small]            hw-text-small
[Smaller]          hw-text-smaller
[Less line-height] hw-text-less-line-height
[Uppercase]        hw-text-uppercase
[Center]           hw-text-center
[Right]            hw-text-right

[Color primary]       hw-color-primary
[Color primary dark]  hw-color-primary-dark
```

[Example article](https://www.bring.no/test/articles/designsystems) showing typography in use.

### Headers

```html|responsive
  <h1 class="hw-h1-ridiculously-huge">H1 Headline large example</h1>
  <h1>H1 Headline example</h1>
  <h2>H2 Headline example</h2>
  <h3>H3 Headline example</h3>
  <h4>H4 Headline example</h4>
  <h5>H5 Headline example</h5>
```

### Paragraph

```html|span-4,plain,light
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora, possimus veniam consequuntur commodi provident doloribus repellat rem ut earum? Distinctio voluptatibus suscipit error repellat, numquam deserunt fuga.</p>
```

### Lead
```html|span-4,plain,light
  <p class="hw-text-lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora, possimus veniam consequuntur commodi provident doloribus repellat rem ut earum? Distinctio voluptatibus suscipit error repellat, numquam deserunt fuga.</p>
```

### Small
```html|span-4,plain,light
  <p class="hw-text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora, possimus veniam consequuntur commodi provident doloribus repellat rem ut earum? Distinctio voluptatibus suscipit error repellat, numquam deserunt fuga.</p>
```

### Smaller
```html|span-4,plain,light
  <p class="hw-text-smaller">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora, possimus veniam consequuntur commodi provident doloribus repellat rem ut earum? Distinctio voluptatibus suscipit error repellat, numquam deserunt fuga.</p>
```

### Less line-height
```html|span-2,plain,light
  <p class="hw-text-less-line-height">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
```
### Uppercase
```html|span-4,plain,light
  <p class="hw-text-uppercase">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
```

### Text align
```html|span-4,plain,light
  <p>Default (left aligned)</p>
  <p class="hw-text-center">Center aligned</p>
  <p class="hw-text-right">Right aligned</p>

```

### Modifiers
Certain tags/components have modifiers 

These are the available modifiers and the tags/components they are available for


```table
rows:
  - Modifier: hw-text-bold
    Available for: h5, .hw-h5
  - Modifier: hw-text-light
    Available for: h4, p, .hw-text-small, .hw-text-smaller
  - Modifier: hw-text-dropcap
    Available for: p, .hw-text-lead, .hw-text-small, .hw-text-smaller
    ```

#### Examples
```html|span-4,plain,light
<h5 class="hw-text-bold">H5 tag with modifier hw-text-bold</h5>
<p class="hw-text-light">Paragraph with modifier hw-text-light</p>
```

#### Drop cap
```html|span-2,plain,light
  <p class="hw-text-dropcap">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
```
```html|span-2,plain,light
  <p class="hw-text-dropcap hw-text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
```
```html|span-2,plain,light
  <p class="hw-text-dropcap hw-text-smaller">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
```

### Colors
```hint
Posten uses color primary and Bring uses color primary darker because of accessability purposes
```

### Available font colors
```code
hw-color-primary-darker
hw-color-primary-dark
hw-color-primary
hw-color-primary-light
hw-color-primary-lighter
hw-color-gray-lightest
hw-color-gray-lighter
hw-color-gray-light
hw-color-gray
hw-color-gray-dark
hw-color-gray-darker
hw-color-gray-darkest
hw-color-yellow
hw-color-green
hw-color-red
hw-color-white
hw-color-black
hw-color-avocado
hw-color-secondary
```

#### Primary
```html|span-4,plain,light
  <p class="hw-color-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora, possimus veniam consequuntur commodi provident doloribus repellat rem ut earum? Distinctio voluptatibus suscipit error repellat, numquam deserunt fuga.</p>
```

#### Primary dark
```html|span-4,plain,light
  <p class="hw-color-primary-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, asperiores magni tempora, possimus veniam consequuntur commodi provident doloribus repellat rem ut earum? Distinctio voluptatibus suscipit error repellat, numquam deserunt fuga.</p>
```


