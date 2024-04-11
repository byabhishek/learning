const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const AboutUs = new Schema({
	aboutParagraph: String
}, {
    timestamps: true
});

const AboutUsData = mongoose.model("aboutUs", AboutUs);
module.exports =  AboutUsData;
