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
burger   | bars
marker   | map-marker-alt
remove   | times-circle


#### Changed icons
Looks different, but same name

- exclamation
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
        <use xlink:href="#award"></use>
      </svg>
      award
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
        <use xlink:href="#check-circle"></use>
      </svg>
      check-circle
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
        <use xlink:href="#map-marker-alt"></use>
      </svg>
      map-marker-alt
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
        <use xlink:href="#star"></use>
      </svg>
      star
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
        <use xlink:href="#lock-open"></use>
      </svg>
      lock-open
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
        <use xlink:href="#avatar"></use>
      </svg>
      avatar
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#caret-up"></use>
      </svg>
      caret-up
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#caret-down"></use>
      </svg>
      caret-down
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#caret-left"></use>
      </svg>
      caret-left
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#caret-right"></use>
      </svg>
      caret-right
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
        <use xlink:href="#attachment"></use>
      </svg>
      attachment
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
        <use xlink:href="#envelope"></use>
      </svg>
      envelope
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
        <use xlink:href="#clock"></use>
      </svg>
      clock
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
        <use xlink:href="#target"></use>
      </svg>
      target
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#bin"></use>
      </svg>
      bin
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
        <use xlink:href="#card"></use>
      </svg>
      card
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#barcode"></use>
      </svg>
      barcode
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
        <use xlink:href="#pencil"></use>
      </svg>
      pencil
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#refresh"></use>
      </svg>
      refresh
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
        <use xlink:href="#home"></use>
      </svg>
      home
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
        <use xlink:href="#chat"></use>
      </svg>
      chat
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
        <use xlink:href="#computer"></use>
      </svg>
      computer
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
        <use xlink:href="#document"></use>
      </svg>
      document
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
        <use xlink:href="#plus"></use>
      </svg>
      plus
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#at"></use>
      </svg>
      at
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#upload"></use>
      </svg>
      upload
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#download"></use>
      </svg>
      download
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#cart"></use>
      </svg>
      cart
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
        <use xlink:href="#cross"></use>
      </svg>
      cross
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#cross-thin"></use>
      </svg>
      cross-thin
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
        <use xlink:href="#chart"></use>
      </svg>
      chart
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
        <use xlink:href="#mobile"></use>
      </svg>
      mobile
    </div>
  </div>
  <div class="hw-helpers-icon">
    <svg class="hw-icon">
        <use xlink:href="#questionmark-circle"></use>
      </svg>
      questionmark-circle
    </div>
  </div>
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
