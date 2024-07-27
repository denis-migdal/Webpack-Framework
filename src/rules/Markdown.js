//TODO: fix path...

// highlight
const { markedHighlight } = require("marked-highlight");
const hljs = require('highlight.js');

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
                    options: {},
                    extensions: [
                        markedHighlight({
                            langPrefix: 'hljs language-',
                            highlight(code, lang, info) {
                                const language = hljs.getLanguage(lang) ? lang : 'plaintext';
                                return hljs.highlight(code, { language }).value;
                            }
                        })
                    ]
                },
            },
        ],
	});

	config.entry.main.push( `${src}/index.md` );
};