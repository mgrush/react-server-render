require("./index.less");

var React		= require("react");
var ReactDOM	= require("react-dom");
var UserList	= require("./components/userList"); 

ReactDOM.render(
	<UserList userList={window.userList}/>,
	document.getElementById("root")
);
