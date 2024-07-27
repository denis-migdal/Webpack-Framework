const RULES = require('../rules.js');

const DEFAULT_RULES = {
	ts: RULES.ts,
	js: RULES.js,
	/*css: RULES.css,
	html: RULES.html,
	images: RULES.images*/
};


function NodeBuilder(dst, src, {rules = DEFAULT_RULES, args = {} } = {}) {

	let ROOT = process.cwd();

	let options = {
		ROOT,
		src,
		dst,
		args,
		optimize: false //TODO...
	}

	let config = {
		module: {
			rules: [],
		},
		entry: [],
		output: {
			path: ROOT,
			publicPath: ''
		},
		plugins: [],
		target: 'node'
	};

	for(let rule in rules)
		rules[rule](config, options);

	return config;
}

/*

	let is_production = mode === 'production';
	
	let build_type = is_production ? 'prod' : 'dev';

	let builds = {

		entry: {
			cli: './src/cli.js',
			server: './src/server.js',
			serverThread: './src/serverThread.js',
		},
		output: {
			filename: '[name].bundle.js',
			path: `${__dirname}/dist/${build_type}/`,
		},
		plugins: [
			new webpack.DefinePlugin({
				IS_PRODUCTION: JSON.stringify(is_production),
			}),
			new CopyPlugin({
				patterns: [{from: '**', to: 'kdbs', context: 'libs/KeyDB/kdbs' }]
			})
		],
	};

	return builds;*/

NodeBuilder.DEFAULT_RULES = DEFAULT_RULES;
module.exports = NodeBuilder;
