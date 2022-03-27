import React, { useState } from "react";
import axios from "axios";

//Import CSS
import "./todoform.css";

// Base URl
const baseURL = process.env.baseURL;

function TodoForm() {
	const [value, setValue] = useState("");

	function handleChange(event) {
		setValue(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		try {
			axios
				.post(
					baseURL,
					{
						todo: value,
					},
					{
						headers: {
							"Content-Type": "application/json",
						},
					},
				)
				.then(() => {
					alert("Todo Added SuccessFully");
					setValue("");
				});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="body-background container">
			<div className="card container">
				<div className="card-title">Enter Your TODO</div>
				<form onSubmit={handleSubmit}>
					<label htmlFor="todo">Todo</label>
					<input
						type="text"
						name="todo"
						id="todo"
						value={value}
						onChange={handleChange}
						required
					/>
					<input
						className="add-button button"
						type="submit"
						name="submit"
						id="submit"
					/>
				</form>
			</div>
		</div>
	);
}

export default TodoForm;
