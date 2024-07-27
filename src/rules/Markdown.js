
module.exports = function(config, src) {

	config.module.rules.push({
		test: /\.md$/,
		use: [
            {
                /*loader: "html-loader",*/
                loader: 'file-loader',
			    options: { name: `[name].html` }
            },
            {
                loader: "markdown-loader",
                options: { // https://marked.js.org/using_advanced#options
                },
            },
        ],
	});

	config.entry.main.push( `${src}/index.md` );
};