import { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
	const [todos, SetTodos] = useState([]);

	const todoComponents = todos.map((todos) => (
		<Todo key={todo.id} id={todo.id} task={todo.task} />
	));
	return (
		<div className="TodoList">
			<h1>Todo List</h1>
			<div className="TodoList-todos-div">{todoComponents}</div>
		</div>
	);
};

export default TodoList;
