import React, { Component } from "react";
import { Wrapper, Navigation, Post } from "../../components";
import * as axios from "../../services/axios";
import { Dimmer, Loader } from "semantic-ui-react";

class Posts extends Component {
	state = { id: 1, post: null, comments: null, loading: false };

	componentDidMount() {
		this.fetchPostInfo();
		// this.setState({ ...this.state, loading: true });
	}

	fetchPostInfo = async () => {
		const post = await axios.getPost(this.state.id);
		const comments = await axios.getPost(this.state.id);

		this.setState({
			post: post.data,
			comments: comments.data,
			loading: true,
		});
	};
	render() {
		return (
			<Wrapper>
				<Navigation />
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
