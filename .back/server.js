require("babel-register")({
	presets : ["react"]
});

var http		= require("http");
var fs			= require("fs");
var React		= require("react");
var ReactServer	= require("react-dom/server");
var UserList	= React.createFactory(require("./components/userList"));

function renderPage(htmlStr, userList){
	userList	= JSON.stringify(userList);

	return `
		<html>
			<head>
				<title>React Server Render</title>
			</head>
			<body>
				<div id="root">${htmlStr}</div>

				<script type="text/javascript">
					window.userList	= ${userList}
				</script>
				<script type="text/javascript" src="./bundle.js"></script>
			</body>
		</html>	
	`;
}

function getUsers(){
	return [
		{ id : 10000, name : "我是10000" },
		{ id : 10001, name : "我是10001" },
		{ id : 10002, name : "我是10002" },
		{ id : 10003, name : "我是10003" }
	];
}

http.createServer(function(req, res){
	if( req.url == "/" ){
		var users		= getUsers();
		var htmlContent	= ReactServer.renderToString(UserList({ userList : users }));

		res.end( renderPage( htmlContent, users ) );
	}else {
		fs.readFile("./bundle.js", function(error, resp){
			res.writeHead(200, {"Content-Type" : "text/javascript"});
			res.end( resp );
		});
	}
}).listen(3000);

console.info(" ==> 请在浏览器中访问 http://localhost:3000 查看项目");
