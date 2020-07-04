import json from '@rollup/plugin-json'

export default [{
	input: 'src/up.js',
	output: {
		dir: './dist',
		format: 'es',
		sourcemap: false
	},
  plugins: [
    json()
  ]
}]