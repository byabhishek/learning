const mongoose = require("mongoose");

const DonateMoney = mongoose.Schema({
	FullName: String,
	MobileNumber: String,
	City: String,
	UpiMethod: String,
	UpiUploadImg: String,
	Description:String,
});

const DonateMoneys = mongoose.model("donate", DonateMoney);
module.exports = DonateMoneys;
