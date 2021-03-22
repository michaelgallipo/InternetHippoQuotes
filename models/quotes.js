const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
	quote: {
		type: String,
		trim: true,
	},
	author: {
		type: String,
		trim: true,
	},
	source: {
		type: String,
		trim: true,
	},
});

module.exports = mongoose.model("Registration", registrationSchema);
