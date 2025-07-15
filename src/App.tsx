import { Route, Routes } from "react-router-dom";
import PageLayout from "./layouts/PageLayout";
import Home from "./pages/home/Home";

function App() {
	return (
		<Routes>
			<Route element={<PageLayout />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
