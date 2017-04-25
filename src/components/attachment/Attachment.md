## Attachment

Used to list out downloadable attachments

```code
<a class="hw-attachment" href="#...">
  <i class="hw-attachment__icon">
    <svg class="hw-icon">
      <use xlink:href="#download"></use>
    </svg>
  </i>
  Download PDF
</a>
```

### Example Attachment

```html|span-4,plain,light
<a class="hw-attachment" href="#...">
  <i class="hw-attachment__icon">
    <svg class="hw-icon">
      <use xlink:href="#download"></use>
    </svg>
  </i>
  Download PDF
</a>
```

### Multiple Attachments (using hw-blocks)

```html|span-4,plain,light
  <div class="hw-block hw-block--full hw-block--margin-bottom">
    <a class="hw-attachment" href="#...">
      <i class="hw-attachment__icon">
        <svg class="hw-icon">
          <use xlink:href="#binders"></use>
        </svg>
      </i>
      Download PDF 1
    </a>
  </div>
  <div class="hw-block hw-block--full hw-block--margin-bottom">
    <a class="hw-attachment" href="#...">
      <i class="hw-attachment__icon">
        <svg class="hw-icon">
          <use xlink:href="#binders"></use>
        </svg>
      </i>
      Download PDF 2
    </a>
  </div>
  <div class="hw-block hw-block--full">
    <a class="hw-attachment" href="#...">
      <i class="hw-attachment__icon">
        <svg class="hw-icon">
          <use xlink:href="#binders"></use>
        </svg>
      </i>
      Download PDF 3
    </a>
  </div>
```
