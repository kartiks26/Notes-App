import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import noteContext from "../context/notes/notesContext";
import AddNote from "./AddNote";
import Alert from "./Alert";
function Navbar() {
	let location = useLocation();
	const context = useContext(noteContext);
	// authtoken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1ODY5ODg3YWFhZDgzMmRiYjI3NzA1In0sImlhdCI6MTYzMzE5OTc0N30.u8XtDgkh811U--6SumPYV2yW2eJd2QogTvirFx-0bEo"

	const { usersData, logout } = context;
	const { name } = usersData.user;
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						Notebook
						<i
							style={{ padding: "0rem 0rem  0rem 0.8rem" }}
							className="fas fa-clipboard"
						></i>
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link
									className={`nav-link mx-1 ${
										location.pathname === "/home" ? "active" : ""
									}`}
									aria-current="page"
									to="/home"
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className={`mx-1 nav-link ${
										location.pathname === "/about" ? "active" : ""
									}`}
									to="/about"
								>
									About
								</Link>
							</li>
							<div class="btn-group dropdown mx-1">
								<button
									type="button"
									class="btn btn-dark dropdown-toggle"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Add Note
									<i
										style={{ padding: "0rem 0rem 0rem 0.5rem" }}
										className="fas fa-plus"
									></i>
								</button>
								<ul
									style={{
										width: "38rem",
										height: "10rem",
									}}
									class="dropdown-menu  bg-dark	"
								>
									<div style={{}}>
										<AddNote />
									</div>
								</ul>
							</div>
						</ul>

						<div class="btn-group  dropstart">
							<button
								type="button"
								class="btn btn-dark dropdown-toggle"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								{name}
							</button>
							<ul class="dropdown-menu  my-5 mx-0">
								<li>
									<Link class="dropdown-item   my-2 " to="/signup">
										Signup
									</Link>
								</li>
								<li>
									<Link class="dropdown-item  my-2" to="/login">
										Login
									</Link>
								</li>
								<li>
									<Link
										onClick={() => {
											logout();
										}}
										class="dropdown-item   my-2"
										to="/login"
									>
										Logout
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<Alert />
		</>
	);
}

export default Navbar;
