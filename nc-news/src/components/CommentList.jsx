import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";

import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

class CommentList extends Component {
	state = {
		comments: [],
		isLoading: true
	};

	componentDidMount() {
		api.getComments(this.props.article_id).then(comments => {
			this.setState({ comments, isLoading: false }, () => {});
		});
	}
	render() {
		if (this.state.isLoading) {
			return Loader();
		}

		return (
			<section className="commentList">
				<CommentAdder user={this.props.user} />
				<section className="comments">
					<CommentCard comments={this.state.comments} />
				</section>
			</section>
		);
	}
}

export default CommentList;
