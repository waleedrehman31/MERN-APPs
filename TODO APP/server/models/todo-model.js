const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
	{
		todo: {
			type: String,
			required: true,
		},
		isCompelte: {
			type: Boolean,
			default: false,
		},
		userID: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model("Todo", todoSchema);
