import { useState } from "react";
import EditTodoForm from "./EditTodoForm";

const Todo = ({ id, task, removeTodo, editTodo }) => {
	const [isEditing, setIsEditing] = useState(false);
	const handleClick = () => {
		removeTodo(id);
	};
	return (
		<div>
			{isEditing ? (
				<EditTodoForm id={id} task={task} editTodo={editTodo} />
			) : (
				task
			)}
			<button className="Todo-delete-btn" onClick={handleClick}>
				X
			</button>
		</div>
	);
};

export default Todo;
