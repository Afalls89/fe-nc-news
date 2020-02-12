import React from "react";

function ErrDisplayer({ err }) {
	const msg = err ? err : "Oops something went wrong";
	return (
		<section>
			<h3>{msg}</h3>
		</section>
	);
}

export default ErrDisplayer;
