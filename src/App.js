import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Payment, OrderSuccess, UserForm } from "./pages";
function App() {
	return (
		<div className="App">
			<div className="main">
				<Routes>
					<Route path="/" element={<Payment />} />
					<Route path="/success" element={<OrderSuccess />} />
					<Route path="/details" element={<UserForm />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
