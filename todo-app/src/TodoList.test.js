import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

const addTodo = (todoList, task = "Feed the cat.") => {
	const taskInput = todoList.getByLabelText("Task");
	fireEvent.change(taskInput, { target: { value: task } });
	const submitButton = todoList.getByText("Add New Todo!");
	fireEvent.click(submitButton);
};

it("renders without crashing", () => {
	render(<TodoList />);
});

it("matches snapshot", () => {
	const { asFragment } = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();
});

it("should add a new todo", () => {
	const todoList = render(<TodoList />);

	// No delete button should be in the DOM
	expect(todoList.queryByText("X")).not.toBeInTheDocument();

	// Add a new todo
	addTodo(todoList);

	// Task todo with delete button should be in the DOM
	expect(todoList.queryByText("Feed the cat.")).toBeInTheDocument();
	expect(todoList.queryByText("X")).toBeInTheDocument();
});

it("should remove a todo", () => {
	const todoList = render(<TodoList />);

	// Add a new todo
	addTodo(todoList);

	// Delete the new todo
	const removeButton = todoList.getByText("X");
	fireEvent.click(removeButton);

	// No delete button should be in the DOM
	expect(todoList.queryByText("X")).not.toBeInTheDocument();
});
