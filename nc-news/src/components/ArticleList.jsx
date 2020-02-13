import React, { Component } from "react";
import ArticleCard from "./ArticleCard";
import * as api from "../utils/api";
import Loader from "./Loader";
import ErrDisplayer from "./ErrDisplayer";

class ArticleList extends Component {
	state = {
		articles: [],
		isLoading: true,
		sortByOption: "",
		err: null
	};

	componentDidMount() {
		api
			.getArticles(undefined, this.props.topic_slug)
			.then(articles => {
				this.setState(currentState => {
					return { ...currentState, articles, isLoading: false };
				});
			})
			.catch(({ message, ...rest }) => {
				if (message) {
					console.log("HELLO");
					this.setState({ isLoading: false, err: message });
				} else {
					this.setState({ isLoading: false, err: rest.response.data.msg });
				}
			});
	}

	handleSubmit = submitEvent => {
		submitEvent.preventDefault();
		api
			.getArticles(this.state.sortByOption)
			.then(articles => {
				this.setState(currentState => {
					return { ...currentState, articles };
				});
			})
			.catch(
				({
					response: {
						data: { msg }
					}
				}) => {
					this.setState({ isLoading: false, err: msg });
				}
			);
	};

	handleChange = ({ target: { value, id } }) => {
		console.log(id);
		this.setState(currentState => {
			return { ...currentState, [id]: value };
		});
	};

	render() {
		if (this.state.err) return <ErrDisplayer err={this.state.err} />;
		if (this.state.isLoading) {
			return Loader();
		}
		return (
			<main className="content">
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
						</select>
						<button>Sort By</button>
					</form>
				</section>

				<section className="articles">
					{this.state.articles.map(article => {
						return (
							<ArticleCard
								key={article.article_id}
								article_id={article.article_id}
								author={article.author}
								title={article.title}
								votes={article.votes}
								comment_count={article.comment_count}
							/>
						);
					})}
				</section>
			</main>
		);
	}
}

export default ArticleList;
