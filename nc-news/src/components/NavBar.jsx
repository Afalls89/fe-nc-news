import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
	return (
		<nav className="navbar">
			<Link to="/" className="mainLinks">
				Articles
			</Link>
			<Link to="/topics" className="mainLinks">
				Topics
			</Link>
		</nav>
	);
};

export default NavBar;
