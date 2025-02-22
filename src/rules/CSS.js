/* const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); */
//TODO... fix path...
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function (config, src, dst) {

	/*
	let css_purge = {
		loader: '@americanexpress/purgecss-loader',
		options: {
			paths: '',
			whitelist: ['show']
		}
	};*/

    // optimize ? [MiniCssExtractPlugin.loader, 'css-loader', css_purge] : 
	config.module.rules.push({
		test: /\.css$/,
		use: [
            MiniCssExtractPlugin.loader,
            'css-loader'
        ]
	});

	config.plugins.push(new MiniCssExtractPlugin({
		filename: ({chunk}) => { return `${chunk.name}/index.css` }
	}) );

	/*if( optimize ) {

		new CssMinimizerPlugin({
			minimizerOptions: {
				preset: [
					'default',
					{
						discardComments: { removeAll: true }
					}
				]
			}
		});
	}*/
}