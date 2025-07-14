const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema({
	materialType: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'materialType'
	},
	quantity: {
		type: Number,
		required: true
	},
	created: {
		type: Date,
		default: Date.now
	}
});

const materialModel = new mongoose.model("material", materialSchema);

module.exports = materialModel;