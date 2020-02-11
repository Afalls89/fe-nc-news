import React, { Component } from "react";
import * as api from "../utils/api";

class Voter extends Component {
	state = {
		optomisticVotes: 0
	};

	handleClick = event => {
		api.patchVote(this.props.article_id, event, this.props.type);
		this.setState(currentState => {
			return { ...currentState, optomisticVotes: event };
		});
	};
	render() {
		return (
			<section>
				<button
					onClick={() => {
						this.handleClick(1);
					}}
					disabled={this.state.optomisticVotes > 0}
				>
					Like
				</button>
				<h3>{this.props.votes + this.state.optomisticVotes}</h3>
				<button
					onClick={() => {
						this.handleClick(-1);
					}}
					disabled={this.state.optomisticVotes < 0}
				>
					Unlike
				</button>
			</section>
		);
	}
}

export default Voter;
