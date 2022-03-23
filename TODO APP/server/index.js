const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Export Routes
const todoRoute = require("./routes/todo-route");

// Express App Initialization
const app = express();

// Middleware
dotenv.config();
app.use(cors());
app.use(express.json());

// Setting up Database
console.log(process.env.MONGO_URI);
mongoose
	.connect(process.env.MONGO_URI)
	.then(console.log("Database Connected"))
	.catch((e) => {
		console.log(e);
	});

// API Routes
app.use("/api/todo", todoRoute);

// Basic Route
app.get("/", (req, res) => {
	res.send("This is an API Request");
});

// Server and PORT setting up
let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Listing on http://localhost:${PORT}`);
});
