"use strict";

module.exports	= {
	renderHtml	: function(options){
		return `
			<html>
				<head>
					<title>${options.title || ""}</title>
				</head>
				<body>
					<div id="root">${options.content || ""}</div>

					<script type="text/javascript">
						window.globProps = ${JSON.stringify(options.props)}
					</script>
					<script type="text/javascript" src="/pages/index.js"></script>
				</body>
			</html>
		`;
	}
};
