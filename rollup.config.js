/**
 * Rollup config
 * https://rollupjs.org/
 */

import babel from 'rollup-plugin-babel';
import multiEntry from 'rollup-plugin-multi-entry';
import resolve from 'rollup-plugin-node-resolve';

export default {
  format: 'iife',
  entry: {
    include: ['src/**/*.js'],
    exclude: ['src/**/*.test.js'],
  },
  dest: 'build/main.js',
  plugins: [
    resolve(),
    multiEntry(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  external: ['rellax'],
};
