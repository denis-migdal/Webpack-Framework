let RULES = require('./src/rules');
const fs  = require('fs');

/*let BUILDERS = require('./src/builders.js');

let WebPage = require('./src/WebPage.js');*/

const skeleton = require('./src/skeleton');
const rules = [RULES.Typescript, RULES.Images, RULES.CSS, RULES.HTML, RULES.Markdown]; //TODO: auto build.

function buildConfigs(src, dst) { //TODO: multiple named target.

    return (env, args) => {

        const version = args.mode === "production" ? 'prod' : 'dev';
        console.log('=== Building version:', version, "===");
        
        dst = dst.replaceAll("${version}", version);

        const assets = [];
        if( fs.existsSync(`${src}/assets`) )
            assets.push([`${src}/assets`, "./assets"]);

        if( fs.existsSync(`${src}/pages/404.html`) )
            assets.push([`${src}/pages/404.html`, "../404.html"]);

        const config = skeleton(src, dst, rules, {
            assets,
            mode: args.mode
        });

        //console.warn(config);
        //console.log(JSON.stringify(config, null, "\t"));

        return config;
    }
}

module.exports = {
	buildConfigs
};