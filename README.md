# Hedwig - Posten and Bring Design System.

[![GitHub release](https://img.shields.io/github/release/bring/hedwig.svg?style=flat-square)](https://github.com/bring/hedwig/releases) [![GitHub issues](https://img.shields.io/github/issues/bring/hedwig.svg?style=flat-square)](https://github.com/bring/hedwig/issues)

## tl;dr

```
npm install
npm run dev
```


## Documentation
[Hedwig documentation](https://hedwig-docs.herokuapp.com)

Documentation is currently being moved to [Zeroheight](https://zeroheight.com/). 
Util its fully moved the current documentation is [here](https://hedwig-docs.herokuapp.com)

We use [Catalog](https://interactivethings.github.io/catalog/#/) from documentation. [Read the documentation for Catalog](https://interactivethings.github.io/catalog/#/write-documentation).

Docs are auto generated from the components markdown file. The filename will generate the menu name and URL. It is recommended to save the documentation files together with your components.

## Disclaimers
We will not support changes and updates on older major releases of Hedwig. 
Users of the Hedwig repo are responsible for 
- Staying up to date on changes made - in code *and* guidelines. The best place to stay updated is in the #hedwig Slack channel
- Following the guidelines, which also include best practices and correct brand implementation.

## Contributing
[This repo is public](https://github.com/bring/hedwig/issues/6), so please consider this when contributing
  
### Found a bug?
- Create a new [issue](https://github.com/bring/hedwig/issues). 
- If you want to fix this issue yourself, do so and then follow the development giuidelines below.

### Need to change or add something new?
First of all: let the community know on the internal #hedwig slack channel what you need and how you plan to solve it. There might be other teams that also would benefit from your solution. Either way there will probably be one of two outcomes:

#### 1: Adding something new
If you are adding new functionality to Hediwg please follow the below development giuidelines below.

#### 2: Just do it locally
If the thing you're changing or adding is specific to your project, and not all sites using Hedwig, use a separate css file to add or override functionality using your own classes and components.
 
### Please note
The documentation is **auto-deployed** to Heroku [https://hedwig-docs.herokuapp.com](https://hedwig-docs.herokuapp.com) when pushed to master.

## Development guidelines

- It is recommended to always develop the components within the documentation. The docs will live reload. 
- All components should do one thing, and do that thing well.
- All CSS should be written to adhere to the BEM methology.
- All JS should be classless and use `data-attributes` to attach functionality.
- New functionality should be reviewed by at least one other person before going into Hedwig.

**To add a new feature:**
- Create a new feature branch (`git checkout -b branchname`)
- Develop the new feature (Template css and js files can be found in the `/templates` folder)
- Document and test the new feature
- Create a pull request and ask for a review

**To modify** an existing feature follow the same process, but also remember the versioning system. If there is a breaking change, or if this might impact existing sites using hedwig, update the version number. See below for details.

### Running Hedwig locally

```
clone this repo
npm install                 # to install dependencies
npm run dev                 # start local development server
```
[Open http://localhost:3000](http://localhost:3000) 🚀

**Tip:** In order to test changes on a locally running application which uses hedwig, replace the dependencies with the following dev server URLs (after running hedwig locally):
```
http://localhost:3001/posten.css
http://localhost:3001/main.js   
```

### Staging
The staging environment is setup in Heroku as a separate app. All the assets are copied to `docs` folder and referred from there in this branch.

Pushing a new change will automatically deploy the app in Heroku.

`setup_staging` task need to be run whenever the staging branch is reset. It copies the `scripts/Procfile` to the root folder. Commit and push the file in `staging` branch only.

`master` branch shouldn't have a Procfile.

### Versioning
Hedwig uses [semantic versioning](http://semver.org/) to make sure once a site starts using it, the CSS file won't suddenly change and break the site. The version number is located in `package.json`, and will be appended to the `.css` and `.js` files. Example - `bring-1.0.3.css`.

When a breaking change is added, a new major version is required.

### Hosting

Production CSS, JavaScript and assets are served through a **CDN** using [jsDelivr](https://www.jsdelivr.com/).

## Icons

### Functional icons
We use [FontAwesome](https://fontawesome.com/icons?d=gallery&p=2&s=regular,solid) for functional icons. Not all FontAweseome icons are available in Hedwig You will find available icons [here](https://github.com/bring/hedwig/tree/master/src/shared/components/icon-functional).
If you need to use an icon from FontAwesome that is not allready added in Hedwig you need to add it and open a pull request.

#### Font Awesome Icons works like this
- You need to add an environment variable with your authToken from Font Awesome. For Posten and Bring developers, contact Hedwig contributors. Otherwise, [you can get a licence](https://fontawesome.com/pricing).
- Use functional icons like described in [the docs](https://hedwig-docs.herokuapp.com/bring.html#/Icon-functional)

To add the authToken to your environment, in ~/.bashrc add the following line:
```
export NPM_TOKEN=[authToken]
```
The token needs to be replaced by a real token.

### Service icons
Hedwig use SVG sprite for special icons and logos. These icons must only be used in conjunction with its service or service name.

#### SVG Sprite Icons works like this:
- Place icons in the `assets/icons/` folder 
- Run `npm run svg` to generate SVG sprite. `npm run build` or `npm run dev` will both also produce the SVG sprite
- Use icons like described in [the docs](https://hedwig-docs.herokuapp.com/bring.html#/Icon)

We use [inline SVG's for icons](https://github.com/bring/hedwig/issues/9).

### Linting

Linting our project is import to keep a holistic code base. It is recommended to use a linting plugin for your editor while developing.

**JavaScript** uses [ESLint](eslint.org) with the [Airbnb config](https://github.com/airbnb/javascript).

**CSS** uses [Stylelint](https://github.com/stylelint/stylelint) with [the standard config](hhttps://github.com/stylelint/stylelint-config-standard).

## Build scripts
The `/scripts` folder contains a set of custom scripts that helps compile the docs.

List of npm scripts:
- `dev`: Starts the watcher and starts the node server (in development mode)

## FAQ
  Q: I have a question! Who do i ask?
  A: Use the Hedwig slack channel!

## Maintainers
The Hedwig Team is resposible for maintaining the Hedwig repo. 
Contact us with any questions or feedback either in the #hedwig Slack channel or hedwig@posten.no

## Dependencies 

development helpers:

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


included in bundle:
* [Zenscroll](https://github.com/zengabor/zenscroll) - Tiny smooth-scroll helper

## ⚖️ Licenses
* Source code is licensed under [BSD 2-Clause](LICENSE.txt)
* All icons and images are licensed under [Creative Commons Attribution-NoDerivatives 4.0](LICENSE-icons-images.txt)
