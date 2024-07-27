const path = require('path');
const fs = require('fs');


const {BUILDERS, WebPage} = require('webpack-framework');

// list your builds here.
module.exports = [
	// Build individual pages
	BUILDERS.WebPage('./dist/dev/1.JS', './src/1.JavaScript'),
	// -- OR --
	BUILDERS.WebPage('./dist/dev/3.TS', new WebPage('./src/3.TypeScript') ),
	// -- OR --
	BUILDERS.WebPage('./dist/dev/2.Args_JSON', new WebPage('./src/2.Args', {args: {text: 'obj'}}) ),
	// -- OR --
	BUILDERS.WebPage('./dist/dev/2.Args_URI', new WebPage('./src/2.Args?text=uri') ),

	// -- OR --

	// Build a website (a set of pages)
	...BUILDERS.WebSite('./dist/dev/', './src', {
		somedir: {
			// One by one
			'1b.JavaScript': new WebPage('1.JavaScript'),
			'3b.TypeScript': new WebPage('3.TypeScript'),
		},
		// -- OR --
		somedir2: {
			// From a directory
			... Object.fromEntries( WebPage.listWebPages('./src') )
		}
	})
];

// optimize (TODO)

// TODO: TEMPLATES options (HTML-LOADER)

// Documentation
	// Change rules / write rules
	// BUILDERS => write one
	// PREHTML features (templates/args)
	// ARGS
	// => + TEMPLATE + COMPONENTS + CHILD COMPONENTS
	// JS COMPONENT BUILDER

// TODO select what to build (?)