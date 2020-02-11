import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import { Link } from "@reach/router";

class TopicList extends Component {
	state = {
		topics: [],
		isLoading: true
	};

	componentDidMount() {
		api.getTopics().then(topics => {
			this.setState({ topics, isLoading: false }, () => {});
		});
	}

	render() {
		if (this.state.isLoading) {
			return Loader();
		}

		return (
			<main>
				<section>
					<h1>Topics</h1>
				</section>
				{this.state.topics.map(topic => {
					return (
						<ul key={topic.slug}>
							<h4>
								<Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
							</h4>
							<li>{topic.description}</li>
						</ul>
					);
				})}
			</main>
		);
	}
}

export default TopicList;
