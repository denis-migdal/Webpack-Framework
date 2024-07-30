// Only works with npm run (why ???)
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(config, list) {

	let patterns = list.map( e => { return {from: e[0], to: e[1] } } );

	config.plugins.push(
		new CopyWebpackPlugin({patterns}),
	);
	
	return config;
}