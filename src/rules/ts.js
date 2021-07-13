const fs = require('fs');

module.exports = function(config, {ROOT, src, dst, args, optimize}) {

	console.log('!');

	if(! fs.existsSync(`${ROOT}/${src}/index.ts`) )
		return;

	console.log('inside');

	config.output.filename = `${dst}/index.js`;
	config.entry.push(`${src}/index.ts`);

	config.rules.push({
		test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
	});
}