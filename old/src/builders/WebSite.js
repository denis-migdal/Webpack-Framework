const {DEFAULT_RULES} = require('../rules.js');
const WebPageConfig = require('./WebPage.js');
const WebPage = require('../WebPage.js');

function * getPages(pages, prefix = '') {

	for(let name in pages) {

		if( pages[name] instanceof WebPage)
			yield { dst: `${prefix}${name}`, page: pages[name] };
		else
			yield * getPages(pages[name], `${prefix}${name}/`)
	}
}

//TODO args + templates !
module.exports = function(dst_dir, src_dir, pages, {rules, templates = []} = {}) {

	let configs = [];

	for(let {dst, page} of getPages(pages) )
		configs.push( WebPageConfig(`${dst_dir}/${dst}`, page, {src_dir: src_dir, rules}) );

	return configs;
}