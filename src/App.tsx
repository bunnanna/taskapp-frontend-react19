import { Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import Home from "./pages/home/Home";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/sign-up/SignUpPage";

function App() {
	return (
		<Routes>
			<Route element={<PageLayout />}>
				<Route index element={<Home />} />
				<Route path="/sign-up" element={<SignUpPage />} />
				<Route path="/login" element={<LoginPage />} />
			</Route>
		</Routes>
	);
}

export default App;
