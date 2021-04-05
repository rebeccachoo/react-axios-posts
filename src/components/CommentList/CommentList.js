import React from "react";
import "./CommentList.css";
import { Comment } from "../";

const CommentList = (props) => {
	// console.log("CommentList ");
	// console.log(props);
	return (
		<ul className="CommentList">
			{props.comments.map((comment, index) => (
				<Comment key={index} comment={comment} />
			))}
		</ul>
	);
};

export default CommentList;
