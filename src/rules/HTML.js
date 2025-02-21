const fs = require('fs');
const {globSync} = require('glob');

module.exports = function(config, src) {

    const entry_file = `${src}/index.html`;
	if( fs.existsSync(entry_file) )
        (config.entry.main ??= []).push( entry_file );

    const files = globSync(src + '/pages/**/index.html');
    for(let file of files) {
        const entry_file = file.slice(src.length - 2);
		const entry_name = entry_file.slice(6, - "index.html".length);
        (config.entry[entry_name] ??= []).push( entry_file );
    }

	config.module.rules.push({
		test: /\.html$/,
		use: [
            {
                /*loader: "html-loader",*/
                loader: 'file-loader',
			    options: {
                    name: (filepath) => {

                        // h4ck due to symlink... dunno how to solve it...
                        if( filepath === "/home/demigda/Data/Recherche/Git/Cours/libs/TPEngine/src/index.html")
                            filepath = "/home/demigda/Data/Recherche/Git/Cours/src/pages/TPEngine/index.html";

                        const idx = filepath.indexOf(src.slice(1));
                        return filepath.slice(idx + src.length + 6 - 1);
                    }
                }
            }
        ],
	});

};