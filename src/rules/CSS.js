/* const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); */
//TODO... fix path...
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {globSync} = require('glob');

const fs = require('fs');

module.exports = function (config, src, dst) {


    const entry_file = `${src}/index.css`;
	if( fs.existsSync(entry_file) )
    	(config.entry.main ??= []).push(entry_file);

    const files = globSync(src + '/pages/**/index.css');
    for(let file of files) {
        const entry_file = file.slice(src.length - 2);
		const entry_name = entry_file.slice(6, - "index.css".length);
        (config.entry[entry_name] ??= []).push( entry_file );
    }

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