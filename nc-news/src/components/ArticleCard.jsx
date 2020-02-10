import React from "react";
import { Router, Link } from "@reach/router";

function ArticleCard({ title, article_id, author }) {
	console.log(title);
	return (
		<main>
			<li>
				<Link to={`/articles/${article_id}`}>{title}</Link>
			</li>
			<li>{author}</li>
			<li></li>
		</main>
	);
}

export default ArticleCard;
