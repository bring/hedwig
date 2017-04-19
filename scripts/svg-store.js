/**
 * Generate a SVG sprite
 */

var fs = require('fs');
var glob = require('glob');
var svgstore = require('svgstore');

/**
 * config
 */

var src = './build/assets/icons/**/*.svg';
var dist = './build/assets/svg-sprite.svg';

console.log('🐝 Generating SVG sprite...');

/**
 * Go thru all SVG
 */

glob(src, (err, files) => {
  var sprites = svgstore();

  /**
   * Iterate thru files
   */

  files.forEach((file, index) => {
    /**
     * Generate name for filename and add to sprite
     */

    var name = file.split('/').pop().split('.').shift();

    console.log(`📎 ${name}`);

    sprites.add(name, fs.readFileSync(file, 'utf8'));
  });

  /**
   * Write to file
   */

  fs.writeFileSync(dist, sprites);

  console.log(`🐘 SVG sprite at '${dist}'`)
});
