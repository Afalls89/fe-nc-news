import React, { Component } from "react";
import Voter from "./Voter";
import DeleteComment from "./DeleteComment";

class CommentCard extends Component {
	state = {
		comments: [],
		removeComment: undefined
	};

	componentDidMount() {
		this.setState({ comments: this.props.comments, removeComment: undefined });
	}

	componentDidUpdate(previousProps, previousState) {
		if (previousState.removeComment !== this.state.removeComment) {
			const updatedComments = this.state.comments.filter(comment => {
				if (comment.comment_id !== this.state.removeComment) {
					return comment;
				}
			});
			if (previousState.comments.length !== updatedComments.length) {
				this.setState(currentState => {
					return { ...currentState, comments: updatedComments };
				});
			}
		}
	}

	optimisticRemoveComment = removeComment => {
		this.setState(
			currentState => {
				return { ...currentState, removeComment };
			},
			() => {
				console.log(
					this.state.removeComment,
					"the id of the comment to be deleted"
				);
			}
		);
	};

	render() {
		return (
			<section>
				{this.state.comments.map(comment => {
					return (
						<section className="commentCard" key={comment.comment_id}>
							<p>{comment.body}</p>
							<Voter
								votes={comment.votes}
								id={comment.comment_id}
								type={"comments"}
							/>
							<DeleteComment
								comment_id={comment.comment_id}
								author={comment.author}
								user={this.props.user}
								optimisticRemoveComment={this.optimisticRemoveComment}
							/>
							<li>Author: {comment.author}</li>
							<li>date created: {comment.created_at}</li>
						</section>
					);
				})}
			</section>
		);
	}
}

export default CommentCard;
