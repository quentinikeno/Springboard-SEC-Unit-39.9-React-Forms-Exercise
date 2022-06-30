import React from "react";

const Box = ({ id, height, width, backgroundColor, removeBox }) => {
	return (
		<div
			style={{
				height: `${height}px`,
				width: `${width}px`,
				backgroundColor,
			}}
		></div>
	);
};

export default Box;
