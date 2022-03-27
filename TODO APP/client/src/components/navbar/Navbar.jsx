import React from "react";
import { Link } from "react-router-dom";

// Import CSS
import "./navbar.css";

function Navbar() {
	return (
		<header className="header">
			<h2 className="logo">MERN TODO APP</h2>
			<nav>
				<ul className="nav-links">
					<li>
						<Link className="nav-links-li" to="/alltodo">
							All TODO
						</Link>
					</li>
					<li>
						<Link className="nav-links-li" to="/newtodo">
							New TODO
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
