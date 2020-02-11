import React from "react";
import { Link } from "@reach/router";
import Voter from "./Voter";

function ArticleCard({ title, article_id, author, votes, comment_count }) {
	return (
		<>
			<main>
				<li>
					<Link to={`/articles/${article_id}`}>{title}</Link>
				</li>
				<li>{author}</li>
				<li>number of votes = {votes}</li>
				<li>comment count = {comment_count}</li>
			</main>
			<section className="singleArticleVote">
				<Voter votes={votes} article_id={article_id} type={"articles"} />
			</section>
		</>
	);
}

export default ArticleCard;
