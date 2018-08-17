## Icon

Hedwig uses two types of icons **Font Awesome Icons** and **Service Icons**

Generally the icons from Font Awesome are functional icons while the Service Icons are used to illustrate a service
There are also logos for Posten and Bring


To use Service Icons and logos,


To use the icons set, add this script in your footer:
```code
https://cdn.jsdelivr.net/npm/@posten/hedwig@[version]/dist/icons.min.js id="hw-icons"
```
Also, the ID for the script tag must be "hw-icons"

### Moving from major version 7 to 8
Major version change from 7 to 8 is about icons


#### Renamed icons
**Old name** | **New name**
-------- | ------
attachment  | paperclip
avatar   | user
barcode | barcode-alt
bin | trash-alt
burger   | bars
card | credit-card
caret-down  | chevron-down
caret-left  | chevron-left
caret-right  | chevron-right
caret-up  | chevron-up
cart | shopping-cart
chart  | chart-line
chat  | comments
computer  | desktop
cross  | times
cross-thin  | times
document | file
download | cloud-download
lock-open   | unlock
marker   | map-marker-alt
questionmark-circle  | question-circle
remove   | times-circle
refresh   | sync-alt
some-facebook | facebook-f
some-instagram | instagram
some-google | google-plus-g
some-facebook | facebook-f
target   | dot-circle
upload   | cloud-upload


#### Changed icons
Looks different, but same name

- at
- box
- calculator
- calendar
- camera
- check
- clock
- envelope
- envelope-open
- exclamation
- eye
- flag
- folder
- globe
- home
- info
- key
- lock
- minus
- mobile
- paperclip
- pencil
- phone
- plus
- reply
- search
- star



### Examples of including
#### Latest
Will load the latest version. Including major updates, minor updates and patches
```hint
Do not use for production
```

```code
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@posten/hedwig@latest/dist/icons.min.js" id="hw-icons"></script>
```

#### Major
Will load the latest of major version 7. Including minor updates and patches
```hint
Recommended for production
```
```code
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@posten/hedwig@7/dist/icons.min.js" id="hw-icons"></script>
```

#### Minor
Will load the latest of minor version 7.1. Including patches
```code
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@posten/hedwig@7.1/dist/icons.min.js" id="hw-icons"></script>
```

#### Patch
Will load a specific patch version 7.1.1.
```code
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@posten/hedwig@7.1.1/dist/icons.min.js" id="hw-icons"></script>
```
This will add an icon sprite into your document with ajax after page load. The whole icon set is 20.5 KB.


**The icons are added like this:**

```code
lang: html
---
<svg class="hw-icon">
   <use xlink:href="#[name]"></use>
</svg>
```

### Variations

```code
[Normal]       .hw-icon
[Small]        .hw-icon--small
[Large]        .hw-icon--large
[Primary]      .hw-icon--primary
[Green]        .hw-icon--green
[Red]          .hw-icon--red
[Gray Darker]  .hw-icon--gray-lighter
[Gray Lighter] .hw-icon--gray-darker
```


### Font Awesome icons intro

We use icons from three different Font Awesome sets
- Solid - fas
- Regular - far
- Brands - 


```code
<i class="hw-icon fas fa-calculator"></i>
```




### Font Awesome icons - Solid - Full list

```html|span-6,noSource
<i class="hw-icon fa-2x fa-fw fas fa-at"></i> fas fa-at<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-award"></i> fas fa-award<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-barcode-alt"></i> fas fa-barcode-alt<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-bars"></i> fas fa-bars<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-box"></i> fas fa-box<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-calculator"></i> fas fa-calculator<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-camera"></i> fas fa-camera<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-chart-line"></i> fas fa-chart-line<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-check"></i> fas fa-check<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-check-circle"></i> fas fa-check-circle<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-chevron-down"></i> fas fa-chevron-down<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-chevron-left"></i> fas fa-chevron-left<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-chevron-right"></i> fas fa-chevron-right<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-chevron-up"></i> fas fa-chevron-up<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-clock"></i> fas fa-clock<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-cloud-download"></i> fas fa-cloud-download<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-cloud-upload"></i> fas fa-cloud-upload<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-comments"></i> fas fa-comments<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-credit-card"></i> fas fa-credit-card<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-desktop"></i> fas fa-desktop<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-dot-circle"></i> fas fa-dot-circle<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-envelope"></i> fas fa-envelope<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-envelope-open"></i> fas fa-envelope-open<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-exclamation"></i> fas fa-exclamation<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-eye"></i> fas fa-eye<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-file"></i> fas fa-file<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-flag"></i> fas fa-flag<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-folder"></i> fas fa-folder<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-globe"></i> fas fa-globe<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-home"></i> fas fa-home<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-info"></i> fas fa-info<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-key"></i> fas fa-key<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-lock"></i> fas fa-lock<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-map-marker-alt"></i> fas fa-map-marker-alt<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-minus"></i> fas fa-minus<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-mobile"></i> fas fa-mobile<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-paperclip"></i> fas fa-paperclip<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-pencil"></i> fas fa-pencil<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-phone"></i> fas fa-phone<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-plus"></i> fas fa-plus<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-question-circle"></i> fas fa-question-circle<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-reply"></i> fas fa-reply<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-search"></i> fas fa-search<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-shopping-cart"></i> fas fa-shopping-cart<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-star"></i> fas fa-star<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-sync-alt"></i> fas fa-sync-alt<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-times"></i> fas fa-times<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-times-circle"></i> fas fa-times-circle<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-trash-alt"></i> fas fa-trash-alt<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-unlock"></i> fas fa-unlock<br/><br/>
<i class="hw-icon fa-2x fa-fw fas fa-user"></i> fas fa-user<br/><br/>
```
#### Example
```html
<i class="hw-icon fa-2x fas fa-shopping-cart"></i>
```


