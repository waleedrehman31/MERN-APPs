const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);

	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashPassword,
	});

	try {
		const newUser = await user.save();
		res.send({ user: user._id });
	} catch (error) {
		res.status(500).send(error);
	}
});

Routes.post("/login", async (req, res) => {
	const { error } = loginValidation(req.body);
	if (error) {
		return res.status(400).send(error.details[0].message);
	}

	const user = await User.findOne({ email: req.body.email });
	if (!user) {
		return res.status(400).send("Email Doesn't Exist");
	}

	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) {
		return res.status(400).send("Password Is Invalid");
	}

	const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
	res.header("auth-token", token).status(200).send(token);
});

module.exports = Routes;
