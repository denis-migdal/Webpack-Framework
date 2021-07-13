module.exports = function(config, {src, dst, optimize}) {

	config.module.rules.push({
		test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
		loader: 'url-loader'
	});

}