import React from "react";
import { Link } from "react-router-dom";

import "./register.css";

function Register() {
	return (
		<div className="body-background container">
			<div className="card container">
				<div className="card-title">Register</div>
				<form>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						id="name"
						// value={value}
						// onChange={handleChange}
						required
					/>
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
						{" "}
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
