import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";

class CommentAdder extends Component {
	state = {
		newComment: "",
		isLoading: true
	};

	handleChange = ({ target: { value } }) => {
		this.setState(
			currentState => {
				return { ...currentState, newComment: value };
			},
			() => {
				console.log(this.state.newComment);
			}
		);
	};

	handleSubmit = submitEvent => {
		submitEvent.preventDefault();
		api
			.postComment(
				this.props.user,
				this.state.newComment,
				this.props.article_id
			)
			.then(newComment => {
				this.setState({ newComment, isLoading: false });
			});
	};

	render() {
		// if (this.state.isLoading) {
		// 	return Loader();
		// }
		return (
			<section className="commentAdder">
				<form onSubmit={this.handleSubmit}>
					<label>
						<input onChange={this.handleChange}></input>
					</label>
					<button>Submit comment</button>
				</form>
			</section>
		);
	}
}

export default CommentAdder;
