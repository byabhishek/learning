const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SliderSchema = new Schema({
    imgUrl: String,
    name: String,
    designation: String,
    class: String,
}, {
    timestamps: true
});

const MemberSlider = mongoose.model("MemberSliders", SliderSchema);
module.exports = MemberSlider;
