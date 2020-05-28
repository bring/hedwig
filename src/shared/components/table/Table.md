
{navigation}


> Tables for presenting information


### Default - 2 columns

```html|plain,light
<div class="hw-table">
  <table>

    <thead>
      <tr>
        <th>Category</th>
        <th>Something else</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Data in the column</td>
        <td>More information</td>
      </tr>

      <tr>
        <td>Data in the column</td>
        <td>More information</td>
      </tr>

      <tr>
        <td>Data in the column</td>
        <td>More information</td>
      </tr>

      <tr>
        <td>Data in the column</td>
        <td>More information</td>
      </tr>

    </tbody>

  </table>
</div>

<div class="hw-table__description">
  *Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</div>
```






### Default - 3 columns

```html|plain,light
<div class="hw-table">
  <table>

    <thead>
      <tr>
        <th>Category</th>
        <th>Something else</th>
        <th>More</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Data in the column</td>
        <td>More information</td>
        <td>100</td>
      </tr>

      <tr>
        <td>Data in the column</td>
        <td>More information</td>
        <td>200</td>
      </tr>

      <tr>
        <td>Data in the column</td>
        <td>More information</td>
        <td>300</td>
      </tr>

      <tr>
        <td>Data in the column</td>
        <td>More information</td>
        <td>400</td>
      </tr>

    </tbody>

  </table>
</div>

<div class="hw-table__description">
  *Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</div>
```






### Default - 4 columns

```html|plain,light
<div class="hw-table">
  <table>

    <thead>
      <tr>
        <th>Category</th>
        <th>Something else</th>
        <th>More</th>
        <th>And this</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Data in the column</td>
        <td>More information</td>
        <td>100 <div class="hw-badge">Badge</div></td>
        <td>Information</td>
      </tr>

      <tr>
        <td>Data in the column</td>
        <td>More information</td>
        <td>200 <div class="hw-badge">Badge</div></td>
        <td>Information</td>
      </tr>

      <tr>
        <td>Data in the column</td>
        <td>More information</td>
        <td>300</td>
        <td>Information</td>
      </tr>

      <tr>
        <td>Data in the column</td>
        <td>More information</td>
        <td>400</td>
        <td>Information</td>
      </tr>

    </tbody>

  </table>
</div>

<div class="hw-table__description">
  *Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</div>
```





 


### With subtitle in columns

```html|plain,light
<div class="hw-table">
  <table>

    <thead>
      <tr>
        <th>Category</th>
        <th>Something else</th>
        <th>More</th>
        <th>And this</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          Data in the column
          <div class="hw-table--subtitle">Something</div>
        </td>
        <td>
          More information
          <div class="hw-table--subtitle"><a href="#">Link to something</a></div>
        </td>
        <td>
          100
          <div class="hw-table--subtitle">Something</div>
        </td>
        <td>
          Information
          <div class="hw-table--subtitle">Something  <div class="hw-badge hw-badge-smaller hw-badge--dark">Badge</div></div>
        </td>
      </tr>

      <tr>
        <td>
          Data in the column
          <div class="hw-table--subtitle">Something</div>
        </td>
        <td>
          More information
          <div class="hw-table--subtitle"><a href="#">Link to something</a></div>
        </td>
        <td>
          100
          <div class="hw-table--subtitle">Something</div>
        </td>
        <td>
          Information
          <div class="hw-table--subtitle">Something</div>
        </td>
      </tr>

      <tr>
        <td>
          Data in the column
          <div class="hw-table--subtitle">Something</div>
        </td>
        <td>
          More information
          <div class="hw-table--subtitle"><a href="#">Link to something</a></div>
        </td>
        <td>
          100 <div class="hw-badge">Badge</div>
          <div class="hw-table--subtitle">Something</div>
        </td>
        <td>
          Information
          <div class="hw-table--subtitle">Something</div>
        </td>
      </tr>

    </tbody>

  </table>
</div>

<div class="hw-table__description">
  *Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</div>
```








# Design guidelines

> Tables show sets of data across a grid of rows and columns. We use tables to organize information in a way that is easy for the users to scan through.


### {title} anatomy
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-anatomy-1.png"
title: "Header row"
description: "Place a header row at the top of the table to describe the type of data displayed in each column."
```
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-anatomy-2.png"
title: "Middle row"
description: "Use middle rows to list your data. Each row should contain data related to a single entity. "
```
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-anatomy-3.png"
title: "Footer row"
description: "Footer rows can be added to the bottom of a table if further explanation is needed for some data."
```
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-anatomy-4.png"
title: "Assembled table"
description: "This is an example of an assembled table containing a header row, two middle rows and a footer row."
```




### Predefined table components in Figma
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-figma-1.png"
title: "2 columns"
description: "A predefined table of two equal columns spanning a width of 700 px."
```
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-figma-2.png"
title: "3 columns"
description: "A predefined table of three equal columns spanning a width of 700 px."
```
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-figma-3.png"
title: "4 columns"
description: "A predefined table of four equal columns spanning a width of 700 px."
```
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-figma-4.png"
title: "Columned table"
description: "A 4-col table with a description to the data input and separated dividers. "
```


### Create a custom table

> If none of the predefined table components meet your needs for creating a table, you can easily customize your own. Use the custom table component and drag the width of the text boxes to fit your needs.

```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-custom-1.png"
title: "Custom table"
description: "Create a custom table with columns and column widths as needed. Tables should not be wider than 700 px."
```







## Best practices

### Do

```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-do-1.png"
description: "Keep headings short and clear."
```
### Don't
  
```image
plain: true
span: 3
src: "{assets}/img/docs/{postenbring}/{component}-dont-1.png"
description: "Do not use long texts as headings."
```





