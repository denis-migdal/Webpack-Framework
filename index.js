let RULES = require('./src/rules');
/*let BUILDERS = require('./src/builders.js');

let WebPage = require('./src/WebPage.js');*/

const skeleton = require('./src/skeleton');

async function buildConfigs() { //TODO: multiple named target.

    const rules = [RULES.CSS, RULES.Markdown]; //TODO: auto build.

    return skeleton("./src/", "./dist", rules);
}

module.exports = {
	buildConfigs
};