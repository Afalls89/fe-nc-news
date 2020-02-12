import React from "react";
import * as api from "../utils/api";

function DeleteComment(props) {
	const handleClick = event => {
		api.deleteComment(props.comment_id);
		props.optimisticRemoveComment(props.comment_id);
	};
	return (
		<button disabled={props.author !== props.user} onClick={handleClick}>
			Delete comment
		</button>
	);
}

export default DeleteComment;
