import { useState } from "react";

const EditTodoForm = ({ id, task, editTodo }) => {
	const [taskInput, setTaskInput] = useState(task);
	const handleChange = (event) => {
		event.preventDefault();
		setTaskInput(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		editTodo(id, taskInput);
		setTaskInput("");
	};
	return (
		<form className="EditTodoForm" onSubmit={handleSubmit}>
			<label htmlFor="task">Task</label>
			<input
				type="text"
				id="task"
				placeholder="Todo"
				name="task"
				onChange={handleChange}
			/>
			<button>Update Todo!</button>
		</form>
	);
};

export default EditTodoForm;
