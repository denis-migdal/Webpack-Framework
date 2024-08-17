const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');

const fs = require('fs');
const {globSync} = require('glob');

module.exports = function(config, src, {workers} = {}) {

    const entry_file = `${src}/index.ts`;
	if( fs.existsSync(entry_file) )
		(config.entry.main ??= []).push( entry_file );

	const files = globSync(src + '/pages/**/index.ts');
	
    for(let file of files) {
        const entry_file = file.slice(src.length - 2);
		const entry_name = entry_file.slice(0, - "index.ts".length);
		(config.entry[entry_name] ??= []).push( entry_file );
    }

	config.module.rules.push({
		test: /\.tsx?$/,
		use: [{
				loader: 'swc-loader',
				//loader: 'ts-loader',
				options: {
					jsc: {
						"target": "esnext"
					}
					//transpileOnly: true, // Build time : 20sec to 10sec...
					//experimentalWatchApi: true,
				},
			},],
		exclude: [ /node_modules/ ]
	});

	config.plugins.push(
		new ForkTsCheckerWebpackPlugin({
			typescript: {
				build: true,
				mode: 'write-references',
			}
		}),
		new ForkTsCheckerNotifierWebpackPlugin({ excludeWarnings: true }),
	);

	config.resolve = {
		extensions: ['.tsx', '.ts', '.js'],
		modules: [
			src,
			`./libs/`,
			'./node_modules',
		],
		alias: {},
		fallback: {
            "fs": false,
            "path": false,
            "crypto": false
        },
	}

	//const WORKER_PREFIX = 'TS.Worker.';

	/*for(let worker_name in workers) {
		config.entry[`${WORKER_PREFIX}${worker_name}`] = workers[worker_name][0];
	}*/

	config.output.library = {
		type: "module" // TODO
	}
	config.experiments = {
		outputModule: true
	}

	config.output.filename = ({runtime}) => {
		
		if( runtime === "main" )
			return `index.js`;

		return `${runtime}/index.js`;

		//let worker_name = runtime.slice(WORKER_PREFIX.length);
		//return `${workers[worker_name][1]}/index.js`;
	}
};