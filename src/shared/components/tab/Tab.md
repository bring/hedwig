## Tab

Styling for tab.

Provides styling for sliding a marker between selected tabs

```code
[Base]           .hw-tab
[Item]           .hw-tab__item
[Selected Item]  .hw-tab__item--selected
[Marker]         .hw-tab__marker
```

### Primary

```html|span-4
<div class="hw-tab"><!--
  --><a href="#/Tab#item-1" class="hw-tab__item">Item 1</a><!--
  --><a href="#/Tab#item-2" class="hw-tab__item">Item 2</a><!--
  --><a href="#/Tab#item-3" class="hw-tab__item hw-tab__item--selected">Item 3</a><!--
  --><a href="#/Tab#item-4" class="hw-tab__item">Item 4 longer</a><!--
  --><a href="#/Tab#item-5" class="hw-tab__item">Item 5<span class="hw-text-smaller"> (12)</span></a><!--
  --><a href="#/Tab#item-6" class="hw-tab__item">Item 6</a><!--
  --><div class="hw-tab__marker"></div>
</div>
```

### Regression

If using only styling from Hedwig, the marker `hw-tab__marker` will be ignored and the active item will be underlined.
This will not support sliding the marker between items.
Removing the marker element will achieve this.
