## Badge

Styling for badge.

Provides styling for badges

```code
[Base]           .hw-badge
```

### Variations

```code
[Smaller]  .hw-badge--smaller
[Small]    .hw-badge--small
[Large]    .hw-badge--large
[Larger]   .hw-badge--larger
```

### Primary

The badge will have a size 75% of surrounding content unless size modifiers are used

```html|span-4
light: true,
plain: true
---
<div class="hw-badge">
  Badge
</div>
```

### Example badge

```html|span-4
light: true,
plain: true
---
I am a <div class="hw-badge">
  Badge
</div> 
```

### Sizes

```html
light: true,
plain: true
---
<div class="hw-badge hw-badge--larger">
  Badge
</div>

<div class="hw-badge hw-badge--large">
  Badge
</div>

<div class="hw-badge hw-badge--small">
  Badge
</div>

<div class="hw-badge hw-badge--smaller">
  Badge
</div>
```
