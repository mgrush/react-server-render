"use strict";

import React from "react";

export default class Books extends React.Component {
	static defaultProps = {
		booksList : []
	};

	render(){
		return (
			<div className="m-books">
			{this.props.booksList.map((book, index) => {
				return (
					<div className="book-item" key={index}>《{book}》</div>	
				);
			})}
			</div>		
		);
	}
};
