import React, { Component } from "react";
import Title from "./components/Title";
import "../src/App.css";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import SingleArticle from "./components/SingleArticle";
import ArticleList from "./components/ArticleList";
import TopicList from "./components/TopicList";

class App extends Component {
	state = { user: "Andrew" };
	render() {
		return (
			<div className="App">
				<Title loggedInUser={this.state.user} />
				<NavBar />
				<Router>
					<SingleArticle path="/articles/:article_id" />
					<ArticleList path="/" />
					<ArticleList path="/topics/:topic_slug" />
					<TopicList path="/topics" />
				</Router>
			</div>
		);
	}
}

export default App;
