## For designers

Hedwig is Posten and Brings Front-End Style Guide.

Posten and Bring must be uniform and clear in what we communicate. Design and profile are an important part of our identity, and therefore we have created a tool to make it a little easier for us who work in Posten and Bring.

Our design system is a collection of reusable components that can be assembled together to build any number of applications. A unified design system is essential to building better and faster; better because a cohesive experience is more easily understood by our users, and faster because it gives us a common language to work with.


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
