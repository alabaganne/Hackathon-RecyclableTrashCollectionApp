const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const bcrypt = require("bcrypt");

const saltRounds = 10;

router.get("/", function(req, res) {
	return res.render("register");
});

router.post("/", function(req, res) {
	const {
		name,
		email,
		password,
		role // user, admin, company
	} = req.body;

	if(name && email && password && password.length >= 8 && role && ["user", "admin", "company"].indexOf(role) != -1) {
		bcrypt.hash(password, saltRounds, function(err, hashedPassword) {
			userModel.create({
				name,
				email,
				password: hashedPassword,
				role
			}).then(function() {
				return res.redirect("/login");
			});
		});
	} else {
		return res.status(422).json({
			message: "invalid data"
		});
	}
});

module.exports = router;