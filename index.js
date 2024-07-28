let RULES = require('./src/rules');
/*let BUILDERS = require('./src/builders.js');

let WebPage = require('./src/WebPage.js');*/

const skeleton = require('./src/skeleton');

async function buildConfigs() { //TODO: multiple named target.

    const rules = [RULES.Typescript, RULES.Images, RULES.CSS, RULES.HTML, RULES.Markdown]; //TODO: auto build.

    const config = skeleton("./src/", "./dist", rules);

    //console.log(JSON.stringify(config, null, "\t"));

    return config;
}

module.exports = {
	buildConfigs
};