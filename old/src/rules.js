const fs = require('fs');

const dir = `${__dirname}/rules`;

const RULES = {};


for(let file of fs.readdirSync(dir) )
	RULES[file.split('.')[0]] = require(`${dir}/${file}`);


module.exports = RULES;