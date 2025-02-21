const copyAssets = require('./copyAssets');
//const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
//const genCoreModuleList  = require('./genCoreModuleList');
//const genCoreRuntimeList = require('./genCoreRuntimeList');

module.exports = function (src, dst, rules = [], options = {}) {

	let {assets, mode} = options;

	let version = mode === "production" ? 'prod' : 'dev';
	console.log('=== Building version:', version, "===");

	dst = `${dst}/${version}`;

	let ROOT = process.cwd();
	options.ROOT = ROOT;

	let config = {
		module: {
			rules: [],
		},
		entry: {},
		output: {
			path: `${ROOT}/${dst}`,
			publicPath: '',
			clean: {
				//dry: true
			},
			compareBeforeEmit: true
		},
		target: "web",
        plugins: [/*{
            apply: (compiler) => {
                compiler.hooks.compile.tap("MyPlugin_compile", () => {
                	genCoreModuleList();
					genCoreRuntimeList();
                });
            },
        }*/],
		//watch: WATCH, no needs (--watch / --no-watch)
		watchOptions: {
			ignored: [	'**/node_modules',
						'**/.git'
                        /*
						`${__dirname}/../build`,
						`${__dirname}/../dist`,
						`${__dirname}/../doc`,
						`${__dirname}/../.gitignore`,
						`${__dirname}/../.gitmodules`,
						`${__dirname}/../package-lock.json`,
						`${__dirname}/../package.json`,
						`${__dirname}/../README.md`,
						`${__dirname}/../tsconfig.json`,
						`${__dirname}/../webpack.config.js`*/]
		},
		devtool: "source-map", //"source-map"
		stats: {
 			"errorDetails": true
		}
	};

	for(let rule of rules)
		rule(config, src, dst, options);

	if(assets)
		copyAssets(config, assets);

	return config;
	//return smp.wrap( config );
}