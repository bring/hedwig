/**
 *
 * Docs build
 *
 * -> Iterate through all markdown files in the src folder
 * -> Move markedowns files to docs
 * -> Make Catalog.js config
 * -> Generate html file
 *
 */

var fs = require('fs');
var glob = require('glob');
var sortPages = require('./utilities/sortPages');

var bringDocsConfig = require('./config/docs-config-bring');
var postenDocsConfig = require('./config/docs-config-posten');

var docsHtml = require('./config/docs-html');
var bringHtml = require('./config/docs-html-bring');
var postenHtml = require('./config/docs-html-posten');

function build() {
  /**
   * Make directories if non existant
   */

  if (!fs.existsSync('./docs')) { fs.mkdirSync('./docs'); }
  if (!fs.existsSync('./docs/md')) { fs.mkdirSync('./docs/md'); }
  if (!fs.existsSync('./docs/md/shared')) { fs.mkdirSync('./docs/md/shared'); }
  if (!fs.existsSync('./docs/md/bring')) { fs.mkdirSync('./docs/md/bring'); }
  if (!fs.existsSync('./docs/md/posten')) { fs.mkdirSync('./docs/md/posten'); }

  /**
   * Copy html to docs
   */

  fs.writeFile('docs/index.html', docsHtml, function(err) {
    if(err) {
      return console.warn(err);
    }
  });

  fs.writeFile('docs/bring.html', bringHtml, function(err) {
    if(err) {
      return console.warn(err);
    }
  });

  fs.writeFile('docs/posten.html', postenHtml, function(err) {
    if(err) {
      return console.warn(err);
    }
  });


  /**
   * Make empty component and page config files
   */

  const sharedComponents = [];
  const sharedPageExamples = [];
  const sharedPages = [];
  const sharedUtilities = [];
  const sharedLayout = [];

  const bringComponents = [];
  const bringPageExamples = [];
  const bringPages = [];
  const bringUtilities = [];
  const bringLayout = [];

  const postenComponents = [];
  const postenPageExamples = [];
  const postenPages = [];
  const postenUtilities = [];
  const postenLayout = [];


  /**
   * Loop through all components/pages
   */

  glob('src/**/*.md', (err, files) => {
    /**
     * Return if any error
     */

    if (err) {
      console.warn('😞 There was an error compiling the docs')
      return;
    }

    /**
     * Iterate through all markdown files
     */

    files.forEach(file => {

      const filePath = file.split('/');
      const fileSection = filePath[1]; // Will be shared, posten or bring
      var components;
      var pageExamples;
      var pages;
      var layout;
      var utilities;

      switch (fileSection) {
          case 'posten':
              components = postenComponents;
              pageExamples = postenPageExamples;
              pages = postenPages;
              layout = postenLayout;
              utilities = postenUtilities;
              break;
          case 'bring':
              components = bringComponents;
              pageExamples = bringPageExamples;
              pages = bringPages;
              layout = bringLayout;
              utilities = bringUtilities;
              break;
          default:
          case 'shared':
              components = sharedComponents;
              pageExamples = sharedPageExamples;
              pages = sharedPages;
              layout = sharedLayout;
              utilities = sharedUtilities;
              break;
      }

      /**
       * Check if the page is a component
       var title = filename.split('.').shift();
      */

      if (file.indexOf('components') !== -1) {

        var filename = file.split('/').pop();
        var title = filename.split('.').shift();

        /**
         * Copy md files to docs
         */

        fs.createReadStream(file).pipe(
          fs.createWriteStream(`docs/md/${fileSection}/` + filename)
        );

        /**
         * Add components pages to the compoents array
         */
        components.push({
          title: title,
          path: title,
          src: `md/${fileSection}/${filename}`,
        });

        return;
      }

      /**
       * Check if the page is a page example
       var title = filename.split('.').shift();
      */

      if (file.indexOf('pages') !== -1) {

        var filename = file.split('/').pop();
        var title = filename.split('.').shift();

        /**
         * Copy md files to docs
         */

        fs.createReadStream(file).pipe(
          fs.createWriteStream(`docs/md/${fileSection}/` + filename)
        );

        /**
         * Add page to a pages array
         */
        pageExamples.push({
          title: title,
          path: title,
          src: `md/${fileSection}/${filename}`,
        });

        return;
      }

      /**
       * Check if the page is a layout helper
       var title = filename.split('.').shift();
      */

      if (file.indexOf('layout') !== -1) {

        var filename = file.split('/').pop();
        var title = filename.split('.').shift();

        /**
         * Copy md files to docs
         */

        fs.createReadStream(file).pipe(
          fs.createWriteStream(`docs/md/${fileSection}/` + filename)
        );

        /**
         * Add page to a pages array
         */
        layout.push({
          title: title,
          path: title,
          src: `md/${fileSection}/${filename}`,
        });

        return;
      }

      /**
       * Check if the page is an utility
       var title = filename.split('.').shift();
      */

      if (file.indexOf('utilities') !== -1) {

        var filename = file.split('/').pop();
        var title = filename.split('.').shift();

        /**
         * Copy md files to docs
         */

        fs.createReadStream(file).pipe(
          fs.createWriteStream(`docs/md/${fileSection}/` + filename)
        );

        /**
         * Add page to a pages array
         */
        utilities.push({
          title: title,
          path: title,
          src: `md/${fileSection}/${filename}`,
        });

        return;
      }

      /**
       * Process remaining pages
       */

      var filename = file.split('/').pop();
      var title = filename.split('.')[1];

      /**
       * Copy md files to docs
       */

      fs.createReadStream(file).pipe(
        fs.createWriteStream(`docs/md/${fileSection}/` + filename)
      );

      /**
      * Make config for pages in root directory
      */

      var path = title === 'Introduction' ? '/' : title;
      pages.push({
        path,
        src: `md/${fileSection}/${filename}`,
        title,
      });
    });


  /**
   * Generate Catalog config file and write it to docs
   */

  const bringMergedPages = [
    ...sharedPages,
    ...bringPages,
  ];
  bringMergedPages.push({
    title: 'Layout',
    pages: sortPages([
      ...sharedLayout,
      ...bringLayout,
    ]),
  });
  bringMergedPages.push({
    title: 'Components',
    pages: sortPages([
      ...sharedComponents,
      ...bringComponents,
    ]),
  });
  bringMergedPages.push({
    title: 'Pages',
    pages: sortPages([
      ...sharedPageExamples,
      ...bringPageExamples,
    ]),
  });
  bringMergedPages.push({
    title: 'Utilities',
    pages: sortPages([
      ...sharedUtilities,
      ...bringUtilities,
    ]),
  });

  const bringCatalogSettings = Object.assign(bringDocsConfig, { pages: sortPages(bringMergedPages) });
  const CatalogJSBring = `Catalog.render(${JSON.stringify(bringCatalogSettings)}, document.getElementById('catalog'))`;

  fs.writeFile('docs/docs-config-bring.js', CatalogJSBring, function(err) {
    if(err) {
      return console.warn(err);
    }
    console.log("✍️ The Bring docs was generated");
  });

  const postenMergedPages = [
    ...sharedPages,
    ...postenPages,
  ];
  postenMergedPages.push({
    title: 'Layout',
    pages: sortPages([
      ...sharedLayout,
      ...bringLayout,
    ]),
  });
  postenMergedPages.push({
    title: 'Components',
    pages: sortPages([
      ...sharedComponents,
      ...postenComponents,
    ]),
  });
  postenMergedPages.push({
    title: 'Pages',
    pages: sortPages([
      ...sharedPageExamples,
      ...postenPageExamples,
    ]),
  });
  postenMergedPages.push({
    title: 'Utilities',
    pages: sortPages([
      ...sharedUtilities,
      ...postenUtilities,
    ]),
  });

  const postenCatalogSettings = Object.assign(postenDocsConfig, { pages: sortPages(postenMergedPages) });
  const CatalogJSPosten = `Catalog.render(${JSON.stringify(postenCatalogSettings)}, document.getElementById('catalog'))`;

  fs.writeFile('docs/docs-config-posten.js', CatalogJSPosten, function(err) {
    if(err) {
      return console.warn(err);
    }
    console.log("✍️ The Posten docs was generated");
  });
})
}

build();

module.exports = build;
