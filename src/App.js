import { Routes, Route } from "react-router-dom";
import "./App.css";
import { UPI, COD, UserForm, Home } from "./pages";
function App() {
	return (
		<div className="App">
			<div className="main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/upi" element={<UPI />} />
					<Route path="/success" element={<COD />} />
					<Route path="/details" element={<UserForm />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
