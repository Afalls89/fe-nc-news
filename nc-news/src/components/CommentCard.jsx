import React, { Component } from "react";
import Voter from "./Voter";

class CommentCard extends Component {
	render() {
		return (
			<section>
				{this.props.comments.map(comment => {
					return (
						<section className="commentCard" key={comment.comment_id}>
							<p>{comment.body}</p>
							<Voter
								votes={comment.votes}
								id={comment.comment_id}
								type={"comments"}
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
