import React from "react";
import "./todoform.css";

function TodoForm() {
	return (
		<div className="body-background container">
			<div className="card container">
				<div className="card-title">Enter Your TODO</div>
				<form action="">
					<label htmlFor="todo">Todo</label>
					<input type="text" name="todo" id="todo" />
					<button className="add-button">ADD</button>
				</form>
			</div>
		</div>
	);
}

export default TodoForm;
