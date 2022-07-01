import { useState } from "react";
import EditTodoForm from "./EditTodoForm";

const Todo = ({ id, task, removeTodo, editTodo }) => {
	const [isEditing, setIsEditing] = useState(false);
	const handleDeleteClick = () => {
		removeTodo(id);
	};
	const handleEditClick = () => {
		setIsEditing(true);
	};
	return (
		<div className="Todo">
			{isEditing ? (
				<EditTodoForm
					id={id}
					task={task}
					editTodo={editTodo}
					setIsEditing={setIsEditing}
				/>
			) : (
				<div>
					<span>{task}</span>
					<button className="Todo-edit-btn" onClick={handleEditClick}>
						Edit
					</button>
					<button
						className="Todo-completed-btn"
						onClick={handleCompletedClick}
					>
						Edit
					</button>
					<button
						className="Todo-delete-btn"
						onClick={handleDeleteClick}
					>
						X
					</button>
				</div>
			)}
		</div>
	);
};

export default Todo;
