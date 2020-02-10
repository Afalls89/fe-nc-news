import React from "react";
import { Router, Link } from "@reach/router";

const NavBar = () => {
	return (
		<nav className="navbar">
			<Link to="/">Articles</Link>
			<Link to="/topics">Topics</Link>
		</nav>
	);
};

export default NavBar;