### Service icons

```html|span-6,noSource
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#bud"></use>
      </svg>
      bud
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#ekspress"></use>
      </svg>
      ekspress
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#ekspressfly"></use>
      </svg>
      ekspressfly
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#flytransport"></use>
      </svg>
      flytransport
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#foer07"></use>
      </svg>
      foer07
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#hentested"></use>
      </svg>
      hentested
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#innenfordoeren"></use>
      </svg>
      innenfordoeren
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#internasjonalt"></use>
      </svg>
      internasjonalt
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#leverthjem"></use>
      </svg>
      leverthjem
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#leverttilbedrift"></use>
      </svg>
      leverttilbedrift
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#paadoeren"></use>
      </svg>
      paadoeren
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#pakke"></use>
      </svg>
      pakke
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#palltilbedrift"></use>
      </svg>
      palltilbedrift
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#partigods"></use>
      </svg>
      partigods
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#postkasse"></use>
      </svg>
      postkasse
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#retur"></use>
      </svg>
      retur
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#skreddersoem"></use>
      </svg>
      skreddersoem
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#stykkgods"></use>
      </svg>
      stykkgods
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#temperaturregulert"></use>
      </svg>
      temperaturregulert
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#toll"></use>
      </svg>
      toll
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#utenforhuset"></use>
      </svg>
      utenforhuset
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#adresseendringogoppbevaring"></use>
      </svg>
      adresseendringogoppbevaring
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#bankogfinans"></use>
      </svg>
      bankogfinans
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#billetter"></use>
      </svg>
      billetter
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#brev"></use>
      </svg>
      brev
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#digitaltfrimerke"></use>
      </svg>
      digitaltfrimerke
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#frimerker"></use>
      </svg>
      frimerker
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#frimerkertilsamling"></use>
      </svg>
      frimerkertilsamling
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#henteipostkassen"></use>
      </svg>
      henteipostkassen
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#hvordanmottapost"></use>
      </svg>
      hvordanmottapost
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#pakkerstykkgodsogdellast"></use>
      </svg>
      pakkerstykkgodsogdellast
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service">
    <svg class="hw-icon">
        <use xlink:href="#sporing"></use>
      </svg>
      sporing
    </div>
  </div>
  <br/>
  <div class="hw-helpers-icon hw-helpers-icon--service-wide">
    <svg class="hw-icon">
        <use xlink:href="#budirute"></use>
      </svg>
      budirute
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service-wide">
    <svg class="hw-icon">
        <use xlink:href="#godstransport"></use>
      </svg>
      godstransport
    </div>
  </div>
  <div class="hw-helpers-icon hw-helpers-icon--service-wide">
    <svg class="hw-icon">
        <use xlink:href="#sjoetransport"></use>
      </svg>
      sjoetransport
    </div>
  </div>
```


### Logos

```html|span-6,noSource0
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#logo-bring"></use>
      </svg>
      logo-bring
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon" style="background-color: #888888">
        <use xlink:href="#logo-bring-white"></use>
      </svg>
      logo-bring-white
    </div>
  </div>
```


### Social Media Icons

```html|span-6,noSource0
<i class="hw-icon fa-fw fas fa-at"></i> fas fa-at<br/><br/>
<i class="hw-icon fa-fw fab fa-facebook-f"></i> fab fa-facebook-f<br/><br/>
<i class="hw-icon fa-fw fab fa-google-plus-g"></i> fab fa-google-plus-g<br/><br/>
<i class="hw-icon fa-fw fab fa-instagram"></i> fab fa-instagram<br/><br/>
<i class="hw-icon fa-fw fab fa-twitter"></i> fab fa-twitter<br/><br/>
<i class="hw-icon fa-fw fab fa-linkedin-in"></i> fab fa-linkedin-in<br/><br/>
```

### Examples
```html


<i class="hw-icon fa-2x fas fa-cloud-download"></i>
<svg class="hw-icon hw-icon--smaller">
  <use xlink:href="#envelope"></use>
</svg>
<svg class="hw-icon hw-icon--small">
  <use xlink:href="#envelope"></use>
</svg>
<svg class="hw-icon">
  <use xlink:href="#envelope"></use>
</svg>
<svg class="hw-icon hw-icon--primary">
  <use xlink:href="#envelope"></use>
</svg>
<svg class="hw-icon hw-icon--large">
  <use xlink:href="#envelope"></use>
</svg>
<svg class="hw-icon hw-icon--green">
  <use xlink:href="#check-circle"></use>
</svg>
<svg class="hw-icon hw-icon--red">
  <use xlink:href="#remove"></use>
</svg>
<svg class="hw-icon hw-icon--gray-darker">
  <use xlink:href="#remove"></use>
</svg>
<svg class="hw-icon hw-icon--gray-lighter">
  <use xlink:href="#remove"></use>
</svg>
```
