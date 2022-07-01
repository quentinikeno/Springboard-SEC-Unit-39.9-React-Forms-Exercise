import { useState } from "react";
import EditTodoForm from "./EditTodoForm";
import "./Todo.css";

const Todo = ({
	id,
	task,
	removeTodo,
	editTodo,
	isCompleted,
	setIsCompletedTodo,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const handleDeleteClick = () => {
		removeTodo(id);
	};
	const handleEditClick = () => {
		setIsEditing(true);
	};
	const handleCompletedClick = () => {
		setIsCompletedTodo(id, !isCompleted);
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
					<span
						className={`Todo-task${
							isCompleted ? "-completed" : ""
						}`}
					>
						{task}
					</span>
					<button className="Todo-edit-btn" onClick={handleEditClick}>
						Edit
					</button>
					<button
						className="Todo-completed-btn"
						onClick={handleCompletedClick}
					>
						Mark as completed
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
