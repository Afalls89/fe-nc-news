import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";

class CommentAdder extends Component {
	state = {
		newComment: "",
		isLoading: true
	};

	handleChange = () => {};

	render() {
		if (this.state.isLoading) {
			return Loader();
		}
		return (
			<section className="commentAdder">
				<form>
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
