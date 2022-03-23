const express = require("express");
const cors = require("cors");

// Export Routes
const todoRoute = require("./routes/todo-route");

// Express App Initialization
const app = express();
// Middleware
app.use(cors());
app.use(express.json());

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
