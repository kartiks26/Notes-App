import noteContext from "./notesContext";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const host = "http://localhost:4000";

const NoteState = (props) => {
	const initialNotes = [];
	const [notes, setNotes] = useState([]);
	const [message, setMessage] = useState("");
	let history = useHistory();
	useEffect(() => {
		if (localStorage.getItem("token") != null) {
			FetchAllNotes();
		} else {
			setMessage("Please Login");
		}
	}, [localStorage.getItem("token")]);
	const FetchAllNotes = async () => {
		const url = "http://localhost:4000/api/notes/fetchAllNotes";
		const response = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token"),
			},
		});
		const data = await response.json();
		setNotes(data);
		if (data) {
			setMessage("Notes fetched successfully");
		} else {
			setMessage("Failed to fetch notes");
		}
		setTimeout(() => {
			setMessage(null);
		}, 3000);
		userData();
	};

	// Add Note
	const addNote = async (note) => {
		// CallApi
		const url = "http://localhost:4000/api/notes/addNote";

		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token"),
			},
			body: JSON.stringify({
				title: note.title,
				description: note.description,
				tag: note.tag,
			}),
		});
		console.log(note);
		const json = await response.json();
		setMessage(json.message);
		setTimeout(() => {
			setMessage(null);
		}, 3000);
		console.log(json);
		setNotes([...notes, note]);
	};
	// Delete Note
	const DeleteNote = async (id) => {
		// api/notes/deleteNote/
		const url = ` http://localhost:4000/api/notes/deleteNote/${id}`;
		const response = await fetch(url, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token"),
			},
		});
		const json = await response.json();
		setMessage(json.message);
		setTimeout(() => {
			setMessage(null);
		}, 3000);
		console.log(json);
		console.log("Delete Note with id" + id);
		setNotes(notes.filter((note) => note._id !== id));
	};

	// Edit Note
	const EditNote = async (id, title, description, tag) => {
		// CallApi
		const url = `${host}/api/notes/updateNote/${id}`;
		const response = await fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token"),
			},
			body: JSON.stringify({
				title,
				description,
				tag,
			}),
		});
		const json = await response.json();
		setMessage(json.message);
		setTimeout(() => {
			setMessage(null);
		}, 3000);

		// client Side Render
		notes.forEach((element) => {
			if (element._id === id) {
				element.title = title;
				element.description = description;
				element.tag = tag;
			}
		});
		setNotes([...notes]);
	};
	const [usersData, setUseData] = useState({
		success: true,
		user: {
			_id: "615869887aaad832dbb27705",
			name: "Login Here",
			email: "Kuncaa1l@gmail.com",
			date: "2021-10-02T14:15:36.102Z",
			__v: 0,
		},
	});

	const userData = async () => {
		const url = "http://localhost:4000/api/auth/getUser";
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token"),
			},
		});
		const data = await response.json();
		if (data.success) {
			setUseData(data);
		}
		console.log(usersData);
	};
	const logout = async () => {
		localStorage.setItem(
			"token",
			"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE1YjBiOThhMzE5YjMxMzRiMTM4MDI4In0sImlhdCI6MTYzMzM1NjcyMH0.OrR6d40uXkpcao9yie1qU2tDrPvCmUzV01pCxdaDRrA"
		);
	};
	return (
		<noteContext.Provider
			value={{
				notes,
				addNote,
				DeleteNote,
				EditNote,
				FetchAllNotes,
				message,
				setMessage,
				usersData,
				logout,
			}}
		>
			{props.children}
		</noteContext.Provider>
	);
};
export default NoteState;
