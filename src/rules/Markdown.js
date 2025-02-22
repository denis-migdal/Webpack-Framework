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
			    options: {
                    name: (filepath) => {
                        const idx = filepath.indexOf(src.slice(1));
                        return filepath.slice(idx + src.length + 6 - 1, -2 ) + "html";
                    }
                }
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
};