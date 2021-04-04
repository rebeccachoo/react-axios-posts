import React, { Component } from "react";
import { Header } from "./components";
import { Posts } from "./containers/index";

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Posts />
			</div>
		);
	}
}

export default App;
