/**
 * Rollup config
 * https://rollupjs.org/
 */

import jsx from 'rollup-plugin-jsx'


export default {
  input: 'src/hedwig-react.js',
  onwarn: (warning) => {
    // Skip certain warnings
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }
    // console.warn everything else
    console.warn(warning.message);
  },
  output: {
    file: 'dist/hedwig-react.js',
    format: 'es',
  },
  plugins: [
    jsx( {factory: 'React.createElement'} ),
  ],
};
