
## Text utilities

Gives you control over text properties like alignment, transform and colors.

**NB:** Be careful not to use these helpers in reusable components, as it will be difficult to apply style changes to all components at a later point.

```code
[Base]                    .hw-text

[Center align]            .hw-text-center
[Left align]              .hw-text-left
[Right align]             .hw-text-right

[Uppercase]               .hw-text-uppercase
[Lowercase]               .hw-text-lowercase
[Capitalize]              .hw-text-capitalize

[Primary text-color]      .hw-text-color--primary
[White text-color]        .hw-text-color--white

```

## Examples

### Text center

```html
<h1 class="hw-text-center">Centered text</h1>
```

### Uppercase text

```html
<h4 class="hw-text-uppercase hw-text-center hw-text-color--primary">Centered primary uppercased</h4>
<h1 class="hw-text-center">Big centered heading</h1>
```

### Text primary color

```html
<h1 class="hw-text-color--primary">Centered text</h1>
```
