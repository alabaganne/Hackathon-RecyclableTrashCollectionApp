const mongoose = require("mongoose");

const materialTypeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	buyPrice: {
		required: true,
		type: Number
	},
	sellPrice: {
		required: true,
		type: Number
	},
	created: {
		type: Date,
		default: Date.now
	}
});

const materialModel = new mongoose.model("materialType", materialTypeSchema);

module.exports = materialModel;