import path from 'path'
import postcss from 'rollup-plugin-postcss';
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import resolve from '@rollup/plugin-node-resolve'
import image from '@rollup/plugin-image';
import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension'
import { emptyDir } from 'rollup-plugin-empty-dir'
import zip from 'rollup-plugin-zip'
import tailwindcss from 'tailwindcss';

const tailwindConfig = require('./tailwind.config.js');
const isProduction = process.env.NODE_ENV === 'production'

export default {
  input: 'src/manifest.json',
  output: {
    dir: 'dist',
    format: 'esm',
    chunkFileNames: path.join('chunks','[name]-[hash].js'),
  },
  plugins: [
    chromeExtension(),
    // Adds a Chrome extension reloader during watch mode
    simpleReloader(),
    // Replace environment variables
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    babel({
      // Do not transpile dependencies
      ignore: ['node_modules'],
      babelHelpers: 'bundled',
    }),
    resolve(),
    commonjs(),
    // Empties the output dir before a new build
    emptyDir(),
    postcss({
      config: {
        path: './postcss.config.js',
      },
      extensions: ['.css'],
      minimize: true,
      inject: {
        insertAt: 'top',
      },
      plugins: [tailwindcss(tailwindConfig)],
    }),
    image(),
    // Outputs a zip file in ./releases
    isProduction && zip({ dir: 'releases' }),
  ],
}
