const express = require("express");

const Router = express.Router();

Router.get("/", (req, res) => {
	res.send("This is an Router Request");
});

module.exports = Router;
