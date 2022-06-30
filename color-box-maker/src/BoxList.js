import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
	const [boxes, setBoxes] = useState([]);
	const addBox = (newBox) => {
		setBoxes((boxes) => [...boxes, newBox]);
	};
	const removeBox = (id) => {
		setBoxes((boxes) => boxes.filter((box) => box.id !== id));
	};
	return (
		<div>
			<h1>Color Box Maker</h1>
			<NewBoxForm addBox={addBox} />
			<div>
				{boxes.map((box) => (
					<Box
						id={box.id}
						key={box.id}
						width={box.width}
						height={box.height}
						backgroundColor={box.backgroundColor}
						removeBox={removeBox}
					/>
				))}
			</div>
		</div>
	);
};

export default BoxList;
