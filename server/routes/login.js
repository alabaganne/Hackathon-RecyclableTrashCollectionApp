const userModel = require("../models/user");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", function(req, res) {
	return res.render("login");
});

router.post("/", function(req, res) {
	const {
		email,
		password
	} = req.body;

	userModel.findOne({ email }, function(err, user) {
		if(err) {
			console.log(err);
			return res.render('login', {
				message: "Wrong credentials!"
			});
		}

		if(!user) {
			return res.render('login', {
				message: "Wrong credentials!"
			});
		}

		bcrypt.compare(password, user.password, function(err, same) {
			if(!same) {
				return res.render('login', {
					message: "Wrong credentials!"
				});
			}

			let token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: 604800 });
			
			res.cookie("token", token, {
				httpOnly: true
			});

			res.redirect("/dashboard");
		});
	});
});

module.exports = router;