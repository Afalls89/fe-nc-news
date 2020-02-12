import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";

import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

class CommentList extends Component {
	state = {
		comments: [],
		isLoading: true,
		newComment: {}
	};

	componentDidMount() {
		api.getComments(this.props.article_id).then(comments => {
			this.setState({ comments, isLoading: false }, () => {});
		});
	}

	optimisticComment = newComment => {
		this.setState(
			currentState => {
				return {
					comments: [newComment, ...currentState.comments]
				};
			},
			() => {
				console.log(this.state);
			}
		);
	};
	render() {
		if (this.state.isLoading) {
			return Loader();
		}

		return (
			<section className="commentList">
				<CommentAdder
					user={this.props.user}
					article_id={this.props.article_id}
					optimisticComment={this.optimisticComment}
				/>
				<section className="comments">
					<CommentCard comments={this.state.comments} />
				</section>
			</section>
		);
	}
}

export default CommentList;
