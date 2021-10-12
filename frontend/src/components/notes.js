import React, { useEffect, useState } from "react";
import noteContext from "../context/notes/notesContext";
import { useContext, useRef } from "react";
import NoteItem from "./NoteItem";
export const Notes = () => {
	const context = useContext(noteContext);
	const { notes, setNotes, EditNote, FetchAllNotes } = context;

	useEffect(() => {
		FetchAllNotes();
	}, []);
	const ref = useRef("");
	const ref2 = useRef("");
	const [note, setNote] = useState({
		title: "",
		description: "",
		tag: "",
	});
	const updateNote = (currentNode) => {
		ref.current.click();
		setNote(currentNode);
	};
	const onchange = (e) => {
		setNote({ ...note, [e.target.name]: e.target.value });
	};

	const handelClick = (e) => {
		e.preventDefault();
		console.log(note);
		const { id, title, description, tag } = note;
		EditNote(id, title, description, tag);
		ref2.current.click();
	};
	return (
		<div className="row  ">
			<div>
				<button
					ref={ref}
					type="button"
					className="btn btn-primary d-none"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal"
					visible="none"
				></button>

				<div
					className="modal fade"
					id="exampleModal"
					tabindex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLabel">
									Modal title
								</h5>
								<button
									type="button"
									className="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div className="modal-body">
								<form className="my-3">
									<div className="mb-3">
										<label for="title" className="form-label">
											Title
										</label>
										<input
											value={note.title}
											onChange={onchange}
											name="title"
											type="text"
											className="form-control"
											id="title"
											aria-describedby="emailHelp"
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
											className="form-control "
											id="exampleInputPassword1"
											rows="3"
											onChange={onchange}
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
										/>
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-bs-dismiss="modal"
									ref={ref2}
								>
									Close
								</button>
								<button
									type="button"
									onClick={(e) => {
										handelClick(e);
									}}
									className="btn btn-primary"
								>
									Save changes
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{localStorage.getItem("token") === null
				? " "
				: notes.map((note) => {
						const Colors = ["primary", "secondary", "success", "danger"];
						const randomColor =
							Colors[Math.floor(Math.random() * Colors.length)];

						return (
							<NoteItem
								key={note._id}
								title={note.title}
								description={note.description}
								tag={note.tag}
								randomColor={randomColor}
								id={note._id}
								updateNote={updateNote}
							/>
						);
				  })}
		</div>
	);
};
