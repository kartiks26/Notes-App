import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/About";
import NoteState from "./context/notes/notesState";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
	return (
		<>
			<NoteState>
				<Router>
					<Navbar />
					<div className="container">
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/home">
								<Home />
							</Route>
							<Route exact path="/about">
								<About />
							</Route>
							<Route exact path="/login">
								<Login />
							</Route>
							<Route exact path="/signup">
								<Signup />
							</Route>
						</Switch>
					</div>
				</Router>
			</NoteState>
		</>
	);
}

export default App;
