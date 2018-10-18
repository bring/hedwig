# Fonts

Our font is [Foundry Monoline](https://www.fonts.com/font/the-foundry/foundry-monoline).
The font size on H-tags are responsive on viewports between 300 - 1200px, and static on viewports smaller and bigger viewports

```code
[h1]             h1 font size 28 - 56px
[h2]             h2 font size 25 - 42px
[h3]             h3 font size 22 - 31px
[h4]             h4 font size 20 - 23px
[h5]             h5 font size 18 - 20px
[p]              p

[Lead]           hw-text-lead
[Small]          hw-text-small
[Smaller]        hw-text-smaller

[Color primary]       hw-color-primary
[Color primary dark]  hw-color-primary-dark
```

[Example article](https://www.bring.no/test/articles/designsystems) showing typography in use.

### Headers

```html|span-6,plain,light
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

### Modifiers
Certain tags/components have modifiers 

These are the available modifiers and the tags/components they are available for


```table
rows:
  - Modifier: hw-text-bold
    Available for: h5, .hw-h5
  - Modifier: hw-text-light
    Available for: p, .hw-text-small, .hw-text-smaller
    ```

#### Examples
```html|span-4,plain,light
<h5 class="hw-text-bold">H5 tag with modifier hw-text-bold</h5>
<p class="hw-text-light">Paragraph with modifier hw-text-light</p>
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


