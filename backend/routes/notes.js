const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");
const { findByIdAndUpdate } = require("../models/Notes");
const Notes = require("../models/Notes");

// Route 1
// get All Notes From DATABASE
router.get("/fetchAllNotes", fetchUser, async (req, res) => {
	try {
		const notes = await Notes.find({ user: req.user.id });
		res.json(notes);
	} catch (err) {
		console.error(err.message);
		res.status(500).json({ message: "Server Error" });
	}
});

// Route 2
// Add A new Notes From post request To  DATABASE login required
router.post(
	"/addNote",
	fetchUser,
	[
		body("title", "Enter  Valid Title").isLength({ min: 3 }),
		body("description", "Enter  Valid Description").isLength({ min: 3 }),
	],
	async (req, res) => {
		try {
			// Validation Of Inputs
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(400).json({
					message: "invalid Token",
					errors: errors.array(),
				});
			}

			const { title, description, tag } = req.body;

			const newNote = new Notes({
				title,
				description,
				tag,
				user: req.user.id,
			});
			const savedNote = await newNote.save();
			res.status(201).json({
				message: "Note Added Successfully",
				data: savedNote,
			});
		} catch (error) {
			console.error(error.message);
			res.status(500).send({ message: "Server Error" });
		}
	}
);

// Route 3: Update Notes
// Update Note in database by put request
router.put("/updateNote/:id", fetchUser, async (req, res) => {
	const { title, description, tag } = req.body;
	// Create New Note Object
	const newNote = {};
	if (title) {
		newNote.title = title;
	}
	if (description) {
		newNote.description = description;
	}
	if (tag) {
		newNote.tag = tag;
	}

	// Find node to update

	var note = await Notes.findById(req.params.id);
	if (!note) {
		return res.status(404).json({ message: "Note Not Found" });
	}
	if (note.user.toString() !== req.user.id) {
		return res.status(401).json({ message: "Not Authorized" });
	}

	note = await Notes.findByIdAndUpdate(req.params.id, newNote, { new: true });
	res.json({
		message: "Note Updated Successfully",
		data: note,
	});
});

// Route 4
// Delete A Node;

router.delete("/deleteNote/:id", fetchUser, async (req, res) => {
	try {
		// Find node to delete
		var note = await Notes.findById(req.params.id);
		if (!note) {
			return res.status(404).json({ message: "Note Not Found" });
		}
		// Allow Deletion Only if authenticated user is the owner of the note

		if (note.user.toString() !== req.user.id) {
			return res.status(401).json({ message: "Not Authorized" });
		}
		note = await Notes.findByIdAndRemove(req.params.id);
		res.json({ message: "Note Deleted" });
	} catch (error) {
		console.error(error.message);
		res.status(500).send({ message: "Server Error" });
	}
});

module.exports = router;
