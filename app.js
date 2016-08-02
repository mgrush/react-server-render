"use strict";

require("babel-register");

const path		= require("path");
const Koa		= require("koa");
const app		= new Koa();

const webpack	= require("webpack");
const webpackConfig			= require("./webpack.config.js");
const webpackDevMiddleware	= require("koa-webpack-dev-middleware");
const webpackHotMiddleware	= require("koa-webpack-hot-middleware"); 

const React		= require("react");
const ReactServer	= require("react-dom/server");
const Util			= require("./components/Util");
const Container		= React.createFactory(require("./components/Container"));

// 静态资源访问以及构建
if( process.env.NODE_ENV == "development" ){
	var compiler	= webpack( webpackConfig );

	app.use(webpackDevMiddleware(compiler, {
		noInfo		: true,
		publicPath	: webpackConfig.output.publicPath,
	}));

	app.use(webpackHotMiddleware( compiler ));
}

// 计算X-Response-Time
app.use(function *(next){
	let start	= new Date();

	yield next;

	let end		= new Date();

	this.set("X-Response-Time", (end - start) + "ms");
});

// 请求日志
app.use(function *(next){
	let start	= new Date();

	yield next;

	let end		= new Date();

	console.log("%s %s - %s", this.method, this.url, (end - start) + "ms");
});

// 获取整个页面的Props集合
function getProps(){
	return {
		booksList : ["Html5技术解析", "如何成为一个全栈工程师", "论产品经理的自我修养"],
		moviesList : ["一只快乐的小企鹅", "龙潭虎穴", "特工007"]
	};
}

// 返回响应内容
app.use(function *(){
	let props	= getProps();

	this.body	= Util.renderHtml({
		title	: "React Server Rendering",
		content	: ReactServer.renderToString(Container(props)),
		props	: props
	});
});

app.listen(3000);

console.log("==> 请打开 http://localhost:3000/ 访问项目");
