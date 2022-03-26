// Import components
import Navbar from "./components/navbar/Navbar";
import Todos from "./components/todolist/Todos";

// Import default css
import "./app.css";
import TodoForm from "./components/todoform/TodoForm";

function App() {
	return (
		<div>
			<Navbar />
			<Todos />
			<TodoForm />
		</div>
	);
}

export default App;
