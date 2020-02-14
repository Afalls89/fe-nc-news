import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
	state = {
		optimisticVotes: 0,
		err: false
	};

	handleClick = voteChange => {
		this.setState(currentState => {
			return { optimisticVotes: currentState.optimisticVotes + voteChange };
		});
		api.patchVote(this.props.id, voteChange, this.props.type).catch(() => {
			this.setState(currentState => {
				return {
					optimisticVotes: currentState.optimisticVotes - voteChange,
					err: true
				};
			});
		});
	};
	render() {
		return (
			<section className="singleArticleVote">
				{this.state.err && <p>Sorry you can not vote at this time</p>}
				<button
					className="likeButton"
					onClick={() => {
						this.handleClick(1);
					}}
					disabled={this.state.optimisticVotes > 0}
				>
					Like
				</button>
				<h2 className="voteCount">
					{this.props.votes + this.state.optimisticVotes}
				</h2>
				<button
					className="likeButton"
					onClick={() => {
						this.handleClick(-1);
					}}
					disabled={this.state.optimisticVotes < 0}
				>
					Unlike
				</button>
			</section>
		);
	}
}

export default Voter;
