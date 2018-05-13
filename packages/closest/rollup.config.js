import babel from 'rollup-plugin-babel'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  plugins: [
    babel({
      exclude: 'node_modules/**/*',
    }),
    nodeResolve({
      extensions: [ '.mjs', '.js' ],
      jsnext: true,
      main: true,
      module: true,
      browser: true,
    }),
  ],
  input: 'src/index.mjs',
  output: {
    file: 'dist/closest.js',
    format: 'umd',
    name: '$closest',
    sourcemap: true,
  },
}
