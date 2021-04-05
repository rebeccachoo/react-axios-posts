import React from "react";
import { Button } from "semantic-ui-react";
import "./Navigation.css";

const Navigation = (props) => {
	return (
		<div className="Navigation">
			<Button
				primary
				content="Previous"
				icon="left arrow"
				labelPosition="left"
				className="left_btn"
				onClick={props.goToPrev}
			/>
			<div className="page_num">{props.pageNum}</div>
			<Button
				primary
				content="Next"
				icon="right arrow"
				labelPosition="right"
				className="right_btn"
				onClick={props.goToNext}
			/>
		</div>
	);
};

export default Navigation;
