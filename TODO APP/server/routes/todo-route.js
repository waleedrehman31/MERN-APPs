const express = require("express");

//Import middleware
const auth = require("../middleware/verify-token");

//Import Model
const Todo = require("../models/todo-model");

// Router Middleware
const Router = express.Router();

// Get All TODO
Router.get("/", auth, async (req, res) => {
	try {
		const todos = await Todo.find();
		res.send(todos);
		res.status(200);
	} catch (error) {
		res.send(error);
	}
});

// Create New TODO
Router.post("/", auth, async (req, res) => {
	const newTodo = new Todo({
		todo: req.body.todo,
		isCompelte: req.body.isCompelte,
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
Router.put("/:id", auth, async (req, res) => {
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
Router.delete("/:id", auth, async (req, res) => {
	try {
		await Todo.findByIdAndDelete(req.params.id);
		res.send("Todo Deleted Success Fully");
	} catch (error) {
		res.status(404).send("Todo Not Found" + error);
	}
});

module.exports = Router;
