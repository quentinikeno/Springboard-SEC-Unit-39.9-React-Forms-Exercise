import { render } from "@testing-library/react";
import Box from "./Box";

test("rendering without crashing", () => {
	render(<Box width={100} height={100} backgroundColor={"purple"} />);
});

test("matching a snapshot", () => {
	const { asFragment } = render(
		<Box width={100} height={100} backgroundColor={"purple"} />
	);
	expect(asFragment()).toMatchSnapshot();
});
