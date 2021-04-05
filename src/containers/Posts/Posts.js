import React, { Component } from "react";
import { Wrapper, Navigation, Post } from "../../components";
import * as axios from "../../services/axios";
import { Dimmer, Loader } from "semantic-ui-react";

class Posts extends Component {
	state = { id: 1, post: null, comments: null, loading: false };

	componentDidMount() {
		this.fetchPostInfo();
	}
	goToPrevHandler = () => {
		if (this.state.id > 1)
			this.setState((prevState) => {
				return {
					...prevState,
					id: prevState.id - 1,
				};
			});
		this.fetchPostInfo();
	};
	goToNextHandler = () => {
		this.setState((prevState) => {
			return {
				...prevState,
				id: prevState.id + 1,
			};
		});
		this.fetchPostInfo();
	};

	fetchPostInfo = async () => {
		const post = await axios.getPost(this.state.id);
		const comments = await axios.getComments(this.state.id);

		this.setState({
			post: post.data,
			comments: comments.data,
			loading: true,
		});
	};
	render() {
		return (
			<Wrapper>
				<Navigation
					goToPrev={this.goToPrevHandler}
					goToNext={this.goToNextHandler}
					pageNum={this.state.id}
				/>
				{!this.state.loading ? (
					<Dimmer active inverted>
						<Loader inverted>Loading</Loader>
					</Dimmer>
				) : (
					<Post post={this.state.post} comments={this.state.comments} />
				)}
			</Wrapper>
		);
	}
}

export default Posts;
