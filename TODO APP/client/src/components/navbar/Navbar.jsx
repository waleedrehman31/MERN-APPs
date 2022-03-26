import React from "react";
import "./navbar.css";

function Navbar() {
	return (
		<header className="header">
			<h2 className="logo">MERN TODO APP</h2>
			<nav>
				<ul className="nav-links">
					<li className="nav-links-li">All TODO</li>
					<li className="nav-links-li">New TODO</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
