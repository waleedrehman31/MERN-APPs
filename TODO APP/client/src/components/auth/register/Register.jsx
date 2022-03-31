import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "./register.css";

const baseURL = "https://todo-app-waleedrehman31.vercel.app/api/user/register";

function Register() {
	let navigate = useNavigate();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function nameHandleChange(event) {
		setName(event.target.value);
	}
	function emailHandleChange(event) {
		setEmail(event.target.value);
	}
	function passwordHandleChange(event) {
		setPassword(event.target.value);
	}

	async function handleSubmit(event) {
		event.preventDefault();
		try {
			await axios
				.post(
					baseURL,
					{
						name: name,
						email: email,
						password: password,
					},
					{
						headers: {
							"Content-Type": "application/json",
						},
					},
				)
				.then((response) => {
					navigate("/login");
				});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="body-background container">
			<div className="card container">
				<div className="card-title">Register</div>
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						// value={name}
						onChange={nameHandleChange}
						required
					/>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						// value={email}
						onChange={emailHandleChange}
						required
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						// value={password}
						onChange={passwordHandleChange}
						required
					/>
					<input
						className="register-button button"
						type="submit"
						name="submit"
						id="submit"
						value="Register"
					/>
				</form>
				<p className="card-paragraph">
					<span>NOTE</span> If you have account an
					<span>
						<Link className="auth-link" to="/login">
							Login
						</Link>
					</span>
				</p>
			</div>
		</div>
	);
}

export default Register;
