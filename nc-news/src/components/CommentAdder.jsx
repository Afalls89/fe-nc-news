import React, { Component } from "react";
import * as api from "../utils/api";
import { UserContext } from "../context/UserContext";

class CommentAdder extends Component {
	state = {
		commentToPost: "",
		err: false
	};

	static contextType = UserContext;

	handleChange = ({ target: { value } }) => {
		console.log(this.context);
		this.setState(currentState => {
			return { ...currentState, commentToPost: value };
		});
	};

	handleSubmit = submitEvent => {
		submitEvent.preventDefault();
		this.setState(currentState => {
			return { ...currentState, commentToPost: "" };
		});
		api
			.postComment(
				this.context.user,
				this.state.commentToPost,
				this.props.article_id
			)
			.then(newComment => {
				this.props.optimisticComment(newComment);
			})
			.catch(() => {
				this.setState(currentState => {
					return { ...currentState, err: true };
				});
			});
	};

	render() {
		return (
			<section className="commentAdder">
				{this.state.err && <p>Sorry you can not comment at this time</p>}
				<form onSubmit={this.handleSubmit}>
					<label>
						<input
							className="commentAdderInput"
							onChange={this.handleChange}
							required
							value={this.state.commentToPost}
						></input>
					</label>
					<button>Submit comment</button>
				</form>
			</section>
		);
	}
}

export default CommentAdder;
