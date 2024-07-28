const fs = require('fs');

module.exports = function(config, src) {

	config.module.rules.push({
		test: /\.html$/,
		use: [
            {
                /*loader: "html-loader",*/
                loader: 'file-loader',
			    options: { name: `[name].html` }
            }
        ],
	});

    
    const entry_file = `${src}/index.html`;
	if( fs.existsSync(entry_file) )
        config.entry.main.push( entry_file );
};