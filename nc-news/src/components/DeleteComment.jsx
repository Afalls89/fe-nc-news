import React, { Component } from "react";
import * as api from "../utils/api";

class DeleteComment extends Component {
	state = {
		err: false
	};

	handleClick = event => {
		api.deleteComment(this.props.comment_id).catch(() => {
			this.setState({ err: true });
			this.props.optimisticRemoveComment(this.props.comment_id, this.state.err);
		});

		this.props.optimisticRemoveComment(this.props.comment_id, this.state.err);
	};

	render() {
		return (
			<section>
				{this.state.err && <p>Sorry you can not delete comment at this time</p>}
				<button
					disabled={this.props.author !== this.props.user}
					onClick={this.handleClick}
				>
					Delete comment
				</button>
			</section>
		);
	}
}

export default DeleteComment;
