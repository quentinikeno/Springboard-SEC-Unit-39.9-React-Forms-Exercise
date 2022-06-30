import { render } from "@testing-library/react";
import Todo from "./Todo";

it("renders without crashing", () => {
	render(<Todo task="Feed cat." />);
});

it("matches snapshot", () => {
	const { asFragment } = render(<Todo task="Feed cat." />);
	expect(asFragment()).toMatchSnapshot();
});
