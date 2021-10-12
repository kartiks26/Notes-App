import React from "react";
import noteContext from "../context/notes/notesContext";
import { useContext, useState, useRef } from "react";

function AddNote() {
	const context = useContext(noteContext);
	const { addNote } = context;
	const [note, setNote] = useState({ title: "", description: "", tag: "" });
	const handelClick = (e) => {
		e.preventDefault();
		addNote(note);
		setNote({ title: "", description: "", tag: "" });
	};
	const onchange = (e) => {
		setNote({ ...note, [e.target.name]: e.target.value });
	};

	return (
		<div className="AddForm">
			<div
				style={{
					minwidth: "auto",
					maxWidth: "40rem",
					minHeight: "auto",
					maxHeight: "30rem",
				}}
				className="card bg-dark px-5  text-light p-4 my-3"
			>
				<h3 className="my-3 text-info">ADD A NOTE</h3>

				<form className="my-3 ">
					<div className="mb-3">
						<label htmlFor="title" className="form-label">
							Title
						</label>
						<input
							value={note.title}
							onChange={onchange}
							name="title"
							type="text"
							className="form-control "
							placeholder="Minimum 3 Letters"
							id="title"
							autoComplete="off"
						/>
						<div id="emailHelp" className="form-text"></div>
					</div>
					<div className="mb-3">
						<label htmlFor="description" className="form-label">
							Description
						</label>
						<textarea
							value={note.description}
							type="text"
							name="description"
							className="form-control  "
							rows="3"
							id="exampleInputPassword1"
							onChange={onchange}
							placeholder="Minimum 3 Letters"
							autoComplete="off"
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="tag" className="form-label">
							tag
						</label>
						<input
							value={note.tag}
							type="text"
							name="tag"
							className="form-control "
							id="tag"
							onChange={onchange}
							autoComplete="off"
						/>
					</div>
					<button
						disabled={note.title.length < 3 || note.description.length < 3}
						onClick={handelClick}
						className="btn btn-info my-1"
					>
						ADD
					</button>
				</form>
			</div>
		</div>
	);
}

export default AddNote;
