/*let RULES = require('./src/rules.js');
let BUILDERS = require('./src/builders.js');

let WebPage = require('./src/WebPage.js');*/

const skeleton = require('./src/skeleton');

function buildConfigs() {
    return skeleton("./src/", "./dst"); //TODO: named target.
}

module.exports = {
	buildConfigs
};