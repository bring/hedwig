/**
 * Rollup config
 * https://rollupjs.org/
 */

import babel from 'rollup-plugin-babel';
import multiEntry from 'rollup-plugin-multi-entry';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import jsx from 'rollup-plugin-jsx'


export default {
  input: {
    include: ['src/shared/utilities/js/polyfills/*.js', 'src/**/*.react.js'],
    exclude: ['src/**/*.test.react.js'],
  },
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
    format: 'cjs',
  },
  plugins: [
    resolve(),
    multiEntry(),
    jsx( {factory: 'React.createElement'} ),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    uglify(),
  ],
};
