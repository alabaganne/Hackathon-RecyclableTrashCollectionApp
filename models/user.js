const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: {
		required: true,
		type: String
	},
	email: {
		required: true,
		type: String
	},
	password: {
		required: true,
		type: String
	},
	role: {
		required: true,
		type: String
	},
	created: {
		type: Date,
		default: Date.now
	}
});

const userModel = new mongoose.model("user", userSchema);

module.exports = userModel;