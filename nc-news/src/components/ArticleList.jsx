import React, { Component } from "react";
import ArticleCard from "./ArticleCard";

class ArticleList extends Component {
	state = {
		articles: [],
		isLoading: true
	};

	componentDidMount() {}

	render() {
		return (
			<div className="content">
				<ArticleCard />
			</div>
		);
	}
}

export default ArticleList;
