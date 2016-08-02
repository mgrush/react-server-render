var React = require("react");

var userList = React.createClass({
	getDefaultProps : function(){
		return {
			userList	: [{
				id		: 0,
				name	: "默认用户"
			}]
		};
	},

	render : function(){
		return (
			<div className="m-user-list">
			{this.props.userList.map(function(user, index){
				return (
					<div className="user-item" key={index}>
						<div className="id">{user.id}</div>
						<div className="name">{user.name}</div>
					</div>
				);											  
			})}
			</div>	
		);		 
	}
});

module.exports = userList;
