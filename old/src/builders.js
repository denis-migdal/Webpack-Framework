const fs = require('fs');

const dir = `${__dirname}/builders`;

const BUILDERS = {};


for(let file of fs.readdirSync(dir) )
	BUILDERS[file.split('.')[0]] = require(`${dir}/${file}`);


module.exports = BUILDERS;