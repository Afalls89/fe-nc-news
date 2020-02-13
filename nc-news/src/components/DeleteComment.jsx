import React from "react";
import * as api from "../utils/api";

function DeleteComment(props) {
	const handleClick = event => {
		api.deleteComment(props.comment_id).catch(() => {
			props.optimisticRemoveComment(false);
		});

		props.optimisticRemoveComment(true);
	};

	return (
		<section>
			<button disabled={props.author !== props.user} onClick={handleClick}>
				Delete comment
			</button>
		</section>
	);
}

export default DeleteComment;
