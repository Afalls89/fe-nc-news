import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ErrDisplayer from "./ErrDisplayer";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

class CommentList extends Component {
	state = {
		comments: [],
		isLoading: true,
		newComment: {},
		err: null
	};

	componentDidMount() {
		api
			.getComments(this.props.article_id)
			.then(comments => {
				this.setState({
					comments,
					isLoading: false,
					err: null,
					newComment: {}
				});
			})
			.catch(
				({
					response: {
						data: { msg }
					}
				}) => {
					this.setState({ isLoading: false, err: msg });
				}
			);
	}

	optimisticComment = newComment => {
		this.setState(currentState => {
			return {
				comments: [newComment, ...currentState.comments]
			};
		});
	};

	render() {
		if (this.state.err) return <ErrDisplayer err={this.state.err} />;
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
					{this.state.comments.map(comment => {
						return (
							<CommentCard
								key={comment.comment_id}
								comment={comment}
								user={this.props.user}
							/>
						);
					})}
				</section>
			</section>
		);
	}
}

export default CommentList;
