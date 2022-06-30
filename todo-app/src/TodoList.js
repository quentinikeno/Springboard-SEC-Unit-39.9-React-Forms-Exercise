import { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
	const [todos, SetTodos] = useState([]);
	const addTodo = (newTodo) => {
		SetTodos((todos) => [...todos, newTodo]);
	};

	const todoComponents = todos.map((todos) => (
		<Todo key={todo.id} id={todo.id} task={todo.task} />
	));
	return (
		<div className="TodoList">
			<h1>Todo List</h1>
			<NewTodoForm addTodo={addTodo} />
			<div className="TodoList-todos-div">{todoComponents}</div>
		</div>
	);
};

export default TodoList;
