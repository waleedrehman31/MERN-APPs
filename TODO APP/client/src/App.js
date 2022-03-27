import { Routes, Route } from "react-router-dom";

// Import components
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Todos from "./components/todolist/Todos";
import TodoForm from "./components/todoform/TodoForm";

// Import default css
import "./app.css";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/alltodo" element={<Todos />} />
				<Route path="/newtodo" element={<TodoForm />} />
			</Routes>
		</div>
	);
}

export default App;
