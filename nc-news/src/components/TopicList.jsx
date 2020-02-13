import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import { Link } from "@reach/router";
import ErrDisplayer from "./ErrDisplayer";

class TopicList extends Component {
	state = {
		topics: [],
		isLoading: true,
		err: null
	};

	componentDidMount() {
		api
			.getTopics()
			.then(topics => {
				this.setState({ topics, isLoading: false, err: false });
			})
			.catch(({ message }) => {
				this.setState({ isLoading: false, err: message });
			});
	}

	render() {
		if (this.state.err) return <ErrDisplayer err={this.state.err} />;
		if (this.state.isLoading) {
			return Loader();
		}

		return (
			<main className="content">
				<section className="topics">
					<h1>Topics</h1>
				</section>
				{this.state.topics.map(topic => {
					return (
						<ul key={topic.slug} className="topics">
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
