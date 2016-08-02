/**
 * 主页面模块
 */
"use strict";

if( typeof window != "undefined" ){
	require("./index.less");
}

import React from "react";
import Books from "../Books";
import Movies from "../Movies";

export default class Container extends React.Component {
	static defaultProps = {
		booksList : [],
		moviesList : []
	};

	constructor(props){
		super(props);

		this.state	= {
			activeItem	: "Books"
		};
	}

	render(){
		return (
			<div className="m-container">
				<div className="nav">欢迎来到图书阅览室 & 影厅</div>
				<ul className="aside">
				{this.state.activeItem == "Books" ? [
					<li key="books" className="active">图书列表</li>,
					<li key="movies" onClick={this.onMoviesItemClick.bind(this)}>影视世界</li>
				] : [
					<li key="books" onClick={this.onBooksItemClick.bind(this)}>图书列表</li>,
					<li key="movies" className="active">影视世界</li>
				]}
				</ul>
				<div className="article">
				{this.state.activeItem == "Books" ? (
					<Books booksList={this.props.booksList} />
				) : (
					<Movies moviesList={this.props.moviesList} />
				)}
				</div>
			</div>		
		);
	}

	onMoviesItemClick(){
		this.setState({ activeItem : "Movies" });
	}

	onBooksItemClick(){
		this.setState({ activeItem : "Books" });
	}
}
