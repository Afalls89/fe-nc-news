import React, { Component } from "react";

class Title extends Component {
	render() {
		return (
			<div className="header">
				<p className="loggedInUser">
					you are logged in as {this.props.loggedInUser}
				</p>
				<header className="title">NC-News </header>
			</div>
		);
	}
}

export default Title;
