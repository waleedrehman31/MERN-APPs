import React, { useState, useEffect } from "react";
import axios from "axios";

// Import css
import "./todo.css";
import dontenv from "dotenv";

// Base URL
dontenv.config();
const baseURL = process.env.baseURL;

function Todos() {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		axios
			.get(baseURL)
			.then((response) => {
				setTodos(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [todos]);

	if (!todos) {
		return "no todo available right now";
	}

	const compelteTask = (id) => {
		axios
			.put(
				`${baseURL}/${id}`,
				{
					isCompelte: true,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				},
			)
			.then(() => {
				alert("Todo Completed");
			});
	};

	const deletePost = (id) => {
		axios.delete(`${baseURL}/${id}`).then(() => {
			alert("Post deleted!");
		});
	};

	return (
		<div className="body-background container">
			<div className="card container">
				<div className="card-title">All TODOs</div>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>TODO</th>
							<th>STATUS</th>
							<th>ACTION</th>
						</tr>
					</thead>
					<tbody>
						{todos.map((todo) => {
							return (
								<tr key={todo._id}>
									<td>{todo._id}</td>
									<td>{todo.todo}</td>
									<td>{todo.isCompelte ? "Completed" : "Pending"}</td>
									<td>
										<button
											onClick={() => {
												compelteTask(todo._id);
											}}
											className={
												todo.isCompelte
													? "done-button button"
													: "complete-button button"
											}
										>
											Complete
										</button>
										<button className="edit-button button">Edit</button>
										<button
											className="delete-button button"
											onClick={() => {
												deletePost(todo._id);
											}}
										>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Todos;
