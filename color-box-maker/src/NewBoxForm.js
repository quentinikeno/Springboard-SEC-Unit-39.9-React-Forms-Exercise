import React from "react";

const NewBoxForm = ({ addBox }) => {
	const INITIAL_STATE = { width: "", height: "", backgroundColor: "" };
	const [formData, setFormData] = INITIAL_STATE;
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		addBox({ ...formData });
		setFormData(INITIAL_STATE);
	};
	return (
		<form onSubmit={handleSubmit}>
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
			<label htmlFor="height">Width</label>
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
			<label htmlFor="backgroundColor">Width</label>
			<input
				id="backgroundColor"
				type="text"
				name="backgroundColor"
				placeholder="Background Color"
				value={formData.backgroundColor}
				onChange={handleChange}
			/>
		</form>
	);
};

export default NewBoxForm;
