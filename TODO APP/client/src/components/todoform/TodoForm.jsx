import React, { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

//Import CSS
import "./todoform.css";

// Base URL

const baseURL = "http://localhost:5000/api/todos";

function TodoForm() {
	let navigate = useNavigate();
	const [value, setValue] = useState("");

	const authToken = localStorage.getItem("userToken");

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
							"auth-token": authToken,
						},
					},
				)
				.then(() => {
					alert("Todo Added SuccessFully");
					navigate("/alltodo");
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
