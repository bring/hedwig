# Hedwig

Hedwig is Brings Design System :tada:
📚 [Hedwig documentation is available here](https://hedwig-docs.herokuapp.com)

_[This repo might be going public](https://github.com/bring/hedwig/issues/6), so please consider this when contributing_

To use Hedwig in your project is super simple.
You only need to include this in your document:

```
Fonts: http://hedwig-cdn.s3.amazonaws.com/dist/assets/fonts/fonts.css
CSS: http://hedwig-cdn.s3.amazonaws.com/dist/main.css
JS: http://hedwig-cdn.s3.amazonaws.com/dist/main.js
```

**WTF!? I do not want to include external files in my project!**
So. We want it to be super simple to use Hedwing in your project. The Hedwig files are super lightweight (CSS 000 kb, JS 000 kb). This will not do much with your perfomance budget. And is much simpler than getting it into your gulp-wepback-whatever build pipeline. 👍

## Development

To develop on the project, please follow our [guidelines]('').

### ⏩ tl;dr

```
clone this repo
yarn install
yarn run dev
open browser localhost:3000/docs 🚀
```

### Docs

Docs are auto generated from the components markdown file. The filename will generate the menu name and URL. In development the docs live reload. It is recommended to always develop within the documentation.

### Deploy

The documentation is atuo-deployed to Heroku [https://hedwig-docs.herokuapp.com](https://hedwig-docs.herokuapp.com), when pushed to master.

Production CSS, JavaScript and assets are hosted on a CDN using [Amazon S3](https://aws.amazon.com/s3/) and [Amazon Cloudfront](https://aws.amazon.com/cloudfront).

To sync your application to S3:
```
npm run sync:s3
```

This will both synchronize your build folder and your assets folder.


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

* [Catalog](https://github.com/interactivethings/catalog) - for documentation
* [PostCSS](https://github.com/postcss/postcss) - for CSS
* [RollUp](https://rollupjs.org/) and [Babel](https://babeljs.io/) - for JavaScript
