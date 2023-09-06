import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Templete from "./Pages/Templete";
import Contact from "./Pages/Contact";

import Header from "./Componets/Header";
import Footer from "./Componets/Fotter";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/Aboutus">
						<Aboutus />
					</Route>
					<Route path="/Templete">
						<Templete />
					</Route>
					<Route path="/Contact">
						<Contact />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
