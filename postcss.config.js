const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  use: [
    'postcss-import',
    'postcss-preset-env',
    'postcss-nested',
    'postcss-extend',
    'cssnano',
  ],
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env'),
    require('postcss-nested'),
    require('postcss-extend'),
    postcssPresetEnv({ 
      stage: 0, 
    }),
    require('cssnano'),
  ],
};
