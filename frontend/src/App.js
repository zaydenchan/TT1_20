import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";
import Registration from "./components/Registration";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<LoginPage />} />
				<Route exact path="/dashboard" element={<Dashboard />} />
				<Route exact path="/registration" element={<Registration />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
