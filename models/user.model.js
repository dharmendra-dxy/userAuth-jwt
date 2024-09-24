const mongoose = require("mongoose");
const {isEmail} = require("validator");

// userSchema:
const userSchema = new mongoose.Schema({
    name : {
        type: String,
        require: true,
    },
    email : {
        type: String,
        require: [true, "Please enter an email"],
        unique: true,
        lowerchase:true,
        validate: [isEmail, "Please enter a valid email"],
    },
    password : {
        type: String,
        require: [true, "Please enter an password"],
        minlength: [6, "Minimum length of password is 6"],
    },

}, {timestamps: true });

// user Model:
const User = mongoose.model("user", userSchema);


module.exports = User;