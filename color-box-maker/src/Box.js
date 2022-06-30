import React from "react";

const Box = ({ id, height, width, backgroundColor, removeBox }) => {
	const handleRemove = () => {
		removeBox(id);
	};
	return (
		<div>
			<div
				style={{
					height: `${height}px`,
					width: `${width}px`,
					backgroundColor,
				}}
			></div>
			<button onClick={handleRemove}>X</button>
		</div>
	);
};

export default Box;
