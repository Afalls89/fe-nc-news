import React, { Component } from "react";
import Voter from "./Voter";
import DeleteComment from "./DeleteComment";

class CommentCard extends Component {
	state = {
		isRemoved: undefined
	};

	optimisticRemoveComment = isRemoved => {
		this.setState(currentState => {
			return { ...currentState, isRemoved };
		});
	};

	render() {
		if (this.state.isRemoved) return <p>comment removed</p>;

		return (
			<section className="commentCard">
				{this.state.isRemoved === false && (
					<p>Sorry you can not delete comment at this time</p>
				)}
				<p>{this.props.comment.body}</p>
				<Voter
					votes={this.props.comment.votes}
					id={this.props.comment.comment_id}
					type={"comments"}
				/>
				<DeleteComment
					comment_id={this.props.comment.comment_id}
					author={this.props.comment.author}
					user={this.props.user}
					optimisticRemoveComment={this.optimisticRemoveComment}
				/>
				<li>Author: {this.props.comment.author}</li>
				<li>date created: {this.props.comment.created_at}</li>
			</section>
		);
	}
}

export default CommentCard;
