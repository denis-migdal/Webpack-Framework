let RULES = require('./src/rules.js');
let BUILDERS = require('./src/builders.js');

let WebPage = require('./src/WebPage.js');

module.exports = {
	RULES,
	BUILDERS,
	WebPage,
	component_builder: require('./src/preproc/component_builder.js')
};