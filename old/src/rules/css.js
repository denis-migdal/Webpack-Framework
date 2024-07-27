const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const fs = require('fs');


module.exports = function (config, {ROOT, src, dst, optimize}) {

	if( fs.existsSync(`${ROOT}/${src}/index.css`) )
		config.entry.push(`${src}/index.css`);

	if( fs.existsSync(`${ROOT}/${src}/index.css.js`) )
		config.entry.push(`${src}/index.css.js`);

	//TODO
	let css_purge = {
		loader: '@americanexpress/purgecss-loader',
		options: {
			paths: '',
			whitelist: ['show']
		}
	};

	config.module.rules.push({
		test: /\.css$/,
		use: optimize ? [MiniCssExtractPlugin.loader, 'css-loader', css_purge] : [MiniCssExtractPlugin.loader, 'css-loader']
	});

	config.plugins.push(new MiniCssExtractPlugin({filename: `${dst}/index.css`}));

	if( optimize ) {

		throw 'TODO';

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
	}
}