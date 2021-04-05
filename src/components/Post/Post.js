import React from "react";
import "./Post.css";
import { CommentList } from "../";

const Post = (props) => {
	// console.log(props);

	return (
		<div className="Post">
			<h1>{props.post.title}</h1>
			<div>{props.post.body}</div>

			<CommentList comments={props.comments} />
		</div>
	);
};

export default Post;
