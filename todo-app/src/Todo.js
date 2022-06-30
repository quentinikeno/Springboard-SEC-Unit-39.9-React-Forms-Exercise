const Todo = ({ task }) => {
	return (
		<div>
			{task}
			<button className="Todo-delete-btn">X</button>
		</div>
	);
};

export default Todo;
