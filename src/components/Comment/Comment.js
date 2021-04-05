import React from "react";
import "./Comment.css";

const Comment = (props) => {
	return (
		<li className="Comment">
			<div className="title">{props.comment.name}</div>
			<div className="body">{props.comment.body}</div>
		</li>
	);
};

export default Comment;
