import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({ addBox }) => {
	const INITIAL_STATE = { width: 250, height: 250, backgroundColor: "" };
	const [formData, setFormData] = useState(INITIAL_STATE);
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		addBox({ ...formData, id: uuid() });
		setFormData(INITIAL_STATE);
	};
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="width">Width</label>
				<input
					id="width"
					type="range"
					name="width"
					min="1"
					max="500"
					value={formData.width}
					onChange={handleChange}
				/>
				<span>{formData.width} pixels</span>
			</div>
			<div>
				<label htmlFor="height">Height</label>
				<input
					id="height"
					type="range"
					name="height"
					min="1"
					max="500"
					value={formData.height}
					onChange={handleChange}
				/>
				<span>{formData.height} pixels</span>
			</div>
			<div>
				<label htmlFor="backgroundColor">Background Color</label>
				<input
					id="backgroundColor"
					type="text"
					name="backgroundColor"
					placeholder="Background Color"
					value={formData.backgroundColor}
					onChange={handleChange}
				/>
			</div>
			<button>Create a new box!</button>
		</form>
	);
};

export default NewBoxForm;
