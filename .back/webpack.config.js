var ExtractTextPlugin	= require("extract-text-webpack-plugin");

module.exports	= {
	context	: __dirname + "/",
	entry	: {
		bundle	: "./index.js"		  
	},
	output	: {
		path	: __dirname + "/",
		filename	: "[name].js"
	},
	module	: {
		loaders	: [
			{
				test	: /\.js$/,
				loader	: "babel"
			},
			{
				test	: /\.less$/,
				loader	: ExtractTextPlugin.extract("style", "css!less")
			}
		]		  
	}
};
