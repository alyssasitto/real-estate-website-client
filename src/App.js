// Built in imports

// External imports
import { Routes, Route } from "react-router-dom";

// Internal imports
import ForSale from "./pages/ForSale/ForSale";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<ForSale />} />
			</Routes>
		</div>
	);
}

export default App;
