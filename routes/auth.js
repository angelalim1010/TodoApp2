//File for login and logout of user

const express = require("express");
const router = express.Router();

const axios = require("axios");

const API_URL = process.env.API_URL;


//POST for login 
//auth/login
router.post("/login", async(req,res,next)=>{
    try {
		const response = await axios.post(`${API_URL}/auth`, {
			username: req.body.username
		});
		res.cookie("Authentication", response.data.token, {
			signed: true,
			httpOnly: true
		});
		res.cookie("user", req.body.username, {
			signed: true,
			httpOnly: true
		});
		res.status(200).json(
			// {username: req.body.username}
			response.data
			);
	} catch (err) {
		if (err.response.status === 400) {
			console.log("error response status for login is: ", err.response.status)
			res.json({
				message: "Error. User doesn't exist. Please signup",
				error: { err }
			})
		}
	}
});

//GET for logout 
// /auth/logout
router.delete("/logout", async(req,res,next)=>{
	try {
		res.clearCookie("Authentication");
		res.status(200).json({ status: "ok" });
		console.log("logout successfully");
	} catch (err) {
		console.log(err);
	}
})

module.exports = router;
