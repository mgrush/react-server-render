/**
 * 应用的主页面
 */

import "./index.less";
import React from "react";
import ReactDOM from "react-dom";
import Container from "../components/Container";

ReactDOM.render(
	<Container {...window.globProps} />,
	document.getElementById("root")
);
