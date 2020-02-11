import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import Voter from "./Voter";
import CommentList from "./CommentList";

class SingleArticle extends Component {
	state = {
		singleArticle: {},
		isLoading: true
	};

	componentDidMount() {
		api.getSingleArticle(this.props.article_id).then(singleArticle => {
			this.setState({ singleArticle, isLoading: false });
		});
	}

	render() {
		if (this.state.isLoading) {
			return Loader();
		}
		const {
			article_id,
			title,
			body,
			votes,
			topic,
			author,
			created_at,
			comment_count
		} = this.state.singleArticle;
		return (
			<main className="content">
				<section className="singleArticle">
					<h1>{title}</h1>
					<p>Topic : {topic}</p>
					<p>{body}</p>
					<li>Author :{author}</li>
					<li>Date created {created_at}</li>
					<li>Votes {votes}</li>
					<li>Comments {comment_count}</li>
				</section>
				<Voter votes={votes} id={article_id} type={"articles"} />
				<CommentList article_id={article_id} user={this.props.user} />
			</main>
		);
	}
}

export default SingleArticle;
