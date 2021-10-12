const jwt = require("jsonwebtoken");
const fetchUser = async (req, res, next) => {
	// Get User from the jwt token and add id to req
	const Jwt_Secret = "IAMGOODCODER";
	const token = req.header("auth-token");
	if (!token) {
		res.status(401).json({
			error: "No token provided",
		});
	}
	try {
		const data = await jwt.verify(token, Jwt_Secret);
		req.user = data.user;
		next();
	} catch (err) {
		res.status(401).json({
			error: "Invalid token here",
		});
	}
};
module.exports = fetchUser;
