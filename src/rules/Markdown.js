// highlight
const { markedHighlight } = require("marked-highlight");
const hljs = require('highlight.js');

const fs = require('fs');

const {globSync} = require('glob');

module.exports = function(config, src) {

    const entry_file = `${src}/index.md`;
	if( fs.existsSync(entry_file) )
        (config.entry.main ??= []).push( entry_file );

    const files = globSync(src + '/pages/**/index.md');
    for(let file of files) {
        const entry_file = file.slice(src.length - 2);
		const entry_name = entry_file.slice(0, - "index.md".length);
        (config.entry[entry_name] ??= []).push( entry_file );
    }


	config.module.rules.push({
		test: /\.md$/,
		use: [
            {
                /*loader: "html-loader",*/
                loader: 'file-loader',
			    options: {
                    name: (filepath) => {
                        const idx = filepath.indexOf(src.slice(1))
                        return filepath.slice(idx + src.length - 1, -2 ) + "html";
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