# Hedwig

Hedwig is Brings Design System.

📚 [Hedwig documentation is available here](https://hedwig-docs.herokuapp.com)

🚨 _[This repo might be going public](https://github.com/bring/hedwig/issues/6), so please consider this when contributing_ 🚨

### Using Hedwing in your project

Using Hedwig (beta) in your project is super simple. You only need to include this in your document:

```
[Fonts]    https://hedwig-cdn.s3.amazonaws.com/hedwig/assets/fonts/fonts.css
[CSS]      https://hedwig-cdn.s3.amazonaws.com/hedwig/main.css
[JS]       https://hedwig-cdn.s3.amazonaws.com/hedwig/main.js
[Icons]    https://hedwig-cdn.s3.amazonaws.com/hedwig/icons.js
```

**WTF!? I do not want to include external files in my project!**
So. We want it to be super simple to use Hedwing in your project. The Hedwig files are super lightweight (CSS 000 kb, JS 000 kb). This will not do much with your perfomance budget. And is much simpler than getting it into your gulp-wepback-whatever build pipeline. 👍

### ⏩ tl;dr

```
yarn install
yarn dev
```

## Documentation

### :neckbeard: Development

To develop on the styleguide, please follow our [guidelines]('').

```
clone this repo
yarn install             # to install dependencies
yarn s3:download         # to download assets from S3
add .env file            # get variables from Heroku
yarn dev
[open browser on port 3000]('http://localhost:3000/docs') 🚀
```

To keep assets up to date, run `yarn s3:download` do download assets from S3.

### 📚 Documentation

We use [Catalog](https://interactivethings.github.io/catalog/#/) from documentation. [Read the documentation for Catalog](https://interactivethings.github.io/catalog/#/write-documentation).

Docs are auto generated from the components markdown file. The filename will generate the menu name and URL. It is recommended to save the documentation files together with your components.

In development, the docs will live reload. It is recommended to always develop the components within the documentation.

The documentation is **atuo-deployed** to Heroku [https://hedwig-docs.herokuapp.com](https://hedwig-docs.herokuapp.com) when pushed to master.

### 🔨 Deployment

Production CSS, JavaScript and assets are hosted on a **CDN** using [Amazon S3](https://aws.amazon.com/s3/) and [Amazon Cloudfront](https://aws.amazon.com/cloudfront).

To upload the build folder to S3:
```
yarn s3:upload
```

To download the build folder from S3:
```
yarn s3:download
```
Remember to fill en the keys in `.env`.

### ⭐ Icons

We use [inline SVG's for icons](https://github.com/bring/hedwig/issues/9).

For the future it will probably be a good idea to have a own repository for icons, (i.e. `hedwig-icons`), where both source "master" files (AI, Sketch) and the SVG's can be stored.

It works like this:
* Place icons in the `build/assets/icons/` folder (for now)
* Run `yarn run svg` to generate SVG sprite
* Use icons like described in [the docs](https://hedwig-docs.herokuapp.com/#/Icon)

To update icons in production:
* Run `yarn run s3:upload`
* Include `https://hedwig-cdn.s3.amazonaws.com/hedwig/icons.js` in the footer of the document

### 🅰️ Fonts

We host our fonts on S3 ([http://hedwig-cdn.s3.amazonaws.com/assets/fonts/fonts.css](http://hedwig-cdn.s3.amazonaws.com/assets/fonts)). To update the fonts, update font files in `assets/fonts` on S3. We do it this way both to keep Hedwig clean and to avoid legal issues with publishing the fonts on our open-sourced repo.

## 🔧 Linting

Linting our project is import to keep a holistic code base. It is recommended to use a linting plugin for your editor while developing.

**JavaScript** uses [ESLint](eslint.org) with the [Airbnb config](https://github.com/airbnb/javascript).

**CSS** uses [Stylelint](https://github.com/stylelint/stylelint) with [the standard config](hhttps://github.com/stylelint/stylelint-config-standard).

### 🌐 Browser support

We support every browser 2 last version, pluss IE10. For IE9 we have partial support. We want it to work, but it won't look perfect.

```
Note:
Most components are tested in IE10, but IE9 is still yet to be tested.
```

### 📂 Structure

```
├─ base                          # All base style, only primitives
|    ├─ body          
|    ├─ forms         
|    └─ typogray
├─ components                    # Only classes, with BEM style
|    ├─ component-1          
|    |    ├─ component-1.css     # css
|    |    ├─ component-1.js      # js
|    |    └─ component-1.md      # documentation
|    ├─ component-2          
|    └─ component-3          
└─ helpers                       # Helpers classes, Takyions (?)
```

## 📦 Dependencies

* [PostCSS](https://github.com/postcss/postcss), [cssnano](https://github.com/ben-eb/cssnano), [postcss-cli](https://github.com/postcss/postcss-cli), [postcss-cssnext](https://github.com/MoOx/postcss-cssnext), [postcss-extend](https://github.com/travco/postcss-extend) - for transpiling CSS
* [sanitize.css](https://github.com/jonathantneal/sanitize.css) to make CSS sane (a lightweight version of Normalize)
* [stylelint](https://github.com/stylelint/stylelint), [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) - for litning CSS
* [RollUp](https://rollupjs.org/), [rollup-plugin-babel](https://github.com/rollup/rollup-plugin-babel), [rollup-plugin-commonjs](https://github.com/rollup/rollup-plugin-commonjs), [rollup-plugin-multi-entry](https://github.com/rollup/rollup-plugin-multi-entry), [rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve), [rollup-watch](https://github.com/rollup/rollup-watch)  - for transpiling JavaScript
* [Babel](https://babeljs.io/), [babel-preset-es2015](https://www.npmjs.com/package/babel-preset-es2015), [babel-cli](https://babeljs.io/docs/usage/cli/), [babel-jest](https://github.com/babel/babel-jest)  - to use ES6 syntax
* [Jest](https://facebook.github.io/jest/) - for JavaScript unit testing
* [Lodash](https://lodash.com/docs) - for JavaScript utility functions (rest is vanilla JavaScript)
* [eslint](http://eslint.org/), [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import), [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb), [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) - for linting JavaScript
* [express](https://expressjs.com/), [live-reload](https://www.npmjs.com/package/livereload), [node-watch](https://www.npmjs.com/package/node-watch) - for developemnt
* [s3](https://www.npmjs.com/package/s3), [aws-sdk](https://aws.amazon.com/sdk-for-node-js/), [dotenv](https://www.npmjs.com/package/dotenv) - for deployment
* [concurrently](https://www.npmjs.com/package/concurrently) - to run multiple scripts
* [Catalog](https://github.com/interactivethings/catalog) - for documentation
* [svgo](https://github.com/svg/svgo), [svg2sprite](https://github.com/mrmlnc/svg2sprite) - for SVG's
