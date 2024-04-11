const mongoose = require("mongoose");

const Problems = mongoose.Schema({
	FullName:String,
	MobileNumber: String,
	City: String,
	Message: String,
	Description: String
});

const yourProblems = mongoose.model("ourProblems", Problems);
module.exports = yourProblems;
