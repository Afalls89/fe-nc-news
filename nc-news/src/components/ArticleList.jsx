import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import Loader from "./Loader";

class ArticleList extends Component {
	state = {
		articles: [],
		isLoading: true,
		sortByOption: ""
	};

	componentDidMount() {
		api.getArticles().then(articles => {
			this.setState({ articles, isLoading: false }, () => {
				console.log(this.state.articles);
			});
		});
	}

	handleSubmit = submitEvent => {
		submitEvent.preventDefault();
		console.log(this.state.sortByOption);
		api.getArticles(this.state.sortByOption).then(articles => {
			this.setState(currentState => {
				return { ...currentState, articles };
			});
		});
	};

	handleChange = ({ target: { value, id } }) => {
		console.log(id);
		this.setState(currentState => {
			return { ...currentState, [id]: value };
		});
	};

	render() {
		if (this.state.isLoading) {
			return Loader();
		}
		return (
			<>
				<section className="sortBy">
					<form onSubmit={this.handleSubmit}>
						<select
							id="sortByOption"
							onChange={this.handleChange}
							defaultValue=""
						>
							<option value="created_at">date created</option>
							<option value="comment_count">comment count</option>
							<option value="votes">votes</option>
							<option value="">all</option>
						</select>
						<button>submit block</button>
					</form>
				</section>
				<main className="content">
					<section className="content1">
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
				</main>
			</>
		);
	}
}

export default ArticleList;
