import React from "react";
import { Link } from "@reach/router";

function ArticleCard({ title, article_id, author, votes, comment_count }) {
	return (
		<main>
			<li>
				<Link to={`/articles/${article_id}`}>{title}</Link>
			</li>
			<li>{author}</li>
			<li>number of votes = {votes}</li>
			<li>comment count = {comment_count}</li>
		</main>
	);
}

export default ArticleCard;
