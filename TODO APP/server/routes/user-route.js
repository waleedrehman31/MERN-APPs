const express = require("express");

const Routes = express.Router();

//Import model
const User = require("../models/user-model");

Routes.post("/register", (req, res) => {
	const user = {
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	};
	res.json(user);
});

Routes.post("/login", (req, res) => {
	res.send("This is login route");
});

module.exports = Routes;
