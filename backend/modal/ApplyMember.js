const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ApplyMember = new Schema({
	FullName: String,
	Gender: String,
	State: String,
	District: String,
	City: String,
	MobileNumber: String,
	Email: String,
	UpiMethod: String,
	UpiUploadImg: String,
}, {
    timestamps: true
});

const Applymembers = mongoose.model("ApplyMember", ApplyMember);
module.exports =  Applymembers;
