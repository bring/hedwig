## Tooltip

A question mark icon that shows a help text when clicked or hovered.

It has two modes:

- Simple mode: Show text in a small tooltip when hovered/clicked
- Drawer mode: (for lots of text) Show text in a drawer when clicked

```code
[data-hw-tooltip]                         (optional) Attach js functionality
[data-hw-tooltip-target="#drawer-id"]     (optional) ID of drawer to display
```

### Simple mode

```html|span-4,plain,light
<div class="hw-tooltip">
  <button class="hw-tooltip__button"></button>
  <div class="hw-tooltip__content">Did you know? Owls are immortal...</div>
</div>
```

### Drawer mode

```html|span-4,plain,light
<div class="hw-tooltip" data-hw-tooltip data-hw-tooltip-target="drawer-1">
  <button class="hw-tooltip__button"></button>
  <div class="hw-tooltip__content">Did you know? Owls are immortal...</div>
</div>
```
