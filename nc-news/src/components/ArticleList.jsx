import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import Loader from "./Loader";

class ArticleList extends Component {
	state = {
		articles: [],
		isLoading: true
	};

	componentDidMount() {
		console.log("COMP did MOUNT");
		api.getArticles().then(articles => {
			this.setState({ articles, isLoading: false }, () => {
				console.log(this.state.articles[0]);
			});
		});
	}

	render() {
		if (this.state.isLoading) {
			return Loader();
		}
		return (
			<>
				<section className="sortBy"></section>
				<section className="content">
					{this.state.articles.map(article => {
						return (
							<ArticleCard
								key={article.article_id}
								author={article.author}
								title={article.title}
								votes={article.votes}
								comment_count={article.comment_count}
							/>
						);
					})}
				</section>
			</>
		);
	}
}

export default ArticleList;
