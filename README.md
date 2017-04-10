# Hedwig

Hedwig is Brings Design System :tada:

📚 [Hedwig documentation is available here](https://hedwig-docs.herokuapp.com)

_[This repo might be going public](https://github.com/bring/hedwig/issues/6), so please consider this when contributing_

Using Hedwig (beta) in your project is super simple. You only need to include this in your document:

```
Fonts: http://hedwig-cdn.s3.amazonaws.com/hewdig/assets/fonts/fonts.css
CSS: http://hedwig-cdn.s3.amazonaws.com/hewdig/main.css
JS: http://hedwig-cdn.s3.amazonaws.com/hewdig/main.js
```

**WTF!? I do not want to include external files in my project!**
So. We want it to be super simple to use Hedwing in your project. The Hedwig files are super lightweight (CSS 000 kb, JS 000 kb). This will not do much with your perfomance budget. And is much simpler than getting it into your gulp-wepback-whatever build pipeline. 👍

## Development

To develop on the styleguide, please follow our [guidelines]('').

### ⏩ tl;dr

```
clone this repo
yarn install                # to install dependencies
yarn run s3:download         # to download assets from S3
add .env file               # get variables from Heroku
yarn run dev
[open browser on port 3000]('http://localhost:3000/docs') 🚀
```

### Documentation

We use [Catalog](https://interactivethings.github.io/catalog/#/) from documentation. Read [write documentation](https://interactivethings.github.io/catalog/#/write-documentation) about how to write documentation for the compoenents.

Docs are auto generated from the components markdown file. The filename will generate the menu name and URL. It is recommended to save the documentation files together with your components. In development the docs live reload. It is recommended to always develop within the documentation.

The documentation is atuo-deployed to Heroku [https://hedwig-docs.herokuapp.com](https://hedwig-docs.herokuapp.com), when pushed to master.

### Deploy to S3

Production CSS, JavaScript and assets are hosted on a CDN using [Amazon S3](https://aws.amazon.com/s3/) and [Amazon Cloudfront](https://aws.amazon.com/cloudfront).

To upload the build folder to S3:
```
yarn run s3:upload
```

To download the build folder from S3:
```
yarn run s3:download
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

* [Catalog](https://github.com/interactivethings/catalog) - for documentation
* [PostCSS](https://github.com/postcss/postcss) - for CSS
* [RollUp](https://rollupjs.org/) and [Babel](https://babeljs.io/) - for JavaScript
