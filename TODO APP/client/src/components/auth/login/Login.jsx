import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import "./login.css";

const baseURL =
	"https://todo-3245m4l4i-waleedrehman31.vercel.app/api/user/login";

function Login() {
	let navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function emailHandleChange(event) {
		setEmail(event.target.value);
	}
	function passwordHandleChange(event) {
		setPassword(event.target.value);
	}

	async function handleSubmit(event) {
		event.preventDefault();
		console.log(email);
		console.log(password);
		try {
			await axios
				.post(
					baseURL,
					{
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
					localStorage.setItem('userToken', response.data);
					navigate("/alltodo");
					console.log(response.data);
				});
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className="body-background container">
			<div className="card container">
				<div className="card-title">Login</div>
				<form onSubmit={handleSubmit}>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						// value={value}
						onChange={emailHandleChange}
						required
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						// value={value}
						onChange={passwordHandleChange}
						required
					/>
					<input
						className="login-button button"
						type="submit"
						name="submit"
						id="submit"
						value="Login"
					/>
				</form>
				<p className="card-paragraph">
					<span>NOTE</span> If you don't have account an
					<span>
						{" "}
						<Link className="auth-link" to="/register">
							Register
						</Link>
					</span>
				</p>
			</div>
		</div>
	);
}

export default Login;
