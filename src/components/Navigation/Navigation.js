import React from "react";
import { Button } from "semantic-ui-react";
import "./Navigation.css";

const Navigation = () => (
	<div className="Navigation">
		<Button
			primary
			content="Previous"
			icon="left arrow"
			labelPosition="left"
			className="left_btn"
		/>
		<div className="page_num">1</div>
		<Button
			primary
			content="Next"
			icon="right arrow"
			labelPosition="right"
			className="right_btn"
		/>
	</div>
);

export default Navigation;
