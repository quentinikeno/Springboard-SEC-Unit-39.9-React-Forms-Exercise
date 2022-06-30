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
	fireEvent.change(widthInput, { target: { value: width } });
	fireEvent.change(heightInput, { target: { value: height } });
	fireEvent.change(backgroundColorInput, {
		target: { value: backgroundColor },
	});
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

test("Adding a new Box", () => {
	const boxList = render(<BoxList />);

	// No delete buttons for Boxes in the DOM
	expect(boxList.queryByText("X")).not.toBeInTheDocument();

	// Add a new Box
	addNewBox(boxList);

	// A delete button for the new box should be in the DOM
	const removeButton = boxList.getByText("X");
	expect(removeButton).toBeInTheDocument();

	// The div should have styles
	expect(removeButton.previousSibling).toHaveStyle(`
    width: 100px;
    height: 100px;
    background-color: green;
  `);

	// expect form inputs to reset
	expect(boxList.getByLabelText("Width")).toHaveValue("250");
	expect(boxList.getByLabelText("Height")).toHaveValue("250");
	expect(boxList.getByLabelText("Background Color")).toHaveValue("");
});
