import React, { Component } from "react";
import Title from "./components/Title";
import "../src/App.css";
import NavBar from "./components/NavBar";
import { Router } from "@reach/router";
import SingleArticle from "./components/SingleArticle";
import ArticleList from "./components/ArticleList";
import TopicList from "./components/TopicList";
import ErrDisplayer from "./components/ErrDisplayer";

class App extends Component {
	state = { user: "grumpy19" };
	render() {
		return (
			<div className="App">
				<Title loggedInUser={this.state.user} />
				<NavBar />
				<Router>
					<SingleArticle path="/articles/:article_id" user={this.state.user} />
					<ArticleList path="/articles" />
					<ArticleList path="/" />
					<ArticleList path="/topics/:topic_slug" />
					<TopicList path="/topics" />
					<ErrDisplayer default />
				</Router>
			</div>
		);
	}
}

export default App;
