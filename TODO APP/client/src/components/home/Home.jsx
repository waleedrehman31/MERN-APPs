import React from "react";

//Import CSS
import "./home.css";

//import image
import image from "./images/home-mern-stack.jpg";

function Home() {
	return (
		<div className="body-background container">
			<div className="card container">
				<div className="card-title">Wellcome to MERN Stack TODO APP</div>
				<p className="card-paragraph">
					<span>NOTE</span> To see all todo you click on <span> All TODO </span>{" "}
					in Navbar or you want to create new one you need to click on{" "}
					<span> New TODO </span> also available in Navbar
				</p>
				<img src={image} alt="Banner-MERN" />
			</div>
		</div>
	);
}

export default Home;
