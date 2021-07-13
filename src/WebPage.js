const fs = require('fs');

module.exports = class WebPage {

	constructor(src, {args = {}, template} = {}) {

		[this.src, this.args] = src.split('?');

		if( this.args ) {

			this.args = this.args.split('&').map( e => e.split('=') );
			this.args = Object.fromEntries(this.args);
			Object.assign(this.args, args );
		} else {
			this.args = args;
		}

		this.template = template;
	}


	static * listWebPages(dir, root_dir = dir) {
		
		if( root_dir.endsWith('/') )
			root_dir = root_dir.slice(0,-1);

		let ROOT = process.cwd();

		for(let file of fs.readdirSync(`${ROOT}/${dir}`) ) {

			let path = `${dir}/${file}`;

			if( file === 'index.html' ) {

				path = path.slice( 0, - '/index.html'.length );
				let name = path.slice( root_dir.length + 1 );

				yield [name, new WebPage(name)];

				continue;
			}
			if( fs.lstatSync(path).isDirectory() )
				yield * WebPage.listWebPages(path, root_dir);
		}
	}
};