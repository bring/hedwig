# Getting started

Using Hedwig in your project is super simple. You only need to include the following..

PS: Check [releases](https://www.npmjs.com/package/@posten/hedwig) for latest version
[![npm version](https://badge.fury.io/js/%40posten%2Fhedwig.svg)](https://badge.fury.io/js/%40posten%2Fhedwig)

[![GitHub issues](https://img.shields.io/github/issues/bring/hedwig.svg?style=flat-square)](https://github.com/bring/hedwig/issues)

## Install

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


## Development and further documentation

All other documentation can be found on Github, including how to contribute.

👉👉 [View documentation on Github](https://github.com/bring/hedwig)

```hint
Functional icons are changing. **You must update your markup to continue using functional icons**
[Read about the update](/bring.html#Icon-functional)
```
