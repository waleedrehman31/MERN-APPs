import React from "react";

// Import css
import "./todo.css";

function Todos() {
	return (
		<div className="body-background container">
			<div className="card container">
				<div className="card-title">All TODOs</div>
				<table>
					<thead>
						<th>ID</th>
						<th>TODO</th>
						<th>STATUS</th>
						<th>ACTION</th>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>This is todo</td>
							<td>Completed</td>
							<td>
								<button className="complete-button">Complete</button>
								<button className="edit-button">Edit</button>
								<button className="delete-button">Delete</button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>This is todo</td>
							<td>Completed</td>
							<td>
								<button className="complete-button">Complete</button>
								<button className="edit-button">Edit</button>
								<button className="delete-button">Delete</button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>This is todo</td>
							<td>Completed</td>
							<td>
								<button className="complete-button">Complete</button>
								<button className="edit-button">Edit</button>
								<button className="delete-button">Delete</button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>This is todo</td>
							<td>Completed</td>
							<td>
								<button className="complete-button">Complete</button>
								<button className="edit-button">Edit</button>
								<button className="delete-button">Delete</button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>This is todo</td>
							<td>Completed</td>
							<td>
								<button className="complete-button">Complete</button>
								<button className="edit-button">Edit</button>
								<button className="delete-button">Delete</button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>This is todo</td>
							<td>Completed</td>
							<td>
								<button className="complete-button">Complete</button>
								<button className="edit-button">Edit</button>
								<button className="delete-button">Delete</button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>This is todo</td>
							<td>Completed</td>
							<td>
								<button className="complete-button">Complete</button>
								<button className="edit-button">Edit</button>
								<button className="delete-button">Delete</button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>This is todo</td>
							<td>Completed</td>
							<td>
								<button className="complete-button">Complete</button>
								<button className="edit-button">Edit</button>
								<button className="delete-button">Delete</button>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>This is todo</td>
							<td>Completed</td>
							<td>
								<button className="complete-button">Complete</button>
								<button className="edit-button">Edit</button>
								<button className="delete-button">Delete</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Todos;
