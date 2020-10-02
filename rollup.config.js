import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import pkg from './package.json'

export default [
	{
		input: 'index.js',
		output: {
			name: 'ssjs-utils',
			file: pkg.browser,
			format: 'umd',
		},
		plugins: [
			nodeResolve(),
			commonjs(),
		]
	},
	{
		input: 'index.js',
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' },
		]
	}
]