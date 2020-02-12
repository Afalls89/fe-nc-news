import React, { Component } from "react";
import * as api from "../utils/api";

class CommentAdder extends Component {
	state = {
		commentToPost: ""
	};

	handleChange = ({ target: { value } }) => {
		this.setState(
			currentState => {
				return { ...currentState, commentToPost: value };
			},
			() => {
				console.log(this.state.commentToPost);
			}
		);
	};

	handleSubmit = submitEvent => {
		submitEvent.preventDefault();
		api
			.postComment(
				this.props.user,
				this.state.commentToPost,
				this.props.article_id
			)
			.then(newComment => {
				this.props.optimisticComment(newComment);
			});
	};

	render() {
		return (
			<section className="commentAdder">
				<form onSubmit={this.handleSubmit}>
					<label>
						<input
							className="commentAdderInput"
							onChange={this.handleChange}
							required
						></input>
					</label>
					<button>Submit comment</button>
				</form>
			</section>
		);
	}
}

export default CommentAdder;
