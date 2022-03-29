import React from "react";
import { Link, Outlet } from "react-router-dom";

// Import CSS
import "./navbar.css";

function Navbar() {
	return (
		<header className="header">
			<h2 className="logo">
				<Link to={"/"}>MERN TODO APP</Link>
			</h2>
			<nav>
				<ul className="nav-links">
					<li>
						<Link className="nav-links-li" to="/alltodo">
							All TODO
						</Link>
					</li>
					<li>
						<Link className="nav-links-li" to="/login">
							Login
						</Link>
					</li>
					<li>
						<Link className="nav-links-li" to="/register">
							Register
						</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</header>
	);
}

export default Navbar;
