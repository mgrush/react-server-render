"use stricts";

var path		= require("path");
var glob		= require("glob");
var webpack		= require("webpack");

var entryList	= {};
var srcPath		= path.join(__dirname, "./");

glob.sync( path.join(srcPath, "{common,pages}/*.js") ).forEach(function(filePath){
	var chunkName	= path.relative(srcPath, filePath).slice(0, -3);

	entryList[ chunkName ]	= [ "./" + chunkName ].concat([
		"webpack-hot-middleware/client?reload=true"
	]);
});

module.exports	= {
	devtool	: "cheap-module-source-map",
	context	: srcPath,
	entry	: entryList,
	output	: {
		publicPath	: "/",
		filename	: "[name].js",
		path		: path.join(__dirname, "./build")
	},
	resolve	: {
		root : srcPath,
		modulesDirectories : [
			"components",
			"node_modules"
		]
	},
	module : {
		loaders : [
			{ 
				test : /\.js$/,
				loader : "babel",
				exclude : /node_modules/
			},
			{
				test : /\.less$/,
				loader : "style!css!less"
			}
		]	 
	},
	plugins	: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};
