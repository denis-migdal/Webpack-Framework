const fs = require('fs');

module.exports = function(config, {ROOT, src, dst, args, optimize}) {

	if(! fs.existsSync(`${ROOT}/${src}/index.js`) )
		return;

	config.output.filename = `${dst}/index.js`;
	config.entry.push(`${src}/index.js`);
}