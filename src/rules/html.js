const fs = require('fs');


module.exports = function(config, {ROOT, src, dst, args, optimize}) {

	if( fs.existsSync(`${ROOT}/${src}/index.html`) )
		config.entry.push(`${src}/index.html?${JSON.stringify(args)}`);


	if(optimize)
		throw 'TODO';

	let prehthml = 'prehtml-loader/src/loader.js';

	config.module.rules.push({
		test: /\.html$/,
		use: optimize ? ['html-minifier-loader', prehthml] : [prehthml],
	});

	config.module.rules.push({
		enforce: 'post',
		test: /\.html$/,
		use: {
			loader: 'file-loader',
			options: { name: `${dst}/index.html` }
		}
	});
}