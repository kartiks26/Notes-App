const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchUser = require("../middleware/fetchUser");

const Jwt_Secret = "IAMGOODCODER";

// ROTE 1
// Create a new user by /api/auth/signup doesn't Require Authentication

router.post(
	"/signup",
	[
		body("name", "Enter valid Name").isLength({
			min: 3,
		}),
		body("email", "Enter valid Email").isEmail(),
		body("password", "Enter valid Password").isLength({
			min: 6,
		}),
	],
	async (req, res) => {
		// If There Are errors , return bad request
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({
				success: false,
				errors: errors.array(),
			});
		}

		// Check For User Email Already Exist
		const { name, email, password } = req.body;
		try {
			let user = await User.findOne({ email: email });

			if (user) {
				return res.status(400).json({
					success: false,
					message: "Email Dose Not Exists Or Already Exists",
				});
			}
			const salt = await bcrypt.genSalt(10);
			var secPassword = await bcrypt.hash(password, salt);
			user = await User.create({
				name: name,
				email: email,
				password: secPassword,
			});
			const data = {
				user: {
					id: user.id,
				},
			};
			const authToken = jwt.sign(data, Jwt_Secret);
			res.status(200).json({
				success: true,
				message: "User Created Successfully",
				authToken,
			});
		} catch (error) {
			console.log(error);
			res.status(500).json({
				success: false,
				message: "Internal Server Error",
			});
		}
	}
);

// ROTE 2
// Authenticate User by /api/auth/login
router.post(
	"/login",
	[
		body("email", "Enter valid Email").isEmail(),
		body("password", "Enter valid Password").exists(),
	],
	async (req, res) => {
		// If There Are errors , return bad request
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({
				success: false,
				errors: errors.array(),
			});
		}
		const { email, password } = req.body;
		try {
			let user = await User.findOne({ email: email });
			if (!user) {
				return res.status(400).json({
					success: false,
					message: "Try Login In With Correct Credentials",
				});
			}
			const passwordMatch = await bcrypt.compare(password, user.password);
			if (!passwordMatch) {
				return res.status(400).json({
					success: false,
					message: "Try Login In With Correct Credentials",
				});
			}
			const payload = {
				user: {
					id: user.id,
				},
			};
			const authtoken = jwt.sign(payload, Jwt_Secret);
			res.json({
				success: true,
				authtoken,
			});
		} catch (error) {
			console.log(error);
			res.status(500).json({
				success: false,
				message: "Internal Server Error",
			});
		}
	}
);

// Route 3
// Get LoggedIn User Details by /api/auth/getUser
router.post("/getUser", fetchUser, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select("-password");
		res.json({
			success: true,
			user,
		});
	} catch {
		res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
});

module.exports = router;
