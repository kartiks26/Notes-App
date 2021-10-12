import React from "react";
import noteContext from "../context/notes/notesContext";
import { useContext } from "react";
function NoteItem(props) {
	const { title, description, tag, randomColor, id, updateNote } = props;
	const context = useContext(noteContext);
	const { DeleteNote, EditNote } = context;
	
	return (
		<div
			className={`card text-white bg-${randomColor}  my-4`}
			style={{
				maxWidth: "18rem",
				margin: " auto",
			}}
		>
			<div className="card-body ">
				<span className="badge  bg-dark p-2 py-2">{tag}</span>
			</div>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				<i
					className="fas fa-edit mx-5"
					onClick={() => {
						updateNote({ title, description, tag, id });
					}}
				></i>
				<i
					onClick={() => {
						DeleteNote(id);
					}}
					className="fas fa-trash-alt "
				></i>
			</div>
		</div>
	);
}

export default NoteItem;
