const RULES = require('../rules.js');
const WebPage = require('../WebPage.js');

const DEFAULT_RULES = {
	js: RULES.js,
	css: RULES.css,
	html: RULES.html,
	images: RULES.images
};


function WebPageBuilder(dst, page, {rules = DEFAULT_RULES, template, args = {}, src_dir} = {}) {

	if( ! (page instanceof WebPage) )
		page = new WebPage( page, {template, args} );

	args = page.args;

	let src = page.src; //TODO... => extract args / template / other...
	if( src_dir )
		src = `${src_dir}/${src}`;

	let ROOT = process.cwd();

	let options = {
		ROOT,
		src,
		dst,
		args,
		optimize: false //TODO...
	}

	let config = {
		module: {
			rules: [],
		},
		entry: [],
		output: {
			path: ROOT,
			publicPath: ''
		},
		plugins: []
	};

	for(let rule in rules)
		rules[rule](config, options);

	return config;
}


WebPageBuilder.DEFAULT_RULES = DEFAULT_RULES;
module.exports = WebPageBuilder;