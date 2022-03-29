import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Import css
import "./todo.css";

// Base URL
const baseURL = "https://todo-app-three-rouge.vercel.app/api/todos";

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
				<div className="card-head">
					<div className="card-title">All TODOs</div>
					<Link className="button add-todo-button" to="/newtodo">
						Add TODO
					</Link>
				</div>
				<div className="table-center">
					<table>
						<thead>
							<tr>
								<th>TODO</th>
								<th>STATUS</th>
								<th>ACTION</th>
							</tr>
						</thead>
						<tbody>
							{todos.map((todo) => {
								return (
									<tr key={todo._id}>
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
		</div>
	);
}

export default Todos;
