import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

const addNewBox = (
	boxList,
	width = "100",
	height = "100",
	backgroundColor = "green"
) => {
	const widthInput = boxList.getByLabelText("Width");
	const heightInput = boxList.getByLabelText("Height");
	const backgroundColorInput = boxList.getByLabelText("Background Color");
	fireEvent.change(widthInput, { target: width });
	fireEvent.change(heightInput, { target: height });
	fireEvent.change(backgroundColorInput, { target: backgroundColor });
	const submitButton = boxList.getByText("Create a new box!");
	fireEvent.click(submitButton);
};

test("rendering without crashing", () => {
	render(<BoxList />);
});

test("matching the snapshot", () => {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});
