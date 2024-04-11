const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Objective = new Schema({
	aboutParagraph: String
}, {
    timestamps: true
});

const ObjectiveData = mongoose.model("objective", Objective);
module.exports =  ObjectiveData;
