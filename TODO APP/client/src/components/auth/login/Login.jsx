import React from "react";
import { Link } from "react-router-dom";

import "./login.css";

function Login() {
	return (
		<div className="body-background container">
			<div className="card container">
				<div className="card-title">Login</div>
				<form>
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						id="email"
						// value={value}
						// onChange={handleChange}
						required
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						// value={value}
						// onChange={handleChange}
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
