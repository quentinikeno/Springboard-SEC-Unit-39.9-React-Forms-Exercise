const Todo = ({ id, task, removeTodo }) => {
	const handleClick = () => {
		removeTodo(id);
	};
	return (
		<div>
			{task}
			<button className="Todo-delete-btn" onClick={handleClick}>
				X
			</button>
		</div>
	);
};

export default Todo;
