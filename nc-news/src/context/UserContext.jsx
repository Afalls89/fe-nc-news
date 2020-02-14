import React, { Component, createContext } from "react";

export const UserContext = createContext();

class UserContextProvider extends Component {
	state = {
		user: "grumpy19"
	};
	render() {
		return (
			<UserContext.Provider value={{ ...this.state }}>
				{this.props.children}
			</UserContext.Provider>
		);
	}
}

export default UserContextProvider;
