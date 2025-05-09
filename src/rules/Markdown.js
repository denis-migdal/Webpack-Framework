// highlight
import { markedHighlight } from "marked-highlight";
import hljs from 'highlight.js';

export default function(config, src) {

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
                    options: {
                    },
                    extensions: [
                        {
                            name: "disable block",
                            renderer: {
                                paragraph(args) {
                                    if( args[0] === " " || args[0] === "<")
                                        return args + "\n";
                                    return false;
                                }
                            },
                            tokenizer: {
                                code(src) {
                                    return null;
                                },
                                url(src) {
                                    return null;
                                }
                            }
                        },
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