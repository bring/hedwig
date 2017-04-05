# Hedwig

Hedwig is Brings Design System :tada:

To use Hedwig in your project is super simple.
You only need to include this in your document:
```
<link rel="stylesheet" href="http://some-cdn.com/hedwig/1.0.0/hedwig.min.css">
<script src="http://some-cdn.com/hedwig/1.0.0/hedwig.min.js"></script>
```

📚 And go to [Hedwig documentation](http://hedwig.surge.sh/#/) 📚

**WTF!? I do not want to include external files in my project!**
So. We want it to be super simple to use Hedwing in your project.

The Hedwig files are super lightweight
* CSS 000kb
* JS is 000kb

This will not do much with your perfomance budget. And is much simpler than getting it into the build pipeline.

## Development

The maintainers of the project is:

## ⏩ tl;dr

```
clone this repo
yarn install
yarn run dev
open browser localhost:3000/docs 🚀
```

## Docs

Documentation are available at [Hedwig documentation](http://hedwig.surge.sh/#/).

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
