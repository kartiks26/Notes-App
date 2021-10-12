import React from "react";
import noteContext from "../context/notes/notesContext";
import { useContext, useEffect, useState } from "react";
function Alert(props) {
	const context = useContext(noteContext);
	const { message } = context;
	const [show, setShow] = useState(false);
	useEffect(() => {
		if (message !== null) {
			setShow(true);
		} else {
			setShow(false);
		}
	});
	return (
		<div className={`alert alert-primary  ${show ? "" : " fade"}`} role="alert">
			{message}
		</div>
	);
}

export default Alert;
