const express = require("express");
const jwt = require("jsonwebtoken");

//Import middleware
const auth = require("../middleware/verify-token");

//Import Model
const Todo = require("../models/todo-model");
const User = require("../models/user-model");

// Router Middleware
const Router = express.Router();

// Get All TODO
Router.get("/", auth, async (req, res) => {
	const token = req.header("auth-token");
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	const userId = decoded._id;

	try {
		const todos = await Todo.find({ userID: userId });
		res.status(200).send(todos);
	} catch (error) {
		res.send(error);
	}
});

// Create New TODO
Router.post("/", auth, async (req, res) => {
	const token = req.header("auth-token");
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	const userId = decoded._id;

	const newTodo = new Todo({
		todo: req.body.todo,
		isCompelte: req.body.isCompelte,
		userID: userId,
	});
	try {
		await newTodo.save();
		res.send(newTodo);
		console.log(newTodo);
	} catch (error) {
		res.send(error);
		console.log(error);
	}
});

// Update One TODO by ID
Router.put("/:id", async (req, res) => {
	try {
		const todoUpdate = await Todo.findByIdAndUpdate(req.params.id, {
			todo: req.body.todo,
			isCompelte: req.body.isCompelte,
		});

		res.send(todoUpdate);
	} catch (error) {
		res.status(404).send("Todo Not Found" + error);
	}
});

// Delete Todo by ID
Router.delete("/:id",  async (req, res) => {
	try {
		await Todo.findByIdAndDelete(req.params.id);
		res.send("Todo Deleted Success Fully");
	} catch (error) {
		res.status(404).send("Todo Not Found" + error);
	}
});

module.exports = Router;
