module.exports = function(config, src, dst) {

	config.module.rules.push({
		test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|wasm)$/,
		type: 'asset', // inline/resource
        generator: {
            filename: ({filename}) => { return filename.slice(src.length - 2); }
        }
	});
}