/**
 *
 * DOCS BUILD SCRIPT
 *
 * - Iterate thru all markdown files in the src folder
 * - Move markedowns files to docs
 * - Make Catalog.js config
 * - Generate html file
 *
 */

var fs = require('fs');
var glob = require('glob');

var docsConfig = require('./config/docs-config');
var docsHtml = require('./config/docs-html');
var addPagesToComponents = require('./utilities/addPagesToComponents');

function build() {
  /**
   * Make directory if it does not exists
   */

   var dir = './docs';
   if (!fs.existsSync(dir)) {
       fs.mkdirSync(dir);
   }

  var dir = './docs/md';
  if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
  }

  /**
   * Copy html to docs
   */

   fs.writeFile('docs/index.html', docsHtml, function(err) {
     if(err) {
       return console.warn(err);
     }
   });


  /**
   * Make page config
   */

   var pagesSetup = [];
   var components = [];

   glob('src/**/*.md', (err, files) => {
      /**
       * Return if any error
       */

      if (err) {
        console.warn('😞 There was an error compiling the docs')
        return;
      }

      /**
       * Iterate thru all markdown files
       */

      files.forEach(file => {

        /**
         * Check if the page is a component
         let title = filename.split('.').shift();
        */


        if (file.indexOf('components') !== -1) {

          let filename = file.split('/').pop();
          var title = filename.split('.').shift();

          /**
           * Copy md files to docs
           */

          fs.createReadStream(file).pipe(
              fs.createWriteStream('docs/md/' + filename)
          );

          /**
           * Add components pages to a compoent array to iterate over later
           */

           var componentPage = {
             title: 'Components',
             pages: [{
               title: title,
               path: title,
               src: `md/${filename}`,
             }],
           };

           components.push(componentPage);

        return;
      }

      /**
       * Make index page
       */

      var filename = file.split('/').pop();
      var title = filename.split('.')[1];

      /**
       * Copy md files to docs
       */

      fs.createReadStream(file).pipe(
          fs.createWriteStream('docs/md/' + filename)
      );

      /**
      * Make config for pages
      */

     var path = title === 'Introduction' ? '/' : title;

     const page = {
        path,
        src: `md/${filename}`,
        title,
     };

     pagesSetup = [
       ...pagesSetup,
       page,
     ];
   });

  /**
   * Make the components pages
   */

   const categoryPages = addPagesToComponents(components);

   pagesSetup = [
     ...pagesSetup,
     ...categoryPages,
   ];

  /**
   * Generate Catalog config file and write it to docs
   */

    const config = Object.assign(docsConfig, { pages: pagesSetup });
    const CatalogJS = `Catalog.render(${JSON.stringify(config)}, document.getElementById('catalog'))`;

    fs.writeFile('docs/docs-config.js', CatalogJS, function(err) {
      if(err) {
        return console.warn(err);
      }
      console.log("✍️ The docs was generated");
    });
  })
}

build();

module.exports = build;
