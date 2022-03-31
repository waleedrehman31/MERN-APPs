const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

// Import Routes
const todoRoute = require("./routes/todo-route");
const userRoute = require("./routes/user-route");

// Express App Initialization
const app = express();

// Middleware
dotenv.config();
app.use(cors());
app.use(express.json());

// Setting up Database
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
	})
	.then(console.log("Database Connected"))
	.catch((error) => {
		console.log(error);
	});

// API Routes
app.use("/api/todos", todoRoute);
app.use("/api/user", userRoute);

// Basic Route
// app.get("/", (req, res) => {
// 	res.send("This is an API Request");
// });

// Server and PORT setting up
let PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Listing on http://localhost:${PORT}`);
});

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../", "client", "build")));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "../", "client", "build", "index.html"));
	});
}
