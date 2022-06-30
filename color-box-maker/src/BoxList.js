import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
	const [boxes, setBoxes] = [
		{ width: "100px", height: "100px", color: "green" },
	];
	return (
		<div>
			<h1>Color Box Maker</h1>
			{boxes.map((box) => (
				<Box width={box.width} height={box.height} color={box.color} />
			))}
		</div>
	);
};

export default BoxList;
