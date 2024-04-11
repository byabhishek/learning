const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const LatestActivity = new Schema({
	paragraph: String,
}, {
    timestamps: true
});

const ActivityLatest = mongoose.model("latestActivity", LatestActivity);
module.exports =  ActivityLatest;
