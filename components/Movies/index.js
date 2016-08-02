if( typeof window !== "undefined" ){
	require("./index.less");
}

import React from "react";

export default class Movies extends React.Component {
	static defaultProps = {
		moviesList : []
	};

	render(){
		return (
			<div className="m-movies">
			{this.props.moviesList.map((movie, index) => {
				return (
					<div className="movie-item" key={index}>《{movie}》</div>	
				);											 
			})}
			</div>
		);
	}
};
