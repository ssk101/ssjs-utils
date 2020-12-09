import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import pkg from './package.json'

export default [
  {
    input: './src/umd.js',
    output: {
      name: 'jsutils',
      file: pkg.browser,
      format: 'umd',
    },
  }, {
    input: './src/esm.js',
    output: {
      name: 'jsutils',
      file: pkg.module,
      format: 'esm',
    },
  }, {
    input: './src/cjs.js',
    output: {
      name: 'jsutils',
      file: pkg.main,
			format: 'cjs',
			exports: 'auto',
    },
    plugins: [
      nodeResolve(),
			commonjs(),
    ]
  }
]