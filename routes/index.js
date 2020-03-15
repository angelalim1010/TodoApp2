//File that will render the login, signup and home page

const express = require("express");
const router = express.Router();

//get homepage
router.get("/", async (req, res, next) => {
	try {
		let currUser =
			req.signedCookies.user !== undefined
				? req.signedCookies.user
				: "Not Logged In. Please login";
		res.render("index", { user: currUser });
	} catch (err) {
		console.log(err);
	}
});

// gets login form
router.get("/login", async (req, res, next) => {
	try {
		res.render("login");
	} catch (err) {
		console.log(err);
	}
});

// gets signup form
router.get("/signup", async (req, res, next) => {
	try {
		res.render("signup");
	} catch (err) {
		console.log(err);
	}
});

module.exports = router;
