## For developers


Using Hedwig in your project is super simple. You only need to include the following..

PS: Check [releases](https://www.npmjs.com/package/@posten/hedwig) for latest version
[![npm version](https://badge.fury.io/js/%40posten%2Fhedwig.svg)](https://badge.fury.io/js/%40posten%2Fhedwig)


### Install

```hint
Important: To allow for the interactive UI components to gracefully degrade you should also add a `no-js` class to the `<html>` container of the site.
```

In the document `head`:

```
[Fonts]    https://cdn.jsdelivr.net/npm/@posten/hedwig@{version}/assets/fonts.css
[CSS]      https://cdn.jsdelivr.net/npm/@posten/hedwig@{version}/dist/{posten/bring}.css
```

Before closing `body` tag:

```
[JS]       https://cdn.jsdelivr.net/npm/@posten/hedwig@{version}/dist/main.js
[Icons]    https://cdn.jsdelivr.net/npm/@posten/hedwig@{version}/dist/icons.min.js
```

```hint
Always include id of `hw-icons` on the icons javacript file.
Like so: <script id="hw-icons" src="https://cdn.jsdelivr.net/npm/@posten/hedwig@{version}/dist/icons.min.js"></script>
```


### Development and further documentation

All other documentation can be found on Github, including how to contribute.

👉👉 [View documentation on Github](https://github.com/bring/hedwig)

```hint
Functional icons are changing. **You must update your markup to continue using functional icons**
[Read about the update](/bring.html#Icon-functional)
```







## For designers

Our design system is a collection of reusable components that can be assembled together to build any number of applications.

A unified design system is essential to building better and faster; better because a cohesive experience is more easily understood by our users, and faster because it gives us a common language to work with.

Contact Thomas Hammarstrøm for access to design assets and the Posten and Bring team.

[thomas.hammarstrom@posten.no](mailto:thomas.hammarstrom@posten.no)



### Gettings started

Open Figma

Make sure you are a member of the Posten and Bring team. This can be selected from the sidebar on the start page in Figma.

If you see ‘Drafts’ or ‘You’ in the top bar of a new document, click on it and select Posten and Bring as your team.

```image
plain: true
src: "{assets}/img/{postenbring}/1-team-A.png"
```

```image
plain: true
src: "{assets}/img/{postenbring}/1-team-B.png"
```

```image
plain: true
src: "{assets}/img/{postenbring}/1-team-C.png"
```


Posten and Bring each has their own library of styling and components. Add the one relevant to you by selecting the open book icon on the top right of the sidebar, under Assets. 

```image
plain: true
src: "{assets}/img/{postenbring}/2-assets-library.png"
```

Toggle the switch on for the one you’ll be working with of Posten or Bring.


```image
plain: true
src: "{assets}/img/{postenbring}/3-toggle-switch.png"
```

And then in preferences it can be handy to set your nudge amount to 8x, as it reflects the interval size our grid is based on.

```image
plain: true
src: "{assets}/img/{postenbring}/4-nudge.png"
```