const fs = require('fs');

module.exports = function(config, {ROOT, src, dst, args, optimize}) {

	if(! fs.existsSync(`${ROOT}/${src}/index.ts`) )
		return;

	config.output.filename = `${dst}/index.js`;
	config.entry.push(`${src}/index.ts`);

	config.module.rules.push({
		test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
	});
}