const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Role: String,
    FullName: String,
    MobileNumber: String,
    UserId: String,
    Email: String,
    Password: String
},{
    timestamps: true
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
