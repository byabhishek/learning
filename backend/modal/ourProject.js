const mongoose = require("mongoose");

const UpcomingEvents = mongoose.Schema({
	imgUrl:String,
	cardTitle:String,
	Description: String
});

const ourProjects = mongoose.model("upcomingEvents", UpcomingEvents);
module.exports =  ourProjects;