import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";
import Header from "./components/Header";

const App = () => (
	<BrowserRouter>
		<Header />

		<Routes>
			<Route path="/" element={<div></div>} />
			<Route path="pokemon" element={<Home />} />
			<Route path="pokemon/:name" element={<Pokemon />} />
			<Route path="/*" element={<div>Not found</div>} />
		</Routes>
	</BrowserRouter>
);

export default App;
