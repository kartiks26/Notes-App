import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import noteContext from "../context/notes/notesContext";
import { useContext } from "react";

function Login() {
	const context = useContext(noteContext);
	const { setMessage, Login, FetchAllNotes, userData } = context;
	let history = useHistory();
	const handelOnSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = data;
		const response = await fetch("http://localhost:4000/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
		const json = await response.json();

		if (json.success) {
			console.log(json);
			localStorage.setItem("token", json.authtoken);
			setMessage("You Are Logged In");
		} else {
			console.log("Login Failed");
			setMessage("Login Failed");
		}
	};

	const [data, setData] = useState({ email: "", password: "" });
	const onchange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	return (
		<form className="my-5">
			<div className="mb-3">
				<label for="exampleInputEmail1" className="form-label">
					Email address
				</label>
				<input
					name="email"
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					value={data.email}
					onChange={onchange}
				/>
				<div id="emailHelp" className="form-text">
					We'll never share your email with anyone else.
				</div>
			</div>
			<div className="mb-3">
				<label for="exampleInputPassword1" className="form-label">
					Password
				</label>
				<input
					value={data.password}
					name="password"
					type="password"
					className="form-control"
					id="exampleInputPassword1"
					onChange={onchange}
				/>
			</div>

			<button
				type="submit"
				onClick={(e) => {
					handelOnSubmit(e);
				}}
				className="btn btn-primary"
			>
				Submit
			</button>
		</form>
	);
}

export default Login;
