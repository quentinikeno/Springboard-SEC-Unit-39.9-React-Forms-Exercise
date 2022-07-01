import { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
	const [todos, SetTodos] = useState([]);
	const addTodo = (newTodo) => {
		SetTodos((todos) => [...todos, newTodo]);
	};
	const editTodo = (id, updatedTask) => {
		SetTodos((todos) =>
			todos.map((todo) =>
				todo.id === id ? { ...todo, task: updatedTask } : todo
			)
		);
	};
	const setIsCompletedTodo = (id, isCompleted) => {
		SetTodos((todos) =>
			todos.map((todo) =>
				todo.id === id ? { ...todo, isCompleted } : todo
			)
		);
	};
	const removeTodo = (id) => {
		SetTodos((todos) => todos.filter((todo) => todo.id !== id));
	};

	const todoComponents = todos.map((todo) => (
		<Todo
			key={todo.id}
			id={todo.id}
			task={todo.task}
			isCompleted={todo.isCompleted}
			removeTodo={removeTodo}
			editTodo={editTodo}
			setIsCompletedTodo={setIsCompletedTodo}
		/>
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
