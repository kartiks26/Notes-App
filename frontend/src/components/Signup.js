import React, { useState } from "react";
import noteContext from "../context/notes/notesContext";
import { useContext } from "react";
import ref from "react";
import { Link, useLocation } from "react-router-dom";

function Signup() {
	const [data, setData] = useState({ name: "", email: "", password: "" });
	const onchange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};
	const context = useContext(noteContext);
	const { setMessage } = context;
	const ref1 = ref.createRef();
	const handelOnClick = async (data) => {
		try {
			const response = await fetch("http://localhost:4000/api/auth/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: data.name,
					email: data.email,
					password: data.password,
				}),
			});
			const json = await response.json();
			setMessage(json.message);
			ref1.current.click();
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			<form className="my-5">
				<label htmlFor="Name" className="form-label ">
					Name
				</label>
				<input
					className="form-control my-2"
					placeholder="Enter Name"
					type="text"
					onChange={onchange}
					name="name"
					id="Name"
				/>
				<label htmlFor="email" className="form-label">
					Email
				</label>
				<input
					className="form-control my-2"
					placeholder="Enter Email"
					type="email"
					onChange={onchange}
					name="email"
					id="email"
				/>
				<label htmlFor="password" className="form-label">
					Password
				</label>
				<input
					className="form-control my-2	"
					placeholder=" Enter Password"
					type="password"
					onChange={onchange}
					name="password"
					id="password"
				/>
			</form>
			<Link to="/" ref={ref1}></Link>

			<button
				className="btn btn-primary my-2	"
				onClick={(e) => {
					e.preventDefault();
					handelOnClick(data);
				}}
			>
				Signup
			</button>
		</div>
	);
}

export default Signup;
