import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
	const [boxes, setBoxes] = useState([]);
	const addBox = (newBox) => {
		setBoxes((boxes) => [...boxes, newBox]);
	};
	return (
		<div>
			<h1>Color Box Maker</h1>
			<NewBoxForm addBox={addBox} />
			<div>
				{boxes.map((box) => (
					<Box
						key={box.id}
						width={`${box.width}px`}
						height={`${box.height}px`}
						backgroundColor={box.backgroundColor}
					/>
				))}
			</div>
		</div>
	);
};

export default BoxList;
