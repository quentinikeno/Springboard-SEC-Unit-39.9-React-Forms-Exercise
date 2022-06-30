import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

test("rendering without crashing", () => {
	render(<NewBoxForm />);
});

test("matching a snapshot", () => {
	const { asFragment } = render(<NewBoxForm />);
	expect(asFragment()).toMatchSnapshot();
});
