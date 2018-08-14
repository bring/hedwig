## Icon

To use the icons set, add this script in your footer:
```code
https://cdn.jsdelivr.net/npm/@posten/hedwig@[version]/dist/icons.min.js
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


### Font Awesome icons

```html|span-6,noSource
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#at"></use>
      </svg>
      at
    </div>
  </div>
  <div class="hw-helpers-icon">
      <svg class="hw-icon">
        <use xlink:href="#award"></use>
      </svg>
      award
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#barcode-alt"></use>
      </svg>
      barcode-alt
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#bars"></use>
      </svg>
      bars
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#box"></use>
      </svg>
      box
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#calculator"></use>
      </svg>
      calculator
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#calendar"></use>
      </svg>
      calendar
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#camera"></use>
      </svg>
      camera
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#chart-line"></use>
      </svg>
      chart-line
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#check"></use>
      </svg>
      check
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#check-circle"></use>
      </svg>
      check-circle
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#chevron-down"></use>
      </svg>
      chevron-down
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#chevron-left"></use>
      </svg>
      chevron-left
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#chevron-right"></use>
      </svg>
      chevron-right
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#chevron-up"></use>
      </svg>
      chevron-up
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#clock"></use>
      </svg>
      clock
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#cloud-upload"></use>
      </svg>
      cloud-upload
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#cloud-download"></use>
      </svg>
      cloud-download
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#comments"></use>
      </svg>
      comments
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#credit-card"></use>
      </svg>
      credit-card
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#desktop"></use>
      </svg>
      desktop
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#dot-circle"></use>
      </svg>
      dot-circle
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#envelope"></use>
      </svg>
      envelope
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#envelope-open"></use>
      </svg>
      envelope-open
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#exclamation"></use>
      </svg>
      exclamation
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#eye"></use>
      </svg>
      eye
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#file"></use>
      </svg>
      file
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#flag"></use>
      </svg>
      flag
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#folder"></use>
      </svg>
      folder
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#globe"></use>
      </svg>
      globe
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#home"></use>
      </svg>
      home
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#info"></use>
      </svg>
      info
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#key"></use>
      </svg>
      key
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#lock"></use>
      </svg>
      lock
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#map-marker-alt"></use>
      </svg>
      map-marker-alt
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#minus"></use>
      </svg>
      minus
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#mobile"></use>
      </svg>
      mobile
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#paperclip"></use>
      </svg>
      paperclip
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#pencil"></use>
      </svg>
      pencil
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#phone"></use>
      </svg>
      phone
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#plus"></use>
      </svg>
      plus
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#question-circle"></use>
      </svg>
      question-circle
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#reply"></use>
      </svg>
      reply
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#search"></use>
      </svg>
      search
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#shopping-cart"></use>
      </svg>
      shopping-cart
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#star"></use>
      </svg>
      star
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#sync-alt"></use>
      </svg>
      sync-alt
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#times"></use>
      </svg>
      times
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#times-circle"></use>
      </svg>
      times-circle
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#trash-alt"></use>
      </svg>
      trash-alt
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#unlock"></use>
      </svg>
      unlock
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
      <use xlink:href="#user"></use>
    </svg>
    user
  </div>
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

### Icons

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
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#some-facebook"></use>
      </svg>
      some-facebook
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#some-twitter"></use>
      </svg>
      some-twitter
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#some-instagram"></use>
      </svg>
      some-instagram
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#some-email"></use>
      </svg>
      some-email
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#some-linkedin"></use>
      </svg>
      some-linkedin
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#some-google"></use>
      </svg>
      some-google
    </div>
  </div>
```

### Examples
```html
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
