import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
	const [boxes, setBoxes] = [
		{ width: "100px", height: "100px", color: "green" },
	];
	const addBox = (newBox) => {
		setBoxes((boxes) => [...boxes, newBox]);
	};
	return (
		<div>
			<h1>Color Box Maker</h1>
			<div>
				{boxes.map((box) => (
					<Box
						width={box.width}
						height={box.height}
						backgroundColor={box.color}
					/>
				))}
			</div>
			<newBoxForm addBox={addBox} />
		</div>
	);
};

export default BoxList;
