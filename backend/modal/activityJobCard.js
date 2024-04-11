const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ActivityJobCard = new Schema({
    iconUrl: String,
	jobName: String,
	url: String,
}, {
    timestamps: true
});

const JobActivityCard = mongoose.model("activityJobCard", ActivityJobCard);
module.exports =  JobActivityCard;
