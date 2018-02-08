## Table - WORK IN PROGRESS

```html
<div class="hw-table">
  <table data-hw-table="tablename" >
    <thead>
      <tr>
       <!--When a header is clicked, run the sortTable function, with a parameter, 0 for sorting by names, 1 for sorting by country:-->  
        <th data-hw-sort-method="none" data-hw-sort-default>First name</th>
        <th data-hw-sort-arrows="true" data-hw-sort>Last name</th>
        <th data-hw-sort-arrows="true" data-hw-sort>Age</th>
        <th data-hw-sort-arrows="true" data-hw-sort>Sex</th>
        <th data-hw-sort-arrows="true" data-hw-sort>Country</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Anders</td>
        <td>Eriksen</td>
        <td>24</td>
        <td>Male</td>
        <td>Sweden</td>
      </tr>
      <tr>
        <td>Celine</td>
        <td>Berg</td>
        <td>29</td>
        <td>Male</td>
        <td>Norway</td>
      </tr>
      <tr>
        <td>Åre</td>
        <td>Bugge</td>
        <td>89</td>
        <td>Male</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Helene</td>
        <td>Åse</td>
        <td>53</td>
        <td>Female</td>
        <td>Germany</td>
      </tr>
    </tbody>
  </table>
</div>
```
### Table - fixed header

```html
<div class="hw-table hw-table--fixed-header" data-hw-table-height="200">
  <table data-hw-table="tablename" >
    <thead>
      <tr>
       <!--When a header is clicked, run the sortTable function, with a parameter, 0 for sorting by names, 1 for sorting by country:-->  
        <th data-hw-sort-arrows="true">First name</th>
        <th data-hw-sort-arrows="true">Last name</th>
        <th data-hw-sort-arrows="true">Age</th>
        <th data-hw-sort-arrows="true">Sex</th>
        <th data-hw-sort-arrows="true">Country</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hw-table__hr--fixed">
        <td>Anders</td>
        <td>Eriksen</td>
        <td>24</td>
        <td>Male</td>
        <td>Sweden</td>
      </tr>
      <tr>
        <td>Anders</td>
        <td>Eriksen</td>
        <td>24</td>
        <td>Male</td>
        <td>Sweden</td>
      </tr>
      <tr>
        <td>Celine</td>
        <td>Berg</td>
        <td>29</td>
        <td>Male</td>
        <td>Norway</td>
      </tr>
      <tr>
        <td>Åre</td>
        <td>Bugge</td>
        <td>89</td>
        <td>Male</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Helene</td>
        <td>Åse</td>
        <td>53</td>
        <td>Female</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Guro</td>
        <td>Eilirt</td>
        <td>33</td>
        <td>Female</td>
        <td>Greenland</td>
      </tr>
      <tr>
        <td>Gubben</td>
        <td>Gamlefar</td>
        <td>99</td>
        <td>Male</td>
        <td>Skohornet</td>
      </tr>
    </tbody>
  </table>
</div>
```


```html
<div class="hw-table hw-table--fixed-header" data-hw-table-height="200">
  <table data-hw-table="tablename">
    <thead>
      <tr>
        <th scope="col" data-hw-table-fixed-left data-hw-sort-arrows="true">First name</th>
        <th scope="col" data-hw-sort-arrows="true">Last name</th>
        <th scope="col" data-hw-sort-arrows="true">Age</th>
        <th scope="col" data-hw-sort-arrows="true">Sex</th>
        <th scope="col" data-hw-sort-arrows="true">Country</th>
      </tr>
    </thead>
    <tbody>
      <tr data-col="Halla" class="hw-table__hr--fixed">
        <th scope="row" data-hw-table-fixed-left>Anders</th>
        <td>Eriksen</td>
        <td>24</td>
        <td>Male</td>
        <td>Sweden</td>
      </tr>
      <tr>
        <th scope="row" data-hw-table-fixed-left>Anders</th>
        <td>Eriksen</td>
        <td>24</td>
        <td>Male</td>
        <td>Sweden</td>
      </tr>
      <tr>
        <th scope="row" data-hw-table-fixed-left>Celine</th>
        <td>Berg</td>
        <td>29</td>
        <td>Male</td>
        <td>Norway</td>
      </tr>
      <tr>
        <th scope="row" data-hw-table-fixed-left>Åre</th>
        <td>Bugge</td>
        <td>89</td>
        <td>Male</td>
        <td>Germany</td>
      </tr>
      <tr>
        <th scope="row" data-hw-table-fixed-left>Åre</th>
        <td>Bugge</td>
        <td>89</td>
        <td>Male</td>
        <td>Germany</td>
      </tr>
    </tbody>
  </table>
</div>
```
