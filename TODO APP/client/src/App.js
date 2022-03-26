// Import components
import Navbar from "./components/navbar/Navbar";
import Todos from "./components/todolist/Todos";

// Import default css
import "./app.css";

function App() {
	return (
		<div>
				<Navbar />
				<Todos />
		</div>
	);
}

export default App;
