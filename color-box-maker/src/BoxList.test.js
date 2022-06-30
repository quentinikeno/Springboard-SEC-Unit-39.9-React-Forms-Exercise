import { render } from "@testing-library/react";
import BoxList from "./BoxList";

test("rendering without crashing", () => {
	render(<BoxList />);
});

test("matching the snapshot", () => {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});
