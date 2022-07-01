import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./NewTodoForm.css";

const NewTodoForm = ({ addTodo }) => {
	const [taskInput, setTaskInput] = useState("");
	const handleChange = (event) => {
		event.preventDefault();
		setTaskInput(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		addTodo({ id: uuid(), task: taskInput, isCompleted: false });
		setTaskInput("");
	};
	return (
		<form className="NewTodoForm" onSubmit={handleSubmit}>
			<label htmlFor="task">Task</label>
			<input
				type="text"
				id="task"
				name="task"
				placeholder="Todo"
				value={taskInput}
				onChange={handleChange}
			/>
			<button>Add New Todo!</button>
		</form>
	);
};

export default NewTodoForm;
