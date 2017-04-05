# Hedwig

Hedwig is Brings Design System :tada:

## ⏩ tl;dr

```
clone this repo
yarn install
yarn run dev
open browser localhost:3000/docs 🚀
```

## Docs

Documentation are avialabe at:[Hedwig documentation](http://hedwig.surge.sh/#/).

Docs are auto generated from the components markdown file. The filename will generate the menu name and URL. In development the docs live reload. It is recommended to always develop within the documentation.

## Deploy

Right now we are hosting our docs at [Surge](https://surge.sh/).

First install Surge as a global dependency.
```
npm install --global surge
```

To deploy the docs:
```
npm run build
surge
> select the build folder, and hedwig as url.
🚀
```

## 📂 Structure

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

* [Catalog](https://github.com/interactivethings/catalog) - for documentation
* [PostCSS](https://github.com/postcss/postcss) - for CSS
* [RollUp](https://rollupjs.org/) and [Babel](https://babeljs.io/) - for JavaScript
