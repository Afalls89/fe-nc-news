import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
	state = {
		optimisticVotes: 0
	};

	handleClick = event => {
		api.patchVote(this.props.id, event, this.props.type);
		this.setState(currentState => {
			return { optimisticVotes: currentState.optimisticVotes + event };
		});
	};
	render() {
		return (
			<section className="singleArticleVote">
				<button
					onClick={() => {
						this.handleClick(1);
					}}
					disabled={this.state.optimisticVotes > 0}
				>
					Like
				</button>
				<h3>{this.props.votes + this.state.optimisticVotes}</h3>
				<button
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
