# Hedwig

Hedwig is Brings Design System :tada:

## ⏩ tl;dr

```
clone this repo
yarn install
yarn run dev
open browser localhost:3000/docs 🚀
```

## Commands

`dev` 
`build` 
`serve` 

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
