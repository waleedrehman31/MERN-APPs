const express = require("express");

const Routes = express.Router();

//Import model
const User = require("../models/user-model");

// Import User validation
const {
	registerValidation,
	loginValidation,
} = require("../validation/user-validation");

Routes.post("/register", async (req, res) => {
	const { error } = registerValidation(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	const emailExist = await User.findOne({ email: req.body.email });
	if (emailExist) {
		return res.status(400).send("Email Already Exist");
	}

	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});
	try {
		const newUser = await user.save();
		res.send(newUser);
	} catch (error) {
		res.status(500).send(error);
	}
});

Routes.post("/login", (req, res) => {
	res.send("This is login route");
});

module.exports = Routes;
