import { eslint } from 'rollup-plugin-eslint'
import commonjs from 'rollup-plugin-commonjs'
import minify from 'rollup-plugin-babel-minify'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/main.min.js',
    format: 'iife',
    sourcemap: 'inline'
  },
  watch: {
    exclude: ['node_modules/**']
  },
  plugins: [
    postcss({
      minimize: true
    }),
    eslint({}),
    commonjs(),
    (process.env.NODE_ENV === 'production' && minify({}))
  ]
}
