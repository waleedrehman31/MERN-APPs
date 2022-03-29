import { Routes, Route } from "react-router-dom";

// Import components
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Todos from "./components/todolist/Todos";
import TodoForm from "./components/todoform/TodoForm";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";

// Import default css
import "./app.css";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/alltodo" element={<Todos />} />
				<Route path="/newtodo" element={<TodoForm />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
	);
}

export default App;
